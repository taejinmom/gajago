package com.app.Gajago.service;

import com.app.Gajago.dto.Product;
import com.app.Gajago.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired public ProductMapper productMapper;

    public List<Product> findAll() {
        return productMapper.findAll();
    }
}
