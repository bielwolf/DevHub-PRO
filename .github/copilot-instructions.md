<!-- Arquivo gerado pelo assistente. Por favor revise e ajuste com comandos/sindicadores reais do repositório. -->
# Instruções rápidas para agentes de codificação (Copilot / AI)

Objetivo: permitir que um agente AI seja imediatamente produtivo ao explorar, modificar e propor mudanças neste repositório.

1) Estado inicial do repositório
- Atualmente não existem arquivos de documentação padrão (por exemplo, README.md) nem arquivos de guia de agentes detectáveis. Se este repositório tiver um layout esperado (ex: `src/`, `pkg/`, `backend/`, `frontend/`), peça ao mantenedor para confirmar e adicione os paths.

2) Primeiro passos ao abrir o repositório
- Rodar busca por artefatos comuns: `README.md`, `pyproject.toml`, `package.json`, `go.mod`, `setup.py`, `Dockerfile`, `.github/workflows/`.
- Se nada for encontrado, solicitar ao mantenedor: qual linguagem/stack, comandos de build/test, onde o código principal vive.

3) Como descobrir a arquitetura (guia prático para o agente)
- Procurar diretórios `src`, `app`, `services`, `cmd`, `pkg` e arquivos de configuração (Dockerfiles, compose, manifests).
- Encontrar pontos de entrada: `main()`, `server.js`, `index.ts`, `manage.py`, `bin/` scripts.
- Buscar chamadas de rede/DB: clientes HTTP (`requests`, `axios`), drivers (`psycopg2`, `pg`, `mongo`) para inferir integrações.

4) Comandos operacionais — o que pedir ao mantenedor quando ausente
- Build: informe o comando de build (ex.: `npm install && npm run build`, `python -m build`, `go build ./...`).
- Testes: informe o comando de teste (ex.: `npm test`, `pytest -q`, `go test ./...`).
- Execução local: informe como iniciar o serviço (ex.: `docker compose up`, `poetry run python -m app`, `node server.js`).

5) Convenções e padrões a observar (procurar evidências)
- Organização de módulos: procurar imports relativos vs absolutos (indicando preferência). Ex.: em Python, `from app.module import X` vs `from .module import X`.
- Estilo de commit/branches: checar `.github/workflows` e scripts para regras de CI/CD ou lint.
- Gestão de dependências: `requirements.txt` / `pyproject.toml` / `package.json` / `go.mod` — preferir editar esses arquivos para mudanças de dependência.

6) Ao escrever código: regras específicas para este repositório
- Prefira mudanças mínimas e focadas: crie PRs pequenos que alterem apenas o necessário.
- Inclua testes automatizados junto com novas funcionalidades ou correções quando possível; se não houver testes existentes, criar um teste de fumaça simples.

7) Integrações e credenciais
- Nunca adivinhe segredos: se encontrar placeholders (`.env.example`, `credentials.json.example`), peça instruções para obter valores seguros ou como mockar localmente.

8) Exemplos de prompts úteis ao mantenedor (copiar/colar)
- "Qual é o comando de build local que devo usar para compilar e rodar o projeto?"
- "Onde estão os principais módulos de aplicação (ex.: `src/`, `backend/`)?"
- "Quais serviços externos o projeto usa (DB, fila, APIs)? Forneça endpoints ou stubs." 

9) Documentação e PRs geradas pelo agente
- Ao propor mudanças importantes, inclua em PRs: resumo, arquivos tocados, comandos para reproduzir localmente e um checklist de testes manual/automático.

10) Quando não houver informação suficiente
- Pare alterações invasivas. Em vez disso, abra uma issue/PR com um pequeno patch sugerido e perguntas dirigidas ao mantenedor.

---
Se desejar, eu posso:
- (A) Ajustar este texto com exemplos reais do repositório após você fornecer a estrutura esperada ou arquivos chave (ex.: `package.json`).
- (B) Inserir detecção automática de linguagem e comandos no arquivo se eu puder escanear os arquivos fonte.

Por favor revise e me diga o que quer que eu ajuste ou que arquivos eu deva procurar especificamente.
