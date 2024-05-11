package com.sena.tiendabackend.DTO;

public interface IClientesDto extends IGenericDto{

    String getTipoDocumento();
	String getIdentificacion();
	String getNombreCliente();
	String getApellidoCliente();
	String getDireccion();
	String getCiudad();
	String getEstado();


    
}
