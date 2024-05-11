package com.sena.backend.venta.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.backend.venta.Entity.Productos;
import com.sena.backend.venta.IRepository.IBaseRepository;
import com.sena.backend.venta.IRepository.IProductosRepository;
import com.sena.backend.venta.IService.IProductosService;

@Service
public class ProductosService extends ABaseService<Productos> implements IProductosService{

     @Autowired
    private IProductosRepository repository;

    @Override
    protected IBaseRepository<Productos, Long> getRepository() {
        return repository;
    }
    
}
