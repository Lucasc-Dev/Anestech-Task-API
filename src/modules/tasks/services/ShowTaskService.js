const AppError = require("../../../shared/errors/AppError");

class ShowTaskService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    async execute(task_id) {
        const task = await this.tasksRepository.findById(task_id);

        if (!task) {
            throw new AppError('Task not found');
        }

        return task;
    }
}

module.exports = ShowTaskService;