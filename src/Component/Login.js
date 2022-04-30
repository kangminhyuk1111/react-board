import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const req = axios.post(`/api/login/${data.id}&/${data.password}`)
    .then(
      res => {
        console.log(res);
        console.log(res.data);
        if(res.data.length == 0){
          alert("로그인 정보가 일치하지 않습니다.")
        }else if(res.data.length > 0){
          alert("로그인에 성공하였습니다.")
          alert(data.id)
          sessionStorage.setItem('id',data.id)
          document.location.href='/';
        }
        // console.log(id)
        // console.log(password)
        console.log(data.id);
        console.log(data.password);
      }
    )
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method='post'>
      <label>아이디</label>
      <input name='id' type='text'
        {...register("id", { required: true })} />
      <label>비밀번호</label>
      <input name='password' type='password'
        {...register("password", { required: true })} />
      <input type="submit" />
    </form>
  );
}