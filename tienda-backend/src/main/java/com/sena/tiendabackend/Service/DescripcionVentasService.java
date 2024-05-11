package com.sena.tiendabackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.tiendabackend.Entity.DescripcionVentas;
import com.sena.tiendabackend.IRepository.IBaseRepository;
import com.sena.tiendabackend.IRepository.IDescripcionVentasRepository;
import com.sena.tiendabackend.IService.IDescripcionVentasService;

@Service
public class DescripcionVentasService extends ABaseService<DescripcionVentas> implements IDescripcionVentasService{

    @Autowired
    private IDescripcionVentasRepository repository;

    @Override
    protected IBaseRepository<DescripcionVentas, Long> getRepository() {
        return repository;
    }
    
}
