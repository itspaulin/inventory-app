# Backend Dockerfile - Usando Node.js para melhor compatibilidade com Docker
FROM node:20-alpine

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install --legacy-peer-deps

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Expor porta
EXPOSE 3000

# Comando para desenvolvimento
CMD ["npm", "run", "start:dev"]

# Para produção, use:
# CMD ["npm", "run", "start:prod"]