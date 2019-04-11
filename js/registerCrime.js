function onSubmit() {
  //Conseguir todos los datos guradados
  let data = []
  let temp = JSON.parse(localStorage.getItem("reports"))
  if (temp !== null) {
    data = temp
  }
  let id = data.length + 1
  //Conseguir datos de formulario
  const date = document.querySelector("#date").value
  const title = document.querySelector("#title").value
  const description = document.querySelector("#description").value
  const latitude = document.querySelector("#latitude").value
  const longitude = document.querySelector("#longitude").value
  const phone = document.querySelector("#phone").value
  const email = document.querySelector("#email").value
  const name = document.querySelector("#name").value
  let report = { id: id, date: date, title: title, description: description, latitude: latitude, longitude: longitude, phone: phone, email: email, name: name }

  if (date && title && description && latitude && longitude && phone && email && name) {
    //Guardar todos los datos en el almacenamiento local
    data.push(report)
    localStorage.setItem('reports', JSON.stringify(data))

    //Redireccionar a pagina principal
    window.location = "index.html"
  }
  else {
    alert("Falta algun campo")
  }
}