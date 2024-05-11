package com.sena.backend.venta.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.backend.venta.Entity.Clientes;
import com.sena.backend.venta.IRepository.IBaseRepository;
import com.sena.backend.venta.IRepository.IClientesRepository;
import com.sena.backend.venta.IService.IClientesService;

@Service
public class ClientesService extends ABaseService<Clientes> implements  IClientesService{

    @Autowired
    private IClientesRepository repository;

    @Override
    protected IBaseRepository<Clientes, Long> getRepository() {
        return repository;
    }
    
}
