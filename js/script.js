console.log("Hello World!");
var populationArray = [10000,20000,30000,40000,50000];
var maxPopulation = 50000;
var isOverPopulated = true;

for (var i = 0; i < populationArray.length; i++) {
    if (populationArray[i]>maxPopulation)
        console.log("larger");
    else
        if (populationArray[i]<maxPopulation)
             console.log("smaller");
        else
        console.log("equals");
}


var three_city= populationArray[0]+populationArray[1]+populationArray[2];
if (((three_city<100000) && (maxPopulation<100000)) || (isOverPopulated==false))
    console.log("Small cities");
else
    console.log("Large cities!!!");
