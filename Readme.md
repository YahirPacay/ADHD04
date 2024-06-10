# ADHD 04
## _Intecap_

- Fecha 03/06/2024
- Carrera: Desarrollador Fullstack

| Carnet | Nombre |
| ------ | ------ |
| 2021-094246 | Wesley Yahir Pacay Díaz |

## Descripcion del Proyecto
> El proyecto cuenta con 10 páginas en las que se encuentran problemas resutlos.
> La tecnologia usada fue html, css(SASS), y TypeScript.

1. ¿Qué es TypeScript? 
Es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Esta pensado para ejecutar grandes proyectos y que permite trabajar de manera estructurada. Se trata de un súper conjunto con el que sacar partido a lo mejor de JavaScript (JS) y en el que se han resuelto sus carencias.

2. ¿Qué ventajas ofrece TypeScript frente a JavaScript puro?
TypeScript proporciona varias características potentes para el desarrollo web moderno que abordan algunas de las limitaciones de JavaScript. Estas características ofrecen una mejor experiencia para el desarrollador y una mejor organización del código. Entre ellas estan:
* Tipado Estático
TypeScript tiene un sólido sistema de tipado que permite especificar los tipos de variables y parámetros de funciones en tiempo de compilación. Esto permite la detección temprana de errores relacionados con el tipo, haciendo que el código sea más fiable y menos propenso a los bugs.
* Tipado Opcional
TypeScript proporciona flexibilidad a la hora de elegir entre utilizar tipado estático o no. Esto significa que puedes elegir especificar tipos para variables y parámetros de funciones o dejar que TypeScript infiera los tipos automáticamente basándose en el valor asignado.
* Organización del Código
En JavaScript, organizar el código en archivos separados y gestionar las dependencias puede convertirse en un reto a medida que crece la base de código. Sin embargo, TypeScript proporciona soporte integrado para módulos y espacios de nombres para organizar mejor el código.Los módulos permiten encapsular el código en archivos separados, facilitando la gestión y el mantenimiento de grandes bases de código.
* Características de la Programación Orientada a Objetos (OOP)
TypeScript admite conceptos de OOP como clases, interfaces y herencia, lo que permite un código estructurado y organizado.
* Sistema de Tipos Avanzado
TypeScript proporciona un sistema de tipos avanzado que admite genéricos, uniones, intersecciones y mucho más. Estas características mejoran las capacidades de comprobación estática de tipos de TypeScript, permitiendo a los desarrolladores escribir código más robusto y expresivo.
* Compatibilidad con JavaScript
TypeScript está diseñado para ser un superconjunto de JavaScript, lo que significa que cualquier código JavaScript válido es también código TypeScript válido. Esto facilita la integración de TypeScript en proyectos JavaScript existentes sin tener que reescribir todo el código. TypeScript se construye sobre JavaScript, añadiendo tipado estático opcional y características adicionales, pero aún te permite utilizar código JavaScript tal cual.

3. ¿Cómo se instala TypeScript en VSCode? 
TypeScript se puede instalar utilizando npm. Si quieres empezar a utilizar TypeScript en tu proyecto, puedes seguir los sieguientes pasos:
- abrir la consola.
- Ejecutar el siguiente codigo : npm install -g typescript

4. ¿Cómo se compila un archivo TypeScript para convertirlo a JavaScript?
- Crear un archivo typeScript
- Abrir la consola
- poner el siguiente comando: tsc tuarchivo.ts  
Y esto generara el nuevo archivo javascript.

5. ¿Qué extensión de archivo se utiliza para los archivos TypeScript?
Se utiliza la extension .ts

6. ¿Cómo se define un tipo de dato en TypeScript?
En TypeScript, puedes definir tipos de datos utilizando la sintaxis de TypeScript para declarar variables, parámetros de función, propiedades de objetos, entre otros. Para hacer esto lo que se hace normalmente en declara una especie de variable despues van dos puntos seguido del tipo de dato. aqui un ejemplo.
```sh
interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "John",
    age: 25
};.
```
7.  ¿Qué son los tipos de unión y cómo se declaran?
Con una unión, puedes declarar que un tipo podría ser uno de muchos tipos. Por ejemplo, puede describir un boolean tipo como trueo o false.
```
type MyBool = true | false;
````
8. ¿Qué es un tipo literal en TypeScript y para qué se utiliza?
Los Literal Types en TypeScript permiten especificar valores exactos que una variable puede tomar y no otro por asi decrilo. Se utiliza para restringir el conjunto de posibles valores que una variable puede contener a un conjunto específico de valores conocidos, se usa iniciandolo con la palabra type.
```
type Color = "rojo" | "verde" | "azul";

let color: Color;
color = "rojo"; // Válido
color = "verde"; // Válido
color = "amarillo"; // Error, 'amarillo' no es uno de los valores permitidos
```
9. ¿Qué son los tipos enumerados (Enums) y cómo se crean?
Los tipos enumerados, o Enums en TypeScript, son un tipo de datos que permite definir un conjunto de constantes con nombres significativos. Los Enums proporcionan una forma de organizar un conjunto de valores relacionados. Los Enums en TypeScript asignan automáticamente valores numéricos a cada uno de los miembros, comenzando desde 0 por defecto. Puedes personalizar estos valores asignando explícitamente valores a los miembros del Enum.
````
enum DiaSemana {
    Lunes = 1,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}
````
10. ¿Cómo se define un tipo alias y cuándo es útil?
Un tipo alias en TypeScript es una forma de crear un nuevo nombre para un tipo existente. Esto puede ser útil para hacer que tu código sea más legible y expresivo, especialmente cuando trabajas con tipos complejos o largos. Se define utilizando la palabra clave type. Puede ser util en estas situaciones:
* Abstracción de tipos complejos: Si tienes tipos complejos que se utilizan en múltiples lugares de tu código, puedes crear un alias para simplificar su uso.
* Mejora de la legibilidad del código: Al proporcionar nombres significativos para tipos, puedes hacer que tu código sea más fácil de entender para otros desarrolladores.
- Facilitar refactorizaciones: Si necesitas cambiar el tipo de datos en múltiples lugares de tu código, solo necesitas actualizar el alias en un solo lugar en lugar de cada instancia del tipo.
- Documentación y mantenimiento: Los alias de tipo pueden servir como documentación en sí mismos, especialmente cuando se utilizan en combinación con comentarios adecuados.
````
type Car = { 
  brand: string,
  model: string,
  year: number
};

const focusCar: Car = { brand: "Ford", model: "Focus", year: 2008 };
````
11. ¿Cómo se definen las funciones con tipos en TypeScript?
Puedes definir funciones que especifican el tipo de los parámetros de entrada y el tipo del valor de retorno.
````
function add(x: number, y: number): number {
    return x + y;
}
type Operacion = (x: number, y: number) => number;

const suma: Operacion = (x, y) => x + y;
````
12. ¿Qué son los parámetros opcionales y los parámetros predeterminados en funciones?
* Los parámetros opcionales son aquellos que pueden ser omitidos al llamar a la función, lo que significa que no es obligatorio proporcionar un valor para esos parámetros. En TypeScript, se indica un parámetro como opcional colocando un signo de interrogación ? después del nombre del parámetro.
````
function saludar(nombre: string, apellido?: string) {
    if (apellido) {
        console.log(`Hola, ${nombre} ${apellido}!`);
    } else {
        console.log(`Hola, ${nombre}!`);
    }
}

saludar("Juan"); // Salida: "Hola, Juan!"
saludar("María", "Pérez"); // Salida: "Hola, María Pérez!"
````
* Los parámetros predeterminados son aquellos que tienen un valor asignado por defecto en caso de que no se proporcione un valor al llamar a la función. En TypeScript, puedes asignar un valor predeterminado a un parámetro colocando un valor después del nombre del parámetro, separado por un signo de igual =.
````
function saludar(nombre: string, mensaje: string = "Hola") {
    console.log(`${mensaje}, ${nombre}!`);
}

saludar("Juan"); // Salida: "Hola, Juan!"
saludar("María", "Buen día"); // Salida: "Buen día, María!"

````
13. ¿Cuáles son algunas mejores prácticas para escribir código limpio y mantenible en TypeScript?
Estas son unas de las recomendaciones que lei sobre el buen manejo y escritura de codigo en TypeScript:
* Utilizar tipado estático
* Nombrar significativamente: Nombramiento Descriptivo por asi decirlo:
* Dividir en funciones pequeñas: Escribir funciones pequeñas y específicas que realicen una sola tarea. Esto hace que el código sea más fácil de entender, probar y mantener.
* Evitar la duplicación de código
* Utilizar interfaces y tipos en lugar de clases concretas cuando sea posible: Esto hace que el código sea más flexible y adaptable a cambios futuros.
* Utilizar enumeraciones y tipo de literales: Donde sea apropiado, usar enums y tipos literales para definir conjuntos de valores posibles de una manera clara y explícita.
* Aplicar comentarios descriptivos
* Realizar pruebas unitarias

## _Se dieron soluciones a estos probemas_:
1. Calcular el promedio de tres números ingresados.
2. Calcular el área de un triángulo, el usuario debe ingresar el valor para la base y altura.
3. Determinar si un número es par o impar.
4. Encontrar el mayor y menor de tres números ingresados.
5. Elevar un número a una potencia, los valores deben ser ingresados por el usuario.
6. Mostrar de forma inversa un texto ingresado por el usuario.
7. Calcular el factorial de un número ingresado.
8. Indicar si un valor ingresado es un número perfecto.
9. Verificar si un valor ingresado es un número primo.
10. Contar las vocales existentes en un texto ingresado.
