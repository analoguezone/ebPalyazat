FROM node:12-alpine 

ENV PORT 4150

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app
RUN ls -l
RUN rm -rf /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install



# Copying source files
COPY . .



# Building app  
RUN npm run build

EXPOSE 4150


CMD [ "npm", "run", "start" ]

