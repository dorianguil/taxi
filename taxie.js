"use strict";
let chengementTaxie=0;
let pv=10;
let feux=30;
let nom="john";
let gta;
let musique1=["sur ma route","human","Gangsta's Paradise","Diggy Diggy Hole","anissa" ];
for(let i=0;i<feux;i++){
    gta = (Math.floor(Math.random()  * 5) + 1);
    
    
    switch (gta) {
        case 1:
            console.log("musique sur ma route");
            break;
        case 2:
            console.log("human");
            break;
        case 3:
            console.log("Gangsta's Paradise");
            break;
        case 4:
            console.log("Diggy Diggy Hole");
            break;
        case 5:
            console.log("anissa");
            pv-=1;
            chengementTaxie+=1
 
            break;
    
    }  ;
}
if(pv<=0){
    console.log("john explose");
}else{
    console.log("john arrive a destination");
}
console.log("nombre de taxie"+""+chengementTaxie );