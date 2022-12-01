//Calculo de anos felinos

var edadhumana = 0;

for (let gatiedad = 1; gatiedad < 22; gatiedad++) {
    if (gatiedad == 1){
        edadhumana = 15;
    }else if (gatiedad == 2){
        edadhumana = 24
    }else {
        edadhumana = edadhumana + 4;
    }

    console.log( " "+ gatiedad + " " + edadhumana)
}