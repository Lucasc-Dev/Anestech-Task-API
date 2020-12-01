const { Op } = require('sequelize');

const User = require("../../../../users/infra/sequelize/models/User");
const Task = require("../models/Task");

class TasksRepository {
    async create(data) {
        const task = await Task.create(data);

        return task;
    }

    async save(task) {
        await task.save();
    }
    
    async findMany({ page, description, status, orderBy, crescent }) {
        const tasks = await Task.findAndCountAll({ 
            where: {
                description: { [Op.like]: `%${description}%` },
                status: { [Op.like]: `%${status}%` },
            },
            order: [
                [orderBy, crescent]
            ],
            offset: 5 * page, 
            limit: 5,
            include: {
                model: User,
                as: 'user',
            }
        });

        return tasks;
    }

    async findById(id) {
        const task = await Task.findByPk(
            id,
            {
                include: {
                    model: User,
                    as: 'user',
                }
            }
        );

        return task;
    }

    async findManyInPeriod({ start_date, end_date }) {
        const tasks = await Task.findAndCountAll({
            where: {
                created_at: {
                    [Op.between]: [start_date, end_date],
                },
            }
        });

        return tasks;
    }
}

module.exports = TasksRepository;