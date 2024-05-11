function save() {
    
    try {
      
      var data = {
        "nombreProducto": $("#nombreProducto").val(),
        "descripcion": $("#descripcion").val(),
        "cantidad": $("#cantidad").val(),
        "precio": $("#precio").val(),
        "porcentajeIva": $("#porcentajeIva").val(),
        "porcentajeDescuento": $("#porcentajeDescuento").val(),
        "state": parseInt($("#estado").val())
      };
  
      var jsonData = JSON.stringify(data);
      $.ajax({
        url: "http://localhost:9000/backend-venta/v1/api/productos",
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
      console.error("Error obteniendo los productos:", error);
    }
  }

  function clearData() {
    $("#id").val("");
    $("#nombreProducto").val("");
    $("#descripcion").val("");
    $("#cantidad").val("");
    $("#precio").val("");
    $("#porcentajeIva").val("");
    $("#porcentajeDescuento").val("");
    $("#estado").val("");
    var btnAgregar = $('button[name="btnAgregar"]');
        btnAgregar.text("Agregar");
        btnAgregar.attr("onclick", "save()");
  }

  function loadData(){
    $.ajax({
        url: "http://localhost:9000/backend-venta/v1/api/productos",
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
                      <td>${item.nombreProducto}</td>
                      <td>` + item.descripcion + `</td>
                      <td>` + item.cantidad + `</td>
                      <td>` + item.precio + `</td>
                      <td>` + item.porcentajeIva + `</td>
                      <td>` + item.porcentajeDescuento + `</td>
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
          url: "http://localhost:9000/backend-venta/v1/api/productos/" + id,
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
        "nombreProducto": $("#nombreProducto").val(),
        "descripcion": $("#descripcion").val(),
        "cantidad": $("#cantidad").val(),
        "precio": $("#precio").val(),
        "porcentajeIva": $("#porcentajeIva").val(),
        "porcentajeDescuento": $("#porcentajeDescuento").val(),
        "state": parseInt($("#estado").val())
      };
      
      var id = $("#id").val();
      var jsonData = JSON.stringify(data);
      $.ajax({
        url: "http://localhost:9000/backend-venta/v1/api/productos/" + id,
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
      alert("Error en actualizar ventas.");
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
      url: "http://localhost:9000/backend-venta/v1/api/productos/" + id,
      method: "GET",
      dataType: "json",
      success: function (response) {
        var data=response.data;
        $("#id").val(data.id);
        $("#nombreProducto").val(data.nombreProducto);
        $('#descripcion').val(data.descripcion);
        $('#cantidad').val(data.cantidad);
        $('#precio').val(data.precio);
        $('#porcentajeIva').val(data.porcentajeIva);
        $('#porcentajeDescuento').val(data.porcentajeDescuento);
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

