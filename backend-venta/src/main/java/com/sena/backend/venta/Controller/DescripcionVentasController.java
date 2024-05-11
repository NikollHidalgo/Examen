package com.sena.backend.venta.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.backend.venta.Entity.DescripcionVentas;
import com.sena.backend.venta.IService.IDescripcionVentasService;

@CrossOrigin("*")
@RestController
@RequestMapping("v1/api/descripcion_ventas")
public class DescripcionVentasController extends ABaseController<DescripcionVentas, IDescripcionVentasService>{
    
    public DescripcionVentasController(IDescripcionVentasService service){
        super(service, "DescripcionVentas");
    }
}
