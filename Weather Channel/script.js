let button = $('button')[0]
let ciudad = $('input')[0]
function cargarCiudad() {
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(ciudad.value)}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, data => {
    $("#ciudad").text(data.name)
    $("#temperatura").text(data.main.temp)
    $("#grados").html('<sup>°C</sup>')
    $("#wicon").attr('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
    $("#descripcion").text(data.weather[0].description)
    $(".container").css('visibility', 'visible')
    ciudad.value = ''
    }).fail(() => alert("¡Ciudad no encontrada!"))
}
function validarInput() {
    if (!ciudad.value) {
        alert('¡Debe ingresar el nombre de una ciudad!')
    } else {
        cargarCiudad()
    }
}
$($(button).on('click', validarInput))