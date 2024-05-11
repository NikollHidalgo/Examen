package com.sena.tiendabackend.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.tiendabackend.Entity.Clientes;
import com.sena.tiendabackend.IService.IClientesService;

@CrossOrigin("*")
@RestController
@RequestMapping("v1/api/clientes")
public class ClientesController  extends ABaseController<Clientes, IClientesService>{

    public ClientesController(IClientesService service){
        super(service, "Clientes");
    }
    
    
}
