class CreateTaskService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    async execute({ user, description }) {
        const task = await this.tasksRepository.create({
            user_id: user.id, 
            description, 
            status: 'created', 
        });

        return task;
    }
}

module.exports = CreateTaskService;