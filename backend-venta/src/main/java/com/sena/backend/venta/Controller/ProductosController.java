package com.sena.backend.venta.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sena.backend.venta.Entity.Productos;
import com.sena.backend.venta.IService.IProductosService;

@CrossOrigin("*")
@RestController
@RequestMapping("v1/api/productos")
public class ProductosController extends ABaseController<Productos, IProductosService>{

    public ProductosController(IProductosService service){
        super(service, "Productos");
    }
    
}
