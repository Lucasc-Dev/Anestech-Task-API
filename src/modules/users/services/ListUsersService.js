class ListUsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ page = 0 }) {
        const users = await this.usersRepository.findMany(page);

        return users;
    }
}

module.exports = ListUsersService;