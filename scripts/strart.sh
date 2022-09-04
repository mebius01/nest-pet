docker-compose -f scripts/docker-compose.yml up -d &&
sleep 5
npm run migration:run &&
echo `Seed data Up` &&
sleep 3 &&
npm run start:dev
