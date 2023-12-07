``` bash
npm i
docker run --name mysql -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 mysql:latest
npx prisma migrate dev --name init
npm run start
```