package com.sena.tiendabackend.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.tiendabackend.Entity.DescripcionVentas;
import com.sena.tiendabackend.IService.IDescripcionVentasService;

@CrossOrigin("*")
@RestController
@RequestMapping("v1/api/descripcion_ventas")
public class DescripcionVentasController extends ABaseController<DescripcionVentas, IDescripcionVentasService>{

    public DescripcionVentasController(IDescripcionVentasService service){
        super(service, "DescripcionVentas");
    }
    
}
