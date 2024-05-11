package com.sena.backend.venta.DTO;

public interface IClientesDto extends IGenericDto{

    String getTipoDocumento();
	String getIdentificacion();
	String getNombreCliente();
	String getApellidoCliente();
	String getDireccion();
	String getCiudad();
	String getEstado();
    
}
