package com.sena.tiendabackend.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "ventas")
public class Ventas extends ABaseEntity{

    @Column(name = "total", nullable = false)
    private Double total;

    @Column(name = "fecha_venta", nullable = false)
    private String fechaVenta;

    @Column(name = "estado", length = 50, nullable = false)
    private String estado;

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getFechaVenta() {
        return fechaVenta;
    }

    public void setFechaVenta(String fechaVenta) {
        this.fechaVenta = fechaVenta;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
    
}
