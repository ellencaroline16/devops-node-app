# Imagem base oficial do Node.js (versão LTS, variante slim para ficar mais leve)
FROM node:20-slim

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia apenas os arquivos de dependências primeiro (aproveita cache do Docker)
COPY package*.json ./

# Instala somente as dependências de produção
RUN npm ci --omit=dev

# Copia o restante do código da aplicação
COPY src ./src

# Define variável de ambiente da porta
ENV PORT=3000

# Expõe a porta que a aplicação usa
EXPOSE 3000

# Cria um usuário não-root por segurança
USER node

# Comando para iniciar a aplicação
CMD ["node", "src/server.js"]
