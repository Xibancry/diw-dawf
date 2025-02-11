# DIWF Test

Página web muy simple para conectar y probar: Express.js, PostgreSQL y Docker.

## Requisitos

- Docker
- Linux/WSL

## Pasos para desplegar la aplicación web (Linux)

1. Descargar repositorio y entrar en la carpeta a este por terminal.
2. `docker compose up --build`.
3. La página se desplegará en [localhost](localhost:3000) en el puerto 3000.

Para parar los contenedores ejecuta:
`docker compose stop` o `docker compose down`.