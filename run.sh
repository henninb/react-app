#!/bin/sh

# mkdir -p src/data
# wget https://fixturedownload.com/feed/json/nhl-2021/minnesota-wild -O src/data/wild-schedule.json
echo npx create-react-app react-app
mkdir -p ssl
npm install

npm run build
docker stop react-app
docker rm -f react-app
docker rmi react-app
docker compose -f docker-compose.yml up -d
echo npm start

exit 0
