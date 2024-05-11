package com.sena.backend.venta.DTO;

public interface IVentasDto extends IGenericDto{

    String getTotal();
	String getFechaVenta();
	Long getClientes_id();
    String getEstado();
    
}
