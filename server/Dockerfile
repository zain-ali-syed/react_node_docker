#This file creates an IMAGE for this project with all the code and required dependencies

#Get the base image for this image that we are creating
FROM node:10   

#When this image runs as container this is the location IN THE CONTAINER where the application lives
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]


#To create an image (called express-server) from this Dockerfile called run this in the terminal (make sure you are in the root of where the Dockerfile is):
#CREATE IMAGE express-server ----> docker build -t express-server .
#CREATE CONTAINER USING ABOVE IMAGE -------> docker container run -it -p 4000:4000 --name express-server-container express-server