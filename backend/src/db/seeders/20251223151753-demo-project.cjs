'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projects', [
       {
        user_id: 1,
        name: 'DevHub Pro',
        description: 'Sistema completo para gerenciamento de projetos e tarefas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: 'API Auth',
        description: 'Implementação de autenticação e autorização de usuários.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        name: 'Website Pessoal',
        description: 'Site pessoal para portfólio e apresentação profissional.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        name: 'Sistema Escolar',
        description: 'Projeto para controle de alunos, notas e professores.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        name: 'App Fitness',
        description: 'Aplicativo para acompanhamento de treinos e dieta.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        name: 'E-commerce',
        description: 'Plataforma de vendas online com carrinho de compras.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
