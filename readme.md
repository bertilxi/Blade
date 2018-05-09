# Blade

Proyecto de ejemplo para ver la simplicidad del framework Iguazu, y para mejorarla obviamente

### Prerequisitos

* Node JS (ultima LTS preferentemente o ultima Stable)
* Yarn
* PostgreSQL

### Setup del proyecto

* Crear una DB con user y password que corresponda al del knexfile.
* o cambiar el knexfile para la base de datos existente (Vacia)
* Ejecutar lo siguiente

```Bash
yarn migrate
yarn seed
yarn dev
```

* Ir a http://localhost:3000
  * Deberia dar un Hello World
* Ir a http://localhost:3000/user
  * Si el framework, la db, node, yarn estan funcionando, deberia mostrar una lista de usuarios de 1 usuario Admin.
