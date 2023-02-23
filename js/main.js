// semaforo de peatones
    alert("En la carcel de Ishtal debido a la sobre poblacion, se acostumbra a jugar un juego con sus presos")
    console.log("deben adivinar un numero del 0 al 100 quien lo adivine se salva ")
    let maquina = Math.ceil(Math.random()*100);
    let presoM = 0;
    let presoS = 0;
    let cant = prompt("cantidad de presos que van a jugar se recomienda no usar mas de 10");
    let cantPreso = [];

for(let preso = 0 ; preso < cant; preso++){
 cantPreso[preso]=prompt("numero de preso "+preso+"/"+cant+" : ");
 if(cantPreso[preso]==maquina){
    presoS = presoS + 1
    document.write('<div class="card"><img src="./img/congratulations.jpg"/></div>');
 } 
 else{
    presoM= presoM + 1
    document.write('<div class="card"><img src="./img/youdead.jpg"/></div>');
 }
}
console.log(maquina);
console.log("presos salvados: "+presoS);
console.log("presos muertos: "+presoM);