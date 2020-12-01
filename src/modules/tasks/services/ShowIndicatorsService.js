const { isBefore, differenceInCalendarYears, differenceInHours } = require('date-fns');
const AppError = require("../../../shared/errors/AppError");

class ShowIndicatorsService {
    constructor(tasksRepository, usersRepository) {
        this.tasksRepository = tasksRepository;

        this.usersRepository = usersRepository;
    }

    async execute({ start_date, end_date }) {
        if (isBefore(end_date, start_date)) {
            throw new AppError('The end date cannot be before the start date')
        }

        if (differenceInCalendarYears(end_date, start_date) > 3) {
            throw new AppError('You cannot see the indicators of more than three years of distance');
        }

        const tasks = await this.tasksRepository.findManyInPeriod({ start_date, end_date });

        const users = await this.usersRepository.findMany(0);

        const tasks_done = tasks.rows.filter(task => task.status === 'finished').length;
        
        const users_task_done_average = tasks.rows.filter(task => task.status === 'finished').length / users.count;
        
        let index = 0;

        let created_to_started_time_average = tasks.rows.reduce(
            (acumulator, { dataValues: current }) => {
                if (current.started_at) {
                    index++;
                    return acumulator + differenceInHours(current.started_at, current.createdAt) ;
                }else{
                    return acumulator;
                }
            }, 0,
        ) / index; 

        if (!created_to_started_time_average && created_to_started_time_average !== 0) {
            created_to_started_time_average = 'Insufficient data';
        }

        index = 0;

        let started_to_finished_time_average = tasks.rows.reduce(
            (acumulator, { dataValues: current }) => {
                if (current.started_at && current.finished_at) {
                    index++;
                    return acumulator + differenceInHours(current.finished_at, current.started_at);
                }else{
                    return acumulator;
                }
            }, 0,
        ) / index; 

        if (!started_to_finished_time_average && started_to_finished_time_average !== 0) {
            started_to_finished_time_average = 'Insufficient data';
        }

        const response = {
            start_date, 
            end_date,
            tasks_count: tasks.count,
            tasks_done,
            users_task_done_average,
            created_to_started_time_average,
            started_to_finished_time_average,
        }

        return response;
    }
}

module.exports = ShowIndicatorsService;