function classifyConsumption(){

    let kilowatt = Number(document.getElementById("kWh").value);
    
    if (kilowatt >=500){
    window.alert ("Very High Consumption: Heavy electricity users");   
    }

    else if(kilowatt >=301){
        window.alert ("High Consumption: Higher electricity usage");
    }

    else if (kilowatt >=201){
        window.alert ("Average Consumption: Typical electricity usage");
    }

    else if (kilowatt >=101) {
        window.alert ("Low Consumption: Normal residential rate");
    }

    else {
        window.alert ("Lifeline Consumer: Discounted electricity rates");
    }
}
