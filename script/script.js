let nombrePlanetas = Array('Tierra','Marte');
let distancia= [6,3,'67'];
const tamaño=[];

console.log(nombrePlanetas);
console.log(distancia);
console.log(tamaño);


// ciclo while
let i=0;
 while(i <= nombrePlanetas.length -1){
     console.log(i)
     console.log(nombrePlanetas[i]);
     i =i+1
 }

//  ciclo for
 for (let index=0; index<nombrePlanetas.length;index++){
     console.log(nombrePlanetas[index]);
 }

//  ciclo for in
for(const key in Object){
    if(Object.hasOwnProperty.call(Object, key)){
        const element= Object[key];
    }
}

// recorre info de planetas
for(const key in nombrePlanetas){
    console.log(nombrePlanetas[key]);
}

// ciclo for of

for (const iterator of Object){

}

// recorrer planeta
for(const planeta of nombrePlanetas){
    console.log(planeta);
}


// operador de igualdad
for(const key in distancia){
    if(distancia[key]=='5'){
        console.log('Se encontro la distancia')
    }else{
        console.log('No se encontro la distancia')
    }
}

// operador estricto

for(const key in distancia){
    if(distancia[key]==='5'){
        console.log('Se encontro la distancia')
    }else{
        console.log('No se encontro la distancia')
    }
}

// lenguaje tipado


// for each
nombrePlanetas.forEach((value,index,Array)=>{
    console.log('planeta', index, value);
})

// Map
nombrePlanetas.map((planetas,index)=>{
    return(
        console.log(`El planeta ${planetas} tiene tamaño de :${tamaño[index]}`)
    )
})

let resultadoMap = nombrePlanetas.map((planetas,index)=>{
    return(`El planeta ${planetas} tiene tamaño de :${tamaño[index]}`)
})

console.log(resultadoMap);