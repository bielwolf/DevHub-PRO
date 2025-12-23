'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'users'
      })

      Project.hasMany(models.Task, {
        foreignKey: 'project_id',
        as: 'tasks'
      })
    }
  }
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Acrescente um nome ao seu projeto' }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: {
          args: [10, 1000],
          msg: 'A descrição deve conter ter entre 10 e 1000 caracteres'
        }
      }
    }
  },
    {
      sequelize,
      modelName: 'Project',
      tableName: 'projects',
      timestamps: true
    });
  return Project;
};