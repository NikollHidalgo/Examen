package com.sena.tiendabackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.tiendabackend.Entity.Clientes;
import com.sena.tiendabackend.IRepository.IBaseRepository;
import com.sena.tiendabackend.IRepository.IClientesRepository;
import com.sena.tiendabackend.IService.IClientesService;

@Service
public class ClientesService extends ABaseService<Clientes> implements  IClientesService{

    
    @Autowired
    private IClientesRepository repository;

    @Override
    protected IBaseRepository<Clientes, Long> getRepository() {
        return repository;
    }
    
    
}
