//Ejecutar esta funcion cuando la pantalla cargue
window.addEventListener("load", () => {
  //Conseguir todos los reportes ya guardados
  const reports = JSON.parse(localStorage.getItem("reports"))
  //Conseguir referencia a tabla
  const table = document.querySelector("#table")
  //Crear variables para almacenar fecha, dia , mes de reporte
  let d = new Date()
  let day = 0
  let month = 0
  //Crear variables para almacenar las cantidades de reportes por signos del zodiaco
  let aquarius = 0
  let pisces = 0
  let aries = 0
  let taurus = 0
  let gemini = 0
  let cancer = 0
  let leo = 0
  let virgo = 0
  let libra = 0
  let scorpio = 0
  let sagitarious = 0
  let capricorn = 0

  if (reports) {
    //Por cada reporte que exista comprobar a que signo pertenece y añadir reportes segun corresponda
    reports.forEach(report => {
      d = new Date(report.date)
      day = parseInt(d.getDate())
      month = parseInt(d.getMonth()) + 1
      if (month == "12") {
        if (day < 22)
          //Es de sagitario
          sagitarious++
        else
          //Es de capricornio
          capricorn++
      }
      else if (month == "1") {
        if (day < 20)
          //Es de capricornio
          capricorn++
        else
          //Es de acuario
          aquarius++
      }

      else if (month == "2") {
        if (day < 19)
          //Es de acuario
          aquarius++
        else
          //Es de piscis
          pisces++
      }

      else if (month == "3") {
        if (day < 21)
          //Es de piscis
          pisces++
        else
          //Es de aries
          aries++
      }
      else if (month == "4") {
        if (day < 20)
          //Es de aries
          aries++
        else
          //Es de tauro
          taurus++
      }

      else if (month == "5") {
        if (day < 21)
          //Es de tauro
          taurus++
        else
          //Es de geminis
          gemini++
      }

      else if (month == "6") {
        if (day < 21)
          //Es de geminis
          gemini++
        else
          //Es de cancer
          cancer++
      }

      else if (month == "7") {
        if (day < 23)
          //Es de cancer
          cancer++
        else
          //Es de leon
          leo++
      }

      else if (month == "8") {
        if (day < 23)
          //Es de leon
          leo++
        else
          //Es de virgo
          virgo++
      }

      else if (month == "september") {
        if (day < 23)
          //Es de virgo
          virgo++
        else
          //Es de libra
          libra++
      }

      else if (month == "october") {
        if (day < 23)
          //Es de libra
          libra++
        else
          //Es de escorpio
          scorpio++
      }

      else if (month == "november") {
        if (day < 22)
          //Es de escorpio
          scorpio++
        else
          //Es de sagitario
          sagitarious++
      }

    })
    //Insertar cantidad de datos de reportes por signo zodiacal en tabla
    table.rows[1].cells[1].innerHTML = aquarius
    table.rows[2].cells[1].innerHTML = pisces
    table.rows[3].cells[1].innerHTML = aries
    table.rows[4].cells[1].innerHTML = taurus
    table.rows[5].cells[1].innerHTML = gemini
    table.rows[6].cells[1].innerHTML = cancer
    table.rows[7].cells[1].innerHTML = leo
    table.rows[8].cells[1].innerHTML = virgo
    table.rows[9].cells[1].innerHTML = libra
    table.rows[10].cells[1].innerHTML = scorpio
    table.rows[11].cells[1].innerHTML = sagitarious
    table.rows[12].cells[1].innerHTML = capricorn
  } else {
    alert("No hay reportes")
  }
})