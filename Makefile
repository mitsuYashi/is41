dev:
	docker compose run --rm nestjs sh -c "npm i"
	docker compose run --rm nestjs sh -c "npx prisma migrate dev --name init"
	docker compose up

down:
	docker compose down