# Frontend Dockerfile
FROM node:20-alpine

WORKDIR /app

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli@18

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Expor porta
EXPOSE 4200

# Comando para desenvolvimento (hot reload)
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]

# Para produção, use:
# RUN ng build --configuration production
# CMD ["npx", "http-server", "dist/frontend/browser", "-p", "4200"]
