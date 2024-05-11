package com.sena.backend.venta.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "descripcion_ventas")
public class DescripcionVentas extends ABaseEntity{

    @Column(name = "cantidad", nullable = false)
    private Integer cantidad;

    
    @Column(name = "precio", nullable = false)
    private Double precio;

    @Column(name = "descuento", nullable = false)
    private Double descuento;

    @Column(name = "subtotal", nullable = false)
    private Double subTotal;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ventas_id", nullable = true)
    private Ventas ventas;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "productos_id", nullable = true)
    private Productos productos;

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Double getDescuento() {
        return descuento;
    }

    public void setDescuento(Double descuento) {
        this.descuento = descuento;
    }

    public Double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(Double subTotal) {
        this.subTotal = subTotal;
    }

    public Ventas getVentas() {
        return ventas;
    }

    public void setVentas(Ventas ventas) {
        this.ventas = ventas;
    }

    public Productos getProductos() {
        return productos;
    }

    public void setProductos(Productos productos) {
        this.productos = productos;
    }



    
}
