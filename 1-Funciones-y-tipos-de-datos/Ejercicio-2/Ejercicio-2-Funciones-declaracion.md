# Ejercicio 2: Funciones, declaración

Gobstones y JavaScript tienen mucho en común. Por ejemplo, en ambos lenguajes podemos declarar funciones y usarlas muchas veces.

Sin embargo, como siempre que aprendas un lenguaje nuevo, te vas a topar con un pequeño detalle: tiene una sintaxis diferente . 😥 La buena noticia es que el cambio no será tan terrible como suena, así que veamos nuestra primera función JavaScript:

```js
    function doble(numero) {
        return 2 * numero;
    }
```

Diferente, pero no tanto. Si la comparás con su equivalente Gobstones...

```js
    function doble(numero) {
        return (2* numero)
    }
```

...notarás que los paréntesis en el ``return`` no son necesarios, y que la última línea la terminamos con ``;`` .

```txt
Veamos si se va entendiendo: escribí ahora una función JavaScript mitad, que tome un número y devuelva su mitad. Tené en cuenta que el operador de división en JavaScript es /.
```