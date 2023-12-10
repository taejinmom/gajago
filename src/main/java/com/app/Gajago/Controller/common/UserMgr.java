package com.app.Gajago.Controller.common;

import com.app.Gajago.dto.user.UserDto;
import com.app.Gajago.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserMgr {
    @Autowired
    PasswordEncoder passwordEncoder;

    public String passwordEncoded(String password){
        return passwordEncoder.encode(password);
    }
    public boolean passwordDecoded(String password){
        return passwordEncoder.matches("123",password);
    }
}
