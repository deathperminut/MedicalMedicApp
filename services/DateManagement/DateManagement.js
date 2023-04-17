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

const getHourString=(date)=>{
    let day=new Date(date);
    let getHour=day.getHours()+':'+day.getMinutes();
    if(day.getMinutes()===0 || day.getMinutes()==='0'){
        getHour=getHour+'0';
    }
    return getHour;
}

function formatearFecha(fecha) {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    console.log("DESEADA; ",fecha)
    let FECHA=new Date(fecha)
    const dia = FECHA.getDate();
    const mes = meses[FECHA.getMonth()];
    const anio = FECHA.getFullYear();
  
    return `${dia} de ${mes} de ${anio}`;
  }

/* DATE FORMAT */

const getDateFormat=(date)=>{
    return moment(date).format('YYYY-MM-DD');
}

function formatearHora(hora) {
    let HORA= new Date(hora);
    const horas = HORA.getHours();
    const minutos = HORA.getMinutes();
  
    const amPm = horas >= 12 ? "pm" : "am";
    const hora12 = horas % 12 === 0 ? 12 : horas % 12;
  
    return `${hora12}:${minutos.toString().padStart(2, "0")} ${amPm}`;
  }

export {formatearHora,getAge,getDateByHourDate,getHourString,getDateFormat,formatearFecha};