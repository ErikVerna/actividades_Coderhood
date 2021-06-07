function numeroMinimo (num1, num2, num3){
    let minimo = 0;
        if (num1 > num2){
            if (num3 > num2){
                minimo = num2
            } else {
                minimo = num3
            }
        } else {
            if (num3 > num1){
                minimo = num1
            } else {
                minimo = num3
            }
        }
        return minimo
    }

// console.log(numeroMinimo(4,1,2)) // 1

function numeroMaximo (num1, num2, num3){
    let maximo = 0;
    if (num1 < num2){
        if (num3 < num2){
            maximo = num2
        } else {
            maximo = num3
        }
    } else {
        if (num3 < num1){
            maximo = num1
        } else {
            maximo = num3
        }
    }
    return maximo
}

// console.log(numeroMaximo(5,25,1)) // 25

function ordenar (num1, num2, num3){
    let num_Grande = numeroMaximo(num1, num2, num3)
    let num_Chico = numeroMinimo(num1, num2, num3)
    let num_Medio = num1 + num2 + num3 - (num_Grande + num_Chico)

    return num_Grande + " " + num_Medio + " " + num_Chico
}

console.log(ordenar(5,2,56)) // 56 5 2