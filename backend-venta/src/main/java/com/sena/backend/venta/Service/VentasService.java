package com.sena.backend.venta.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.backend.venta.Entity.Ventas;
import com.sena.backend.venta.IRepository.IBaseRepository;
import com.sena.backend.venta.IRepository.IVentasRepository;
import com.sena.backend.venta.IService.IVentasService;

@Service
public class VentasService extends ABaseService<Ventas> implements  IVentasService{
    
    @Autowired
    private IVentasRepository repository;

    @Override
    protected IBaseRepository<Ventas, Long> getRepository() {
        return repository;
    }
}
