# Serverless - AWS Node.js Typescript

Este proyecto ha sido generado usando el `aws-nodejs-typescript` template de [Serverless framework](https://www.serverless.com/).

Descripción del reto técnico:

* Crear una API en Node.js con el framework Serverless para un despliegue en AWS.
* Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre).
* Integrar la API de prueba StarWars API (líneas abajo está el link) se deben integrar uno o más endpoints.
* Crear un modelo de su elección mediante el uso de un endpoint POST, la data se tendrá que almacenar dentro de una base de datos.
* Crear un endpoint GET que muestre la data almacenada.

![Arquitectura](https://i.ibb.co/nbdHq5C/arquitectura.jpg)

### API de prueba SWAPI:
```bash
https://swapi.py4e.com/documentation
```

### API SWAPI disponibles

##### Peoples

| Resource / HTTP method | Get           | 
| ---------------------- | ------------- | 
| `dev/api/swapi/people` | List people    |       

`dev/api/swapi/people` acepta el parametro **lang**, especificado con el valor **en**, mapea los campos ingles, por defecto es en español.

```bash
http://localhost:3000/dev/api/swapi/people?lang=en
```

##### Films

| Resource / HTTP method | Get           | 
| ---------------------- | ------------- | 
| `dev/api/swapi/films` | List films    |        

`dev/api/swapi/films` acepta el parametro **lang**, especificado con el valor **en**, mapea los campos ingles, por defecto es en español.

```bash
http://localhost:3000/dev/api/swapi/films?lang=en
```

### API para guardar en DynamoDB

##### Films

| Resource / HTTP method | Post                 | Get         | 
| ---------------------- | ----------------     | ----------- | 
| `dev/api/films`        | Crear un nuevo film  | Listar films                



## Instalar y ejecutar 🚀

Para iniciar el proyecto tienes que seguir lo siguientes pasos

1.- Instalar las dependencias
```
Usando NPM

- Run `npm i` para instalar las dependencias del proyecto

Usando Yarn

- Run `yarn` para instalar las dependencias del proyecto

```
2.- Instalaremos DynamoDB localmente

```sql
serverless dynamodb install
```

3.- Desplegar Aplicacion local
```
serverless offline start
```

3.- Desplegar Aplicacion en AWS
```
serverless deploy
```

## Ejecutando las pruebas ⚙️

Se realizo pruebas para validar el estado de las apis, ejecutar las pruebas con el siguiente comando :

```

yarn run test

```


### Estructura del proyecto

El código base del proyecto se encuentra principalmente dentro de la carpeta `src` y esta dividivo en:

- `functions` - contiene código base y configuración para sus funciones lambda
- `libs` - contiene una base de código compartida entre sus lambdas
- `helpers` - contiene funciones para desestructuración de  objetos
- `models` - contiene modelos de datos
- `services` - contiene servicios de la aplicacion

```
.
├── src
│   ├── functions              
│   │   ├── film
│   │      ├── handler.ts      # `Film` lambda codigo fuente
│   │      ├── index.ts        # `Film` lambda Serverless configuracion
│   │
│   |── libs                    
│   │   └── apiGateway.ts       # API Gateway  helpers
│   │   └── handlerResolver.ts  # Biblioteca compartible para resolver controladores lambda
│   │   └── lambda.ts           # Lambda middleware
│   │
|   │ ── helpers                    
│   │    └── FilmSpanishHelpre.ts   # Utitlirario para desestructurar objetos
│   │
|   │ ── models                  
│   │    └── Film                   # Modelo de dato
│   │
|   │ ── services                
│   │    └── film                   # Servicio para conetarse a DynamoDB
│   │    └── swapi                  # Servicio externo de SWAPI API   
│   │
|   │ ── connection                
│       └── index.ts                # Archivo para conectarnos a DynamoDB
│   
├── package.json
├── serverless.ts               # Serverless archivo de servicio
├── tsconfig.json               # Typescript configuración del compilador
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuracion
```

### Bibliotecas de terceros

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file
- [jest](https://github.com/facebook/jest) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!
- [SuperTest
](https://github.com/visionmedia/supertest) - Super-agent driven library for testing node.js HTTP servers using a fluent API.
