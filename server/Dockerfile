FROM ubuntu:focal

EXPOSE 3001
WORKDIR /usr/app
CMD ["npm", "run", "dev"]

RUN apt-get update && apt-get install -y curl wget build-essential libssl-dev

RUN curl -fsSL https://deb.nodesource.com/setup_15.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm install -g npm@7.11.2

COPY app/package.json /usr/app/
RUN npm install -g node-gyp node-pre-gyp
RUN npm install -f