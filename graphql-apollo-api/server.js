//Importamos lo que necesitamos
const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const cors = require('cors');
const dotEnv = require('dotenv');

//Seteamos las variables de entorno
dotEnv.config(); //Creamos una carpeta .env para poner las variables ahi.

const app = express();

//cors
app.use(cors())

//Body parser para el Middleware
app.use(express.json());

const typeDefs = gql `type Query{
    saludo : String
} `;

const resolvers = {};

const apolloServer = new ApolloServer({
    typeDefs, //Definen el schema
    resolvers //Como obtenemos la data del schema
});

apolloServer.applyMiddleware({app, path:'/graphql'}); //Si apuntamos a /graphql, vamos a acceder a una tool de graphql de testing

//Tomamos el puerto de las variables de entorno, de lo contrario, por defecto el puerto sera 3000.
const PORT = process.env.PORT || 3000;

//Testing localhost
app.use('/' , (req, res, next) =>{
    res.send({message: 'Hola!'});
})

//Escuchar al puerto
app.listen(PORT, () =>{
console.log('Servidor escuchando en puerto ' + PORT + " esta vivo!!, endpoint de graphql: " + apolloServer.graphqlPath)});