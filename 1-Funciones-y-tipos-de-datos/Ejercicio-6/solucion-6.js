// el saldo es $100, el monto a extraer, $30
extraer(100, 30)
70 //quedan $70 ($100 - $30 =  $70) 
extraer(100, 120)
0 //Ups, quisimos sacar más plata de la que teníamos. 
//Nos quedamos con $0
function extraer(saldo, monto) {
    return Math.max(saldo - monto, 0);
}