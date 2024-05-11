package com.sena.tiendabackend.DTO;

public interface IVentasDto extends IGenericDto{

    String getTotal();
	String getFechaVenta();
	Long getClientes_id();
    String getEstado();


    
}
