package com.sena.backend.venta.DTO;

public interface IProductosDto extends IGenericDto{

    String getNombreProducto();
	String getDescripcion();
	String getCantidad();
	String getPrecio();
	String getPorcentajeIva();
	String getEstado();
    String getPorcentajeDescuento();
    
}
