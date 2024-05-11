package com.sena.tiendabackend.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.tiendabackend.Entity.Productos;
import com.sena.tiendabackend.IService.IProductosService;

@CrossOrigin("*")
@RestController
@RequestMapping("v1/api/productos")
public class ProductosController extends ABaseController<Productos, IProductosService>{

    public ProductosController(IProductosService service){
        super(service, "Productos");
    }
    
}
