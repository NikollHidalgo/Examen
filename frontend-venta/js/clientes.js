

document.addEventListener("DOMContentLoaded", function () {

    // Selecciona el elemento select por su id
    var tipoDocumentoSelect = identificacion.getElementById('tipo_documento');
    var valorInicial = tipoDocumentoSelect.value;
    loadClientes(valorInicial); 
    validacionClientes();
  
    // Agrega un evento de cambio al elemento select
    tipoDocumentoSelect.addEventListener('change', function () {
        // Llama a la función loadClientes() cuando se selecciona una opción
        var valor = tipoDocumentoSelect.value;
        loadCientes(valor);
    });
  });
  
  
  
  var documents = [];
  
  function validacionClientes() {
    $("#identificacion_id").on("change", function() {
      var selectedValue = $(this).val();
      var isValid = documents.some(function(item) {
            return item.value === selectedValue;
        });
    
        // Si el valor seleccionado es válido, deshabilitar el campo #name_id
        // de lo contrario, habilitarlo nuevamente y borrar selected_clientes_id
        if (isValid) {
            $("#name_id").prop('disabled', true);
          } else {
            $("#name_id").val("").prop('disabled', false);
            $("#selected_clientes_id").val(""); // Corregir selector y borrar valor
        }
    });
  }

  function loadData() {
    $.ajax({
        url: "http://localhost:9000/backend-venta/v1/api/clientes/",
        method: "GET",
        dataType: "json",
        success: function (response) {
            console.log(response.data);
            var html = "";
            var data = response.data;
            console.log( data);
            data.forEach(function (item) {
                // Construir el HTML para cada objeto
                if (!item.deletedAt) {
                    html +=
                        `<tr>
                    <td>` + item.tipoDocumento + `</td>
                    <td>` + item.identificacion + `</td>
                    <td>` + item.nombreCliente + `</td>
                    <td>` + item.apellidoCliente + `</td>
                    <td>` + item.telefono + `</td>
                    <td>` + item.direccion + `</td>
                    <td>` + item.ciudad + `</td>
                    <td>` + (item.state == true ? "Activo" : "Inactivo") + `</td>
                    <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="findById(${item.id})"> <img src="/assets/icon/pencil-square.svg" > </button>
                    <button type="button" class="btn btn-secundary" onclick="deleteById(${item.id})"> <img src="/assets/icon/trash3.svg" > </button></td>
                </tr>`;
                }
            });

            $("#resultData").html(html);
        },
        error: function (error) {
            // Función que se ejecuta si hay un error en la solicitud
            console.error("Error en la solicitud:", error);
        },
    });
}

function loadTipoDocumento() {
  $.ajax({
      url: "http://localhost:9000/backend-venta/v1/api/enum/tipoDocumento",
      method: "GET",
      dataType: "json",
      success: function (response) {
          console.log(response);
          var html = "";
          response.forEach(function (item) {
            // Construir el HTML para cada objeto
              html += `<option value="${item}">${item}</option>`;
          });
          $("#tipoDocumento").html(html);
          $("#tipoDocumento").html(html);
      },
      error: function (error) {
          // Función que se ejecuta si hay un error en la solicitud
          console.error("Error en la solicitud:", error);
        },
  });
}

function save() {
    
  try {
    
    var data = {
      "tipoDocumento": $("#tipoDocumento").val(),
      "identificacion": $("#identificacion").val(),
      "nombreCliente": $("#nombreCliente").val(),
      "apellidoCliente": $("#apellidoCliente").val(),
      "telefono": $("#telefono").val(),
      "direccion": $("#direccion").val(),
      "ciudad": $("#ciudad").val(),
      "state": parseInt($("#estado").val())
    };

    var jsonData = JSON.stringify(data);
    $.ajax({
      url: "http://localhost:9000/backend-venta/v1/api/clientes",
      method: "POST",
      dataType: "json",
      contentType: "application/json",
      data: jsonData,
      success: function(data) {
        Swal.fire({
          title: "perfecto!",
          text: "Registro agregado con éxito!",
          icon: "success",
          timer: 8000, // Tiempo en milisegundos (2 segundos en este caso)
          buttons: false // Deshabilitar botones de confirmación y cancelación
          });
        clearData();
        loadData();
      },
      error: function(error) {
        
      },
    });
  } catch (error) {
    console.error("Error obteniendo los clientes:", error);
  }
}

function clearData() {
  $("#id").val("");
  $("#tipoDocumento").val("");
  $("#identificacion").val("");
  $("#nombreCliente").val("");
  $("#apellidoCliente").val("");
  $("#telefono").val("");
  $("#direccion").val("");
  $("#ciudad").val("");
  $("#estado").val("");
  var btnAgregar = $('button[name="btnAgregar"]');
      btnAgregar.text("Agregar");
      btnAgregar.attr("onclick", "save()");
}

function loadData() {
  $.ajax({
    url: "http://localhost:9000/backend-venta/v1/api/clientes",
    method: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response.data);
      var html = "";
      var data = response.data;
      data.forEach(function (item) {
        // Construir el HTML para cada objeto
        if (!item.deletedAt) {
        html +=
          `<tr>
                  <td>${item.tipoDocumento}</td>
                  <td>` + item.identificacion + `</td>
                  <td>` + item.nombreCliente+ `</td>
                  <td>` + item.apellidoCliente + `</td>
                  <td>` + item.telefono + `</td>
                  <td>` + item.direccion+ `</td>
                  <td>` + item.ciudad+ `</td>
                  <td>` + (item.state == true ? "Activo" : "Inactivo") + `</td>
                  <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="findById(${item.id})"> <img src="/assets/icon/pencil-square.svg" > </button>
                  <button type="button" class="btn btn-secundary" onclick="deleteById(${item.id})"> <img src="/assets/icon/trash3.svg" > </button></td>
              </tr>`;
        }
      });

      $("#resultData").html(html);
    },
    error: function (error) {
      // Función que se ejecuta si hay un error en la solicitud
      console.error("Error en la solicitud:", error);
    },
  });
}

function deleteById(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        url: "http://localhost:9000/backend-venta/v1/api/clientes/" + id,
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      }).done(function (result) {
        loadData();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      });
    }
  });
}

function update() {
  // Construir el objeto data
  try{
    var data = {
      "tipoDocumento": $("#tipoDocumento").val(),
      "identificacion": $("#identificacion").val(),
      "nombreCliente": $("#nombreCliente").val(),
      "apellidoCliente": $("#apellidoCliente").val(),
      "telefono": $("#descuento").val(),
      "direccion": $("#direccion").val(),
      "ciudad": $("#ciudad").val(),
      "state": parseInt($("#estado").val())
    };
    
    var id = $("#id").val();
    var jsonData = JSON.stringify(data);
    $.ajax({
      url: "http://localhost:9000/backend-venta/v1/api/clientes/" + id,
      data: jsonData,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).done(function (result) {
      Swal.fire({
        title: "perfect!",
        text: "Registro actualizado con éxito!",
        icon: "success",
        timer: 8000, // Tiempo en milisegundos (2 segundos en este caso)
        buttons: false // Deshabilitar botones de confirmación y cancelación
      });
      loadData();
      clearData();
  
      //actualzar boton
      var btnAgregar = $('button[name="btnAgregar"]');
      btnAgregar.text("Agregar");
      btnAgregar.attr("onclick", "save()");
    });
  }catch (error) {
    alert("Error en actualizar clientes.");
    console.error("Error en la solicitud:", error);
    //actualzar boton
    loadData();
    clearData();
    var btnAgregar = $('button[name="btnAgregar"]');
    btnAgregar.text("Agregar");
    btnAgregar.attr("onclick", "save()");
  }
}

function findById(id) {
  $.ajax({
    url: "http://localhost:9000/backend-venta/v1/api/clientes/" + id,
    method: "GET",
    dataType: "json",
    success: function (response) {
      var data=response.data;
      $("#id").val(data.id);
      $("#tipoDocumento").val(data.tipoDocumento);
      $('#identificacion').val(data.identificacion);
      $('#nombreCliente').val(data.nombreCliente);
      $('#apellidoCliente').val(data.apellidoCliente);
      $('#telefono').val(data.telefono);
      $('#direccion').val(data.direccion);
      $('#ciudad').val(data.ciudad);
      $("#estado").val(data.state == true ? 1 : 0);

      //Cambiar boton.
      var btnAgregar = $('button[name="btnAgregar"]');
      btnAgregar.text("Actualizar");
      btnAgregar.attr("onclick", "update()");
    },
    error: function (error) {
      // Función que se ejecuta si hay un error en la solicitud
      console.error("Error en la solicitud:", error);
    },
  });
}


  
  
  
  