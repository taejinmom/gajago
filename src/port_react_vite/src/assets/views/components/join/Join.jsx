import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import { flushSync } from 'react-dom'

const Join = () => {
  const theme = createTheme()
  const [checked, setChecked] = useState(false)
  const [passwordChecked, setPasswordChecked] = useState(false)
  const [repeatPassword, setRepeatPassword] = useState('')
  const password1 = useRef()
  const password2 = useRef()
  const [joinData, setJoinData] = useState({
    login_id: '',
    login_pw: '',
    email: '',
    name: '',
  })
  // 패스워드 재입력 체크
  const handlePassCheck = e => {
    setRepeatPassword(e.target.value)
    console.log(e.target.value)

    // if (repeatPassword === joinData.login_pw) {
    //   return true
    // } else {
    //   return false
    // }
  }

  // 입력 값 저장
  const handleChange = useCallback(e => {
    if (e.target.name === 'loginPwRepeat') {
      setRepeatPassword(e.target.value)
    } else {
      setJoinData({
        ...joinData,
        [e.target.name]: e.target.value,
      })
    }

    console.log(
      `password >> ${joinData.login_pw} // repeat >> ${repeatPassword}`
    )
    console.log(`password1 == ${password1.current.value}`)
    if (joinData.login_pw !== repeatPassword) {
      console.log('check!!')
      setPasswordChecked(true)
    } else {
      setPasswordChecked(false)
    }
  })
  useEffect(e => {
    axios.get('api/test').then(response => {
      console.log(response)
    })
  }, [])
  const joinItem = [
    {
      name: 'login_id',
      id: 'loginId',
      label: '아이디',
      type: 'text',
      helpeText: 'ID를 입력해주세요',
    },
    {
      name: 'login_pw',
      id: 'loginPw',
      label: '비밀번호',
      type: 'password',
      helpeText: 'Password를 입력해주세요',
      ref: password1,
    },
    {
      name: 'loginPwRepeat',
      id: 'loginPwRepeat',
      label: '비밀번호 재입력',
      type: 'password',
      helpeText: 'Password가 일치하지않습니다',
      ref: password2,
    },
    {
      name: 'email',
      id: 'email',
      label: '이메일 주소',
      type: 'email',
      helpeText: '',
    },
    {
      name: 'name',
      id: 'loginId',
      label: '이름',
      type: 'text',
      helpeText: '이름을 입력해주세요',
    },
  ]

  // 패스워드 재입력 테스트

  // 동의 체크
  const handleAgree = useCallback(
    e => {
      setChecked(checked, e.target.checked)
    },
    [checked]
  )

  // form 전송
  const handleSubmit = e => {
    if (e.target[11].checked === false) {
      console.log('joinData ', joinData)
      console.log('repeatPassword ', repeatPassword)
      e.preventDefault()
    } else {
      axios.post('api/logintest').then(response => {
        console.log(response)
      })
      e.preventDefault()
    }

    //
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                {joinItem.map((e, idx) => {
                  return (
                    <Grid item xs={12} key={idx}>
                      <TextField
                        required
                        fullWidth
                        id={e.id}
                        name={e.name}
                        label={e.label}
                        type={e.type}
                        helperText={e.helpeText}
                        ref={e.ref}
                        error={
                          e.name === 'loginPwRepeat' ? passwordChecked : false
                        }
                        onBlur={
                          e.name === 'loginPwRepeat'
                            ? handlePassCheck
                            : handleChange
                        }
                      />
                    </Grid>
                  )
                })}

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleAgree} color="primary" />
                    }
                    label="회원가입 약관에 동의합니다."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
              >
                회원가입
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                href="/login"
              >
                로그인
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default Join
