FROM nginx:alpine
COPY /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#To create an image (called react-client) from this Dockerfile called run this in the terminal (make sure you are in the root of where the Dockerfile is):
#CREATE IMAGE react-client ----> docker build -t react-client .
#CREATE CONTAINER USING ABOVE IMAGE -------> docker container run -it -p 3000:80 --name react-client-container react-client
