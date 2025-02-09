# Stufe 1: Build der Vue-App
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stufe 2: Deployment mit Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf  # Stelle sicher, dass die ngnix.conf hier korrekt kopiert wird

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
