# Node JS 🎉️

Hola! ❤️ Este repositorio esta basado en un training en el cual vamos a estar viendo, ademas de nodeJS, GraphQL y otras tecnologias, a fin de realizar un proyecto final.

Hay tanta teoria de JS (asyncAwait, spreadOperator y destructuring) como de GraphQL.

## GraphQL 🚀️ 

GraphQL resuelve ciertos problemas de REST:

* Es un solo endpoint para cualquier tipo de data que se quiera obtener y REST son varios endpoints dependiendo de lo que quiero
* Instalar => npm -i graphq
* **Schema**: Es el centro de cualquier servidor de graphQL, describe la funcionalidad disponible a los clientes que se encuentran conectados al mismo
* **Scalar Types**: int, float, String, boolean y ID (string).
* **Object Types**: El signo de exclamacion quiere decir que es un dato obligatorio.

```
type User {
  id: ID! 
  email: String!
  age: Int,
  isAdmin: Boolean!
  address : Adress
  }

type Adress {
street: String,
city: String,
state: String,
country: String
}
```

* Como se puede ver en el ejemplo anterior, podemos usar como tipo de dato, un objeto creado por nosotros, que pueda contener en si mismo otros campos relacionados.
* **Root level types**: Al nivel mas alto de cualquier servidor GraphQL hay un "type" que representa todos los posibles entry points que puede tener la API. A esto se le dice **Root Type**. Hay de distintos tipos:
* **Query Type** Es para traer data. Se compara con el GET (¿Porque se compara? Porque todas las requests en GraphQL son POST)

```
type Query {
users: [User]
task(id: ID!): Task
}
```

* **Mutation Type** Se compara con PUT, POST, PATCH y DELETE. Son para crear, updatear o eliminar data.
  Las mutation son ejecutadas de manera **secuencial**, en cambio las queries, de manera **simultanea**

```
type Mutation{
   signup(email: String!, password: String!) : User
   addTask(name: String!, completed: Boolean!): Task
}
```

**Subscription Type** Son para evaluar eventos del servidor.

```
type Subscription{
   userCreated: User
}

```



