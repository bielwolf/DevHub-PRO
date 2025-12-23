'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        email: 'admin@email.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'joao',
        email: 'joao@email.com',
        password: 'abcdef',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'maria',
        email: 'maria@email.com',
        password: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
