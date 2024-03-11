document.addEventListener("DOMContentLoaded", () => {
  // * capturo los inputs
  const inputDay = document.querySelector("#day");
  const inputMonth = document.querySelector("#month");
  const inputYear = document.querySelector("#year");

  // * captura del boton
  const btn = document.querySelector("#btn");

  // * captura de spans donde se va a imprimir en el dom
  const spanDay = document.querySelector("#span-d");
  const spanMonth = document.querySelector("#span-m");
  const spanYear = document.querySelector("#span-y");

  // // fecha actual
  const currentDate = new Date();

  function noPrint() {
    spanYear.textContent = " -- ";
    spanMonth.textContent = " -- ";
    spanYear.textContent = " -- ";
  }

  // ? funcion que calcula diferencia de dias
  function date(day, month, year) {
    // asignar a los parametros los datos capturados en los inputs
    day = inputDay.value;
    month = inputMonth.value;
    year = inputYear.value;

    // conversion de la fecha ingresada
    let ingresedDate = new Date(year, month - 1, day);

    // calculo de diferencia de fechas
    let pastYears = currentDate.getFullYear() - ingresedDate.getFullYear();
    let pastMonths = currentDate.getMonth() - ingresedDate.getMonth();
    let pastDays = currentDate.getDate() - ingresedDate.getDate();

    // si el dia es negativo significa que se paso al mes siguiente
    if (pastDays < 0) {
      pastMonths--;
      pastDays += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
    }

    // si el mes es negativo se pasa el año sigiente
    if (pastMonths < 0) {
      pastYears--;
      pastMonths += 12;
    }

    chekingEmpty();
    if (Number(day) && Number(month) && Number(year)) {
      // se imprime en el dom
      spanYear.textContent = pastYears;
      spanMonth.textContent = pastMonths;
      spanDay.textContent = pastDays;
    }
  }

 

 

  function chekingEmpty(day, month, year) {
    day = inputDay.value;
    month = inputMonth.value;
    year = inputYear.value;
    if (day === "" && month === "" && year === "") {
      // esto es para que no me imprima el resultado si todos los campos estan vacios

      noPrint();
    } else if (day === "" || month === "" || year === "") {
      // esto es para que no me imprima el resultdo si solo un campo esta vacio

      noPrint();
    } else if (isNaN(day) || isNaN(month) || isNaN(year)) {
      // esto es para que no me imprima el resultado si solo un campo esta vacio

      noPrint();
    }

    if (day === "" || month === "" || year === "") {
      spanDay.textContent = " -- ";
    }

  }

  // * alertas en para los errores
  const label = document.querySelectorAll(".label");

  const alertParaDay = document.createElement("p");
  const alertParaMonth = document.createElement("p");
  const alertParaYear = document.createElement("p");

  function checkInputs(day, month, year) {
    day = inputDay.value;
    month = inputMonth.value;
    year = inputYear.value;
    

  const checkDate = new Date(year, month, 0).getDate();

    if (day === "") {
      alertParaDay.innerHTML = `<p>This field is required</p>`;
      alertParaDay.classList.add("alert-p");

      label[0].classList.add("alert");
      inputDay.classList.add("alert-input");

      inputDay.insertAdjacentElement("afterend", alertParaDay);

      alertParaDay.classList.remove("hidden-class");

      noPrint();

    }else if(isNaN(day)) {

      alertParaDay.innerHTML = `<p>Must be a Number</p>`;
      alertParaDay.classList.add("alert-p");

      label[0].classList.add("alert");
      inputDay.classList.add("alert-input");

      inputDay.insertAdjacentElement("afterend", alertParaDay);

      alertParaDay.classList.remove("hidden-class");


      noPrint();

    }else if(day > 31){

      alertParaDay.innerHTML = `<p>Must be a valid day</p>`;
      alertParaDay.classList.add("alert-p");

      label[0].classList.add("alert");
      inputDay.classList.add("alert-input");

      inputDay.insertAdjacentElement("afterend", alertParaDay);

      alertParaDay.classList.remove("hidden-class");

      noPrint();

    }else {

      date();
      alertParaDay.classList.add("hidden-class");
      label[0].classList.remove("alert");
      inputDay.classList.remove("alert-input");
    }

    if (month === "" ) {

      alertParaMonth.innerHTML = `<p>This field is required</p>`;
      alertParaMonth.classList.add("alert-p");

      label[1].classList.add("alert");
      inputMonth.classList.add("alert-input");

      inputMonth.insertAdjacentElement("afterend", alertParaMonth);

      alertParaMonth.classList.remove("hidden-class");

      noPrint();

    }else if(month > 12) {

      noPrint();
      alertParaMonth.innerHTML = `<p>Must be a valid Month</p>`;
      alertParaMonth.classList.add("alert-p");

      label[1].classList.add("alert");
      inputMonth.classList.add("alert-input");

      inputMonth.insertAdjacentElement("afterend", alertParaMonth);

      alertParaMonth.classList.remove("hidden-class");

    }else if(isNaN(month)){

      noPrint();
      alertParaMonth.innerHTML = `<p>Must be a Number</p>`;
      alertParaMonth.classList.add("alert-p");

      label[1].classList.add("alert");
      inputMonth.classList.add("alert-input");

      inputMonth.insertAdjacentElement("afterend", alertParaMonth);

      alertParaMonth.classList.remove("hidden-class");

    }else {

      date();
      alertParaMonth.classList.add("hidden-class");
      label[1].classList.remove("alert");
      inputMonth.classList.remove("alert-input");
    }
    
    // // Esto me evita que se impriman los valores negativos cuando se presiona el boton.    
    let currentDate = new Date().getFullYear()

    if (year === "") {

      alertParaYear.innerHTML = `<p>This field is required</p>`;
      alertParaYear.classList.add("alert-p");

      label[2].classList.add("alert");
      inputYear.classList.add("alert-input");

      inputYear.insertAdjacentElement("afterend", alertParaYear);

      alertParaYear.classList.remove("hidden-class");

      noPrint();

    }else if(Number(year) > currentDate) {

      alertParaYear.innerHTML = `<p>Must be in the past</p>`;
      alertParaYear.classList.add("alert-p");

      label[2].classList.add("alert");
      inputYear.classList.add("alert-input");

      inputYear.insertAdjacentElement("afterend", alertParaYear);

      alertParaYear.classList.remove("hidden-class");

      noPrint();

    }else if(isNaN(year)){

      alertParaYear.innerHTML = `<p>Must be a Number</p>`;
      alertParaYear.classList.add("alert-p");

      label[2].classList.add("alert");
      inputYear.classList.add("alert-input");

      inputYear.insertAdjacentElement("afterend", alertParaYear);
      alertParaYear.classList.remove("hidden-class");

      noPrint();

    }else {

      date();
      alertParaYear.classList.add("hidden-class");
      label[2].classList.remove("alert");
      inputYear.classList.remove("alert-input");

    }

    if(Number(year) > currentDate){

      noPrint()
      // // Y esta linea que se impriman los dias que pasaron del mes.
      spanDay.textContent = ' -- '

    }

    if(isNaN(day) || isNaN(month) || isNaN(year)){

      noPrint()
      spanDay.textContent = ' -- '

    }

    if(Number(day) > 31 || Number(month) > 12 || Number(year > currentDate)){

      noPrint()
      spanDay.textContent = ' -- '

      
    }

     if(day > checkDate){
      alertParaDay.innerHTML = `<p>Must be a valid date</p>`;
      alertParaDay.classList.add("alert-p");

      label[0].classList.add("alert");
      inputDay.classList.add("alert-input");

      inputDay.insertAdjacentElement("afterend", alertParaDay);

      alertParaDay.classList.remove("hidden-class");
      spanDay.textContent = ' -- '
      spanMonth.textContent = ' -- '
      spanYear.textContent = ' -- '
      noPrint();

    }
    

  let dia = new Date().getDate()
  let mes = new Date().getMonth()
  let anio = new Date().getFullYear()
  
  let fechaActual = new Date(anio, mes, dia).getTime()
  
  let fechaIngresada = new Date(year, month - 1, day).getTime()
  
  if(fechaIngresada > fechaActual){
      alertParaDay.innerHTML = `<p>Must be in the past</p>`;
      alertParaDay.classList.add("alert-p");

      label[0].classList.add("alert");
      inputDay.classList.add("alert-input");

      inputDay.insertAdjacentElement("afterend", alertParaDay);

      alertParaDay.classList.remove("hidden-class");
      spanDay.textContent = ' -- '
      spanMonth.textContent = ' -- '
      spanYear.textContent = ' -- '
      noPrint();       
    }
}
  btn.addEventListener("click", checkInputs);


});


