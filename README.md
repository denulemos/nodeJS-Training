# Node JS 🎉️

Hola! ❤️ Este repositorio esta basado en un training en el cual vamos a estar viendo, ademas de nodeJS, GraphQL, TypeOrm, Apollo, JWT, MySQL y otras tecnologias, a fin de realizar un proyecto final, que se detallara mas adelante. 



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

* **Input Types** Son un tipo especial en GraphQL que permite que un objeto pueda ser pasado como parametro/Argumento a una querie y a una mutation.

```
//Sin el input type

type Mutation {
createTask(name: String!, completed: Boolean!, userId: ID!) : Task
}

//Con el input type
//El type es TaskInput, y tiene los mismos parametros que el anterior. No repito codigo, y acepto a un objeto como argumento.

type Mutation {
createTask(task: TaskInput): Task
updateTask(task: TaskInput): Task
}

input TaskInput {
name: String!
completed: Boolean!
userId: ID!
}
```

* **Custom Scalar Type** Puedo definir mi propio Scalar Type. Esto vamos a verlo mas adelante.

```
scalar MyCustomScalar

const resolverFunctions = {
MyCustomScalar: myCustomScalarType
};
```

* **Interface Type** Podemos usar tipos abstractos, no pueden ser usados directamente en el schema, pero pueden ser usados como "ahorro de codigo" cuando queremos hacer tipos explicitos de datos.

```
interface Book {
title: String
author: Author
}

type TextBook implements Book {
title: String
author: Author
classes: [Class]
}
```

* **Union Type** Indica que un campo puede retornar mas de un tipo de objeto. No define tipos de campos en si mismo.

```
union Result = Book | Author
type Book {
title: String
}

type Author{
name: String
}

//Result puede devolver un dato de tipo libro o un dato de tipo autor. 

type Query {
search: [Result]
}
```

* **Enum Type** Es parecido al Scalar Type. Solo acepto estos valores como argumento o como retorno.

```
enum AllowedColor{
RED
GREEN
BLUE
}
type Query{
favoriteColor: AllowedColor // Valor de retorno
avatar(borderColor: AllowedColor): String // Argumento
}
```

# ¿Qué vamos a desarollar?

Vamos a desarollar en esta ocasion un **Task Manager (Gestor de Tareas)**, que va a ser una API que va a contar con la siguientes entidades:
(Si tiene 👀️ es que para usar esta funcion, el usuario debe estar autenticado)

**Query**

* Task List  👀️
* Task by ID  👀️
* User by ID  👀️

**Mutation**

* Add Task  👀️
* Update Task  👀️
* Delete Task  👀️
* Login
* Signup

**Subscription**

* Usuario Creado






