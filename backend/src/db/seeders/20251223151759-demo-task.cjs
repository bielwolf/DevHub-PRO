'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {
        project_id: 1,
        title: 'Criar models User, Project e Task',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 1,
        title: 'Configurar migrations',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 1,
        title: 'Criar seeders iniciais',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        project_id: 2,
        title: 'Criar login com JWT',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        project_id: 2,
        title: 'Criar middleware de autenticação',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 2,
        title: 'Proteger rotas privadas',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        project_id: 3,
        title: 'Criar layout inicial',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 3,
        title: 'Adicionar seção de projetos',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 3,
        title: 'Publicar no GitHub Pages',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        project_id: 4,
        title: 'Modelar banco de dados',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 4,
        title: 'Criar CRUD de alunos',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 4,
        title: 'Criar CRUD de notas',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        project_id: 5,
        title: 'Definir requisitos do app',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 5,
        title: 'Criar tela de treinos',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 5,
        title: 'Criar tela de dieta',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        project_id: 6,
        title: 'Criar catálogo de produtos',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 6,
        title: 'Criar carrinho de compras',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_id: 6,
        title: 'Integrar pagamento',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
