class ListTasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    async execute({ page = 0, description = '', status = '', orderBy, crescent}) {
        switch(orderBy) {
            case 'creation': 
                orderBy = 'created_at';
                break;
            case 'status':
                orderBy = 'status';
                break;
            default:
                orderBy = 'created_at';
        }

        crescent = crescent == 'true' ? 'ASC' : 'DESC'
        
        const tasks = await this.tasksRepository.findMany({ page, description, status, orderBy, crescent });

        return tasks;
    }
}

module.exports = ListTasksService;