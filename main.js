//E2: Array de Objetos, bucles y métodos.

/*
Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸
*/



const pizzas = [
    { id: 1,
    nombre: "muzarella",
    ingredientes: ["muzzarella", "salsa", "oregano"],
    precio: 700 , },
    { id: 2,
    nombre: "fugazzetta rellena",
    ingredientes: ["muzzarella", "cebolla"],
    precio: 1200, },
    { id: 3,
    nombre: "marinara",
    ingredientes: ["salsa", "aceite de oliva", "albahaca", "oregano"],
    precio: 1300, },
    { id: 4,
    nombre: "margherita",
    ingredientes: ["muzzarella", "albahaca", "tomates frescos"],
    precio: 1400, },
    { id: 5,
    nombre: "cuatro quesos",
    ingredientes: ["muzzarella", "parmesano", "queso crema", "cheddar"],
    precio: 1500, },
    { id: 6,
    nombre: "provolone",
    ingredientes: ["muzzarella", "salsa", "queso provolone", "aceitunas negras"],
    precio: 1700, },
    { id: 7,
    nombre: "pepperoni",
    ingredientes: ["muzzarella", "salsa", "pepperoni"],
    precio: 1900, },
    ];
    
    
    // a) Las pizzas que tengan un id impar.
    
    pizzas.forEach((pizzaImpar) => {
       if (pizzaImpar.id % 2 !== 0) {
          console.log(`La pizza con id ${pizzaImpar.id} es impar`);
       }
       });
    
    // b) ¿Hay alguna pizza que valga menos de $600?
    if (pizzas.precio < 600) {
       console.log("En esta lista tenemos pizzas a menos de $ 600")
    } else {
       console.log("En esta lista no tenemos pizzas a menos de $ 600")
    }
    
    // c)Los nombres de todas las pizzas.
    
    console.log(`Lista de pizzas:`)
    pizzas.forEach((pizza, i) => console.log(`${i + 1}) ${pizza.nombre}`));
    
    // d) Los precios de las pizzas.
    
    console.log(`Lista de precios de nuestras pizzas:`)
    pizzas.forEach((pizza, i) => console.log(`${i + 1}) ${pizza.precio}`));
    
    // e) El nombre de cada pizza con su respectivo precio.
    
    pizzas.forEach ((variedad) => {
       console.log(`Nuestras pizzas ${variedad.nombre} sale $ ${variedad.precio}`)
       }); 