const AppError = require("../../../shared/errors/AppError");

class UpdateTaskService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    async execute({ task_id, description, status, started_at, finished_at }) {
        const task = await this.tasksRepository.findById(task_id);

        if (!task) {
            throw new AppError('Task not found');
        }

        task.description = description;
        task.status = status;

        if (started_at) {
            task.started_at = started_at;
        }

        if (finished_at) {
            task.finished_at = finished_at;
        }

        await this.tasksRepository.save(task);

        return task;
    }
}

module.exports = UpdateTaskService;