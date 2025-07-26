//Varaibles
let minRan = 1
let maxRan = 100
let numeroSecreto = Math.floor(Math.random()*(maxRan - minRan + 1))+1;
let numeroUsuario = 0;
let intento = 1
let intentos = "intento"
let maxIntentos = 3

minRan = prompt("Dime el menor número posible");
maxRan = prompt("Dime el número máximo posible");
numeroSecreto = Math.floor(Math.random()*(maxRan - minRan + 1))+1;

while (numeroUsuario != numeroSecreto)
    { 
    numeroUsuario = prompt(`Indicame un número del ${minRan} al ${maxRan}:`)
    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto)
        {
            alert(`El número ${numeroSecreto} es correcto!! :v/, lo hiciste en ${intento} ${intentos} `)
        } else {
            if (numeroSecreto < numeroUsuario)
            { 
                alert("El numero secreto es menor")
            } else { alert("El número secreto es mayor")} 
    //intento = intento + 1
    intento += 1
    //intento ++
    intentos = "intentos"    
            //alert(`No acertaste >:v ${numeroSecreto}`)
        
    if (intento > maxIntentos) {alert("Llegaste al número máximo de intentos, el número era: " + numeroSecreto);
        break }}}
    