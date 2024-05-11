package com.sena.backend.venta.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.backend.venta.Entity.Clientes;
import com.sena.backend.venta.IService.IClientesService;

@CrossOrigin("*")
@RestController
@RequestMapping("v1/api/clientes")
public class ClientesController extends ABaseController<Clientes, IClientesService>{

    public ClientesController(IClientesService service){
        super(service, "Clientes");
    }
    
}
