package com.sena.tiendabackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.tiendabackend.Entity.Productos;
import com.sena.tiendabackend.IRepository.IBaseRepository;
import com.sena.tiendabackend.IRepository.IProductosRepository;
import com.sena.tiendabackend.IService.IProductosService;

@Service
public class ProductosService extends ABaseService<Productos> implements IProductosService{

     @Autowired
    private IProductosRepository repository;

    @Override
    protected IBaseRepository<Productos, Long> getRepository() {
        return repository;
    }
    
}
