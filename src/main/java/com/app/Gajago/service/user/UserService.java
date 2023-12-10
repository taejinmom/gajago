package com.app.Gajago.service.user;


import com.app.Gajago.Controller.common.UserMgr;
import com.app.Gajago.dto.user.UserDto;
import com.app.Gajago.mapper.user.UserMapper;
import com.app.Gajago.repository.UserRepository;
import lombok.NoArgsConstructor;
import org.apache.ibatis.binding.BindingException;
import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@NoArgsConstructor
public class UserService implements UserRepository {

    @Autowired
    UserMapper userMapper;
    @Autowired
    UserMgr userMgr;
    @Override
    public int loginCheck(UserDto user) {
        try {
            return userMapper.loginCheck(user);
        }catch (NullPointerException e){
            e.printStackTrace();
            return 0;
        }catch (BindingException e){
            e.printStackTrace();
            System.out.println("실패  "  );
            return 0;
        }
    }

    @Override
    public void userInsert(UserDto user) {
        System.out.println("UserService.userInsert >>> " + user);
        String password = userMgr.passwordEncoded(user.getLogin_pw());
        user.setLogin_pw(password);
        userMapper.userInsert(user);
    }
}
