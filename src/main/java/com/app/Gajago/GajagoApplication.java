package com.app.Gajago;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(value="com.app.Gajago.mapper")
public class GajagoApplication {

	public static void main(String[] args) {
		SpringApplication.run(GajagoApplication.class, args);
	}

}
