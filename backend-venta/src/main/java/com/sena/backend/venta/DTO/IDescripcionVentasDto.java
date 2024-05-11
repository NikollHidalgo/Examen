package com.sena.backend.venta.DTO;

public interface IDescripcionVentasDto {

    String getCantidad();
	String getPrecio();
	String getDescuento();
	String getSubTotal();
    Long getVentas_id();
    Long getProductos_id();

}
