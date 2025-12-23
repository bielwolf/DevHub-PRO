# MVP – DevHub Pro

## Problema
Equipes pequenas de desenvolvimento precisam organizar
projetos e tarefas de forma simples.

## Objetivo
Permitir que usuários criem projetos e gerenciem tarefas básicas.

## Funcionalidades incluídas
- Cadastro e login
- Criar projetos
- Criar tarefas
- Marcar tarefas como concluídas
- Dashboard simples

## Fora do escopo (por enquanto)
- OAuth2
- WebSockets
- GraphQL
- WordPress
- Infra cloud

## Usuário-alvo
Desenvolvedores e pequenas equipes.

## Critério de sucesso
O usuário consegue se cadastrar, fazer login, criar um projeto,
criar tarefas e marcar tarefas como concluídas sem erros.

# Models do MVP
- User
- Project
- Task

## User
- id
- username
- email
- password
- create_at
- update_at

## Project 
- id
- name
- description
- user_id
- create_at
- update_at

## Task
- id
- title
- completed true | false
- project_id 
- create_at
- update_at

# Rota 
- User
- Project
- Task

# CRUD 
- Criar
- Ler
- Atualizar,
- Delter

## Teste de endpoints com Postman
## Validando relações e integridade dos dados aplicados