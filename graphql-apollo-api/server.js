//Importamos lo que necesitamos
const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const cors = require('cors');
const dotEnv = require('dotenv');
const {tasks, users} = require ('./constants'); //Importamos las tasks
//Seteamos las variables de entorno
dotEnv.config(); //Creamos una carpeta .env para poner las variables ahi.

const app = express();

//cors
app.use(cors())

//Body parser para el Middleware
app.use(express.json());

const typeDefs = gql `type Query{
    saludo : String! 
    multiplesItems : [String]!
    tasks:[Task!]
    task(id: ID!) : Task
} 

type User {
    id: ID!
    nombre: String!
    email: String!
    tasks : [Task!]
}

type Task{
    id: ID!
    nombre: String!
    hecho: Boolean!
    user: User!
}
`; 

const resolvers = {
        Query :{
            saludo : () => "Hola!", //Definimos el valor de saludo 
            multiplesItems : () => ["Somos", "Muchos valores"], //Varios valores
            tasks: () => tasks, //Cuando me refiero a tasks quiero que traiga lo que esta dentro de mi variable "tasks", importada mas arriba
            task: (_, {id}) => task.find(task => task.id === id) //Buscamos task por el ID
        },
        Task:{
            //Tomar info del usuario en funcion del ID en tasks
            user: ({userId}) =>{
                console.log('userId', userId);
                return users.find(user => user.id === userId)}
        }
};

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