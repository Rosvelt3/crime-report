//Conseguir referencia a tabla
const table = document.querySelector("#table")

//Conseguir referencia a barra de busqueda y instanciar variables necesarias para buscar
const searchBar = document.querySelector("#searchBar")
let value = ""
let i
let searchValue
let tr = table.getElementsByTagName("tr")
let td

//Conseguir referencia a formulario de edicion
const editFormulary = document.getElementById("editFormulary")
//Fila seleccionada para editar
let selectedRow = undefined

//Conseguir todos los reportes ya guardados
const reports = JSON.parse(localStorage.getItem("reports"))

//Ejecutar esta funcion cuando la pantalla cargue
window.addEventListener("load", () => {

  //Conseguir referencia a fila de tabla
  let row = table.insertRow()

  if (reports) {
    //Por cada reporte que exista insertar datos en tabla
    reports.forEach(report => {
      row = table.insertRow()
      Object.keys(report).forEach((key, index) => {
        let cell = row.insertCell();
        cell.innerHTML = report[key]
      })
      let editButton = row.insertCell()
      //Añadir boton de editar a campo
      editButton.innerHTML = "<button onclick='onEdit(this)' class='editButton button is-link'>Editar</button>"
    })
  } else {
    alert("No hay reportes")
  }
})

//Ejecutar esta funcion cuando se presione un boton de editar
onEdit = (element) => {
  selectedRow = element.parentElement.parentElement
  document.querySelector("#date").value = selectedRow.cells[1].innerHTML
  document.querySelector("#title").value = selectedRow.cells[2].innerHTML
  document.querySelector("#description").value = selectedRow.cells[3].innerHTML
  document.querySelector("#latitude").value = selectedRow.cells[4].innerHTML
  document.querySelector("#longitude").value = selectedRow.cells[5].innerHTML
  document.querySelector("#phone").value = selectedRow.cells[6].innerHTML
  document.querySelector("#email").value = selectedRow.cells[7].innerHTML
  document.querySelector("#name").value = selectedRow.cells[8].innerHTML
  editFormulary.style.display = ""
}

//Ejecutar esta funcion cuando se guarden las ediciones
onSave = () => {
  //Si no has seleccionado nada para editar no dejar editar
  if (selectedRow == undefined) {
    alert("No has seleccionado nada para editar")
  }
  //Si seleccionaste algo para editar que comience la edicion
  else {
    let id = selectedRow.cells[0].innerHTML
    let newReports = reports.map(report => {
      //Si se encuentra el id de la fila que elegiste que se aplique la edicion
      if (report.id == id) {
        report.date = document.querySelector("#date").value
        report.title = document.querySelector("#title").value
        report.description = document.querySelector("#description").value
        report.latitude = document.querySelector("#latitude").value
        report.longitude = document.querySelector("#longitude").value
        report.phone = document.querySelector("#phone").value
        report.email = document.querySelector("#email").value
        report.name = document.querySelector("#name").value
        return report
        //Si no se encuentra el id de la fila que elegiste simplemente repornar el reporte actual
      } else {
        return report
      }
    })
    localStorage.setItem('reports', JSON.stringify(newReports))
    selectedRow = undefined
    document.querySelector("#date").value = "2018-12-31"
    document.querySelector("#title").value = ""
    document.querySelector("#description").value = ""
    document.querySelector("#latitude").value = ""
    document.querySelector("#longitude").value = ""
    document.querySelector("#phone").value = ""
    document.querySelector("#email").value = ""
    document.querySelector("#name").value = ""
    alert("La edicion a sido completada con exito")
    window.location.reload()
  }
}


//Funcion para buscar en barra
searchBar.addEventListener('input', (e) => {
  //Conseguir valor de barra de busqueda
  searchValue = e.srcElement.value
  for (i = 0; i < tr.length; i++) {
    //Conseguir cada valor de la tabla
    let date = tr[i].getElementsByTagName("td")[1]
    let title = tr[i].getElementsByTagName("td")[2]
    let description = tr[i].getElementsByTagName("td")[3]
    let latitude = tr[i].getElementsByTagName("td")[4]
    let longitude = tr[i].getElementsByTagName("td")[5]
    let phone = tr[i].getElementsByTagName("td")[6]
    let email = tr[i].getElementsByTagName("td")[7]
    let name = tr[i].getElementsByTagName("td")[8]
    //Si hay valores en la tabla seguir
    if (date || title || description || latitude || longitude || phone || email || name) {
      //Combinar todos los valores
      value = date.innerText + " " + title.innerText + " " + description.innerText + " " + latitude.innerText + " " + longitude.innerText + " " + phone.innerText + " " + email.innerText + " " + name.innerText;
      //Comprobar si los valores que se insertaron el barra de busqueda existen en la tabla y si existen mostrarlos
      if (value.toUpperCase().includes(searchValue.toUpperCase())) {
        tr[i].style.display = ""
      }
      //Si no existen en la tabla no mostrarlos
      else {
        tr[i].style.display = "none"
      }
    }
  }
})