package com.app.Gajago.mapper.user;

import com.app.Gajago.dto.user.UserDto;
import org.apache.catalina.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface UserMapper {
    public int loginCheck(UserDto user);
    public void userInsert(UserDto user);
}
