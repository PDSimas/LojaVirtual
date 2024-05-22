const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');

const app = express();

// Configurar o CORS
app.use(cors());

// Configurações do JSON Server
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
