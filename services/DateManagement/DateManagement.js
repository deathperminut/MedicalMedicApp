import React from "react";


function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
const getDateByHourDate=(date,hour)=>{

let [año, mes, dia] = date.split("-");
let [hora, minutos] = hour.split(":");

let fecha = new Date(año, mes - 1, dia, hora, minutos);

return fecha; // Output: Thu Dec 31 2020 20:31:00 GMT-0800 (Pacific Standard Time)

}

export {getAge,getDateByHourDate};