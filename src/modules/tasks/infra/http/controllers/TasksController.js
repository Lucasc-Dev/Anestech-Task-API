const TasksRepository = require("../../sequelize/repositories/TasksRepository");

const CreateTaskService = require("../../../services/CreateTaskService");
const UpdateTaskService = require("../../../services/UpdateTaskService");
const ListTasksService = require("../../../services/ListTasksService");
const ShowTaskService = require("../../../services/ShowTaskService");

const tasksRepository = new TasksRepository();

class TasksController {
    async index(request, response) {
        const { page, description, status, orderBy, crescent } = request.query;

        const listTasks = new ListTasksService(tasksRepository);

        const tasks = await listTasks.execute({ page, description, status, orderBy, crescent });

        return response.json(tasks);
    }

    async show(request, response) {
        const { task_id } = request.params;

        const showTask = new ShowTaskService(tasksRepository);

        const task = await showTask.execute(task_id);

        return response.json(task);
    }

    async create(request, response) {
        const user = request.user;
        const { description } = request.body;

        const createTask = new CreateTaskService(tasksRepository);

        const task = await createTask.execute({ user, description });

        return response.json(task);
    }

    async update(request, response) {
        const { task_id } = request.params;
        const { description, status, started_at, finished_at } = request.body;

        const updateTask = new UpdateTaskService(tasksRepository);

        const task = await updateTask.execute({ task_id, description, status, started_at, finished_at });

        return response.json(task);
    }
}

module.exports = TasksController;