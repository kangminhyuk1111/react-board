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
        const id = res.data.loginCom[0].id;
        const password = res.data.loginCom[0].password;
        console.log(id)
        console.log(password)
        if (data.id == id) {
          if (data.password == password) {
            alert("로그인에 성공하였습니다.")
          } else {
            alert('비밀번호가 틀립니다.')
          }
        } else {
          alert('아이디가 틀립니다.')
        }
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