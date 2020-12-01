const TasksRepository = require("../../sequelize/repositories/TasksRepository");
const UsersRepository = require("../../../../users/infra/sequelize/repositories/UsersRepository");

const ShowIndicatorsService = require("../../../services/ShowIndicatorsService");

const tasksRepository = new TasksRepository();
const usersRepository = new UsersRepository();

class TasksController {
    async show(request, response) {
        const { start_date, end_date } = request.query;

        const showIndicators = new ShowIndicatorsService(tasksRepository, usersRepository);

        const indicators = await showIndicators.execute({ start_date: new Date(start_date), end_date: new Date(end_date) });

        return response.json(indicators);
    }
}

module.exports = TasksController;