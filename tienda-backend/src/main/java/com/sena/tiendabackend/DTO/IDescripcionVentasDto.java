package com.sena.tiendabackend.DTO;

public interface IDescripcionVentasDto extends IGenericDto{

    String getCantidad();
	String getPrecio();
	String getDescuento();
	String getSubTotal();
    Long getVentas_id();
    Long getProductos_id();
    
}
