FROM node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Install dependencies
COPY package*.json ./
RUN npm install

#Copy source files
COPY . .

#Running the app
CMD ["npm", "run", "dev"]

