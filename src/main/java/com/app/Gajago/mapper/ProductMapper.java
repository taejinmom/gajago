package com.app.Gajago.mapper;

import com.app.Gajago.dto.Product;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 테스트용 mapper
 */
@Mapper
public interface ProductMapper {
    public List<Product> findAll();
}
