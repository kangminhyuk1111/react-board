import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../css/login.css';

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const req = axios.post(`/api/login/${data.id}&/${data.password}`)
      .then(
        res => {
          console.log(res);
          console.log(res.data);
          if (res.data.length == 0) {
            alert("로그인 정보가 일치하지 않습니다.")
          } else if (res.data.length > 0) {
            alert("로그인에 성공하였습니다.")
            alert(data.id)
            sessionStorage.setItem('id', data.id)
            document.location.href = '/';
          }
          // console.log(id)
          // console.log(password)
          console.log(data.id);
          console.log(data.password);
        }
      )
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#cfe8fc', height: '600px' , backgroundColor: '#fff',
        paddingTop:'10px',textAlign:'center' , marginTop:'70px', borderRadius:'20px',
        boxShadow:'4px 4px 4px 4px gray'}}>
        <h1 className="h1tg">로그인</h1>
        <form onSubmit={handleSubmit(onSubmit)} method='post'>
          <div id="id_input_div">
          <TextField name='id' type='text' id='id_input'
          label="아이디" variant="outlined"
            {...register("id", { required: true })} />
          </div>
          <div id="password_input_div">
          <TextField name='password' type='password' id='password_input'
          label="비밀번호" variant="outlined"
            {...register("password", { required: true })} />
          </div>
          <div id='submit_input_div'>
          <Button type="submit" className="submit_btn" variant="contained">로그인</Button>
          </div>
          <div id="form_signup">
            <p>회원이 아니신가요? <Link to="/Signup">회원가입</Link></p>
          </div>
          <a href="/">메인으로</a>
        </form>
      </Box>
    </Container>

  );
}