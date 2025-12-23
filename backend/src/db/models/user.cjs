'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Project, {
        foreignKey: 'user_id',
        as: 'projects'
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Username não pode estar vazio' },
        len: { args: [3, 40], msg: 'O nome deve ter entre 3 e 40 caracteres' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: 'Formato do e-mail inválido' },
        notEmpty: { msg: 'Email não pode estar vazio' }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Deve conter alguma senha' },
        notEmpty: { msg: 'Senha não pode estar vazia' },
        len: { args: [6, 50], msg: 'Senha deve ter entre 6 e 50 caracteres' }
      }
    }
  },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: true
    });
  return User;
};