package com.sena.tiendabackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.tiendabackend.Entity.Ventas;
import com.sena.tiendabackend.IRepository.IBaseRepository;
import com.sena.tiendabackend.IRepository.IVentasRepository;
import com.sena.tiendabackend.IService.IVentasService;

@Service
public class VentasService extends ABaseService<Ventas> implements  IVentasService{

    @Autowired
    private IVentasRepository repository;

    @Override
    protected IBaseRepository<Ventas, Long> getRepository() {
        return repository;
    }
    
}
