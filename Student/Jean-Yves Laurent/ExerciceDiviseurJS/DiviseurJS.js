function getUserNumber (){
    var number;
    number = prompt("Veuillez introduire un nombre","");
    getDiviseursAndShow(number);

}
function getDiviseursAndShow(userNumber){
    var rangeNumber= new Array(); // Tableau des résultats attendus au diviseur
    var iRangeNumber=0;
    for (var i = 1;i <= userNumber; i++)
    {
        //if (userNumber%i==0){
        //    rangeNumber.push(userNumber/i);
        //}
        // Ou bien :
        if (userNumber%i == 0){
            rangeNumber[iRangeNumber] = userNumber/i;
            iRangeNumber++;
        }
    }
    document.write("<h1 style=\"text-align: right\"> Diviseur Javascript </h1>");
    document.write("Diviseurs de \'"+ userNumber +"\': </br>")
    for (i = 0; i < rangeNumber.length; i++){
        if (i == rangeNumber.length-1){
            document.write(rangeNumber[i]);
        }else {
            document.write(rangeNumber[i]+", ");
        }
    }
}
