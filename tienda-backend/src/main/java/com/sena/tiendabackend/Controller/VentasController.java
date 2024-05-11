package com.sena.tiendabackend.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.tiendabackend.Entity.Ventas;
import com.sena.tiendabackend.IService.IVentasService;

@CrossOrigin("*")
@RestController
@RequestMapping("v1/api/ventas")
public class VentasController extends ABaseController<Ventas, IVentasService>{

    public VentasController(IVentasService service){
        super(service, "Ventas");
    }
    
}
