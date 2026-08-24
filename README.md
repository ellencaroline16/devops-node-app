# DevOps Node App

Aplicação simples em Node.js/Express, criada como projeto das atividades formativas de DevOps (Semanas 2, 3 e 4).

## O que a API faz

- `GET /` — mensagem de status.
- `GET /health` — healthcheck.
- `GET /soma/:a/:b` — soma dois números passados na URL.

## Rodando localmente (sem Docker)

```bash
npm install
npm start
```

A aplicação sobe em `http://localhost:3000`.

## Rodando os testes

```bash
npm test
```

## Rodando com Docker

```bash
docker build -t devops-node-app .
docker run -d -p 3000:3000 --name devops-node-app devops-node-app
```

Verifique se está rodando:

```bash
docker ps
curl http://localhost:3000/health
```

## CI/CD

- **CI** (`.github/workflows/ci.yml`): instala dependências e roda os testes automatizados a cada push/PR.
- **CD** (`.github/workflows/cd.yml`): builda a imagem Docker e faz um smoke test do container a cada push/PR. Há um job opcional (comentado) para publicar a imagem no Docker Hub.
