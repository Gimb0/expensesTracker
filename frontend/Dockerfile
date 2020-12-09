FROM node:10.22.0

WORKDIR /app/

# Install dependencies
COPY package.json /app/

RUN npm install --silent

# Add rest of the client code
COPY . /app/

EXPOSE 3000

CMD npm start
