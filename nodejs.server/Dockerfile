FROM node

RUN mkdir /app
WORKDIR /app

ADD package.json /app/
RUN npm install

ADD blockchain /app/blockchain
ADD contracts.truffle /app/contracts.truffle

ADD server.js /app/
ADD config.js /app/

CMD node ./server.js