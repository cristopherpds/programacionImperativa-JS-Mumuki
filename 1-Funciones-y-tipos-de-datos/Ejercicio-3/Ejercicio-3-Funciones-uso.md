# Ejercicio 3: Funciones, uso

¿Y esto con qué se come? Digo, ehm.... ¿cómo se usan estas funciones? ¿Cómo hago para pasarles parámetros y obtener resultados?

Basta con poner el nombre de la función y, entre paréntesis, sus argumentos. ¡Es igual que en Gobstones!

```js
    doble(3)
```
Y además podemos usarlas dentro de otras funciones. Por ejemplo:

```js
    function doble(numero) {
        return 2 * numero;
    }

    function siguienteDelDoble(numero) {
        return doble(numero) + 1;
    }
```
O incluso mejor:

```js
    function doble(numero) {
        return 2 * numero;
    }

    function siguiente(numero) {
        return numero + 1;
    }

    function siguienteDelDoble(numero) {
        return siguiente(doble(numero));
    }
```
```txt
Veamos si se entiende; escribí las siguientes funciones:

- anterior: toma un número y devuelve ese número menos uno
- triple: devuelve el triple de un número
- anteriorDelTriple, que combina las dos funciones anteriores: multiplica a un número por 3 y le resta 1 

```
[Solucion](./solucion-3.js)

