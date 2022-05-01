import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import '../css/login.css';

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const id = data.id;
    const name = data.name;
    const password = data.password;
    const passwordCheck = data.passwordCheck;
    if (password !== passwordCheck) {
      alert('비밀번호가 서로 다릅니다');
      data.password.value = '';
      data.passwordCheck.value = '';
    }
    const res = await axios.post(`/api/member/${id}&/${name}&/${password}&/${passwordCheck}`)
    console.log(res);
  };

  const loginSuccess = () => {
    alert("회원가입이 성공적으로 이루어졌습니다.")
    document.location.href = '/';
  }
  console.log(watch("id"));

  return (
    <Container maxWidth="sm">

      <Box sx={{
        bgcolor: '#cfe8fc', height: '600px', backgroundColor: '#fff',
        paddingTop: '10px', textAlign: 'center', marginTop: '70px', borderRadius: '20px',
        boxShadow: '4px 4px 4px 4px gray'
      }}>
        
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <h1>회원가입</h1>
          <br/>
          <div id="id_input_div">
            <TextField
              type='text'
              name="id"
              id='id_input'
              label="아이디" variant="outlined"
              {...register("id", {
                required: true, maxLength: 20,
                pattern: { value: /^[a-z]+[a-z0-9]{5,19}$/g, message: "잘못된 아이디 형식입니다." }
              })} />
          </div>

          <div id="id_input_div">
            <TextField
              type='text'
              name="name"
              id='password_input'
              label="이름" variant="outlined"
              {...register("name")} />
          </div>

          <div id="id_input_div">
            <TextField
              type='password'
              name="password"
              id='password_input'
              label="비밀번호" variant="outlined"
              {...register("password", { required: true, maxLength: 20, pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/ })} />
          </div>

          <div id="id_input_div">
            <TextField
              type='password'
              name="passwordCheck"
              id='id_input'
              label="비밀번호" variant="outlined"
              {...register("passwordCheck", { required: true, maxLength: 20, pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/ })} />
          </div>

          <div id='submit_input_div'>
          <Button type="submit" className="submit_btn" variant="contained" onClick={loginSuccess}>회원가입</Button>
          </div>
          <div id="form_signup">
            <Link to="/">메인으로</Link>
          </div>
        </form>

      </Box>

    </Container>
  );
}

export default Signup;