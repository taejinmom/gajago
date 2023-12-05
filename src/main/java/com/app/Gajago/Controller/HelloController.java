package com.app.Gajago.Controller;

import com.app.Gajago.dto.Product;
import com.app.Gajago.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HelloController {
    @Autowired
    ProductService productService;

    @GetMapping("/api/hello")
    public String test() {

        List<Product> testList = productService.findAll();

        return testList.toString();
    }
}
