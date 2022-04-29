import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import '../css/login.css';

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = async(data) => {
    console.log(data);
    const id = data.id;
    const name = data.name;
    const password = data.password;
    const passwordCheck = data.passwordCheck;
    if(password !== passwordCheck){
      alert('비밀번호가 서로 다릅니다');
      data.password.value = '';
      data.passwordCheck.value = '';
    }
    const res = await axios.post(`/api/member/${id}&/${name}&/${password}&/${passwordCheck}`)
    console.log(res);
  };

  const loginSuccess = () =>{
    alert("회원가입이 성공적으로 이루어졌습니다.")
    document.location.href = '/';
  }
  console.log(watch("id"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <label>id
      영문자로 시작하는 영문자 또는 숫자 6~20자 
      </label>
      <input 
      type='text' 
      name="id" 
      {...register("id" ,{required:true,maxLength:20,pattern:/^[a-z]+[a-z0-9]{5,19}$/g})} />
      <label>name</label>
      
      <input 
      type='text'
      name="name" 
      {...register("name")} />
      <label>password
      8 ~ 16자 영문, 숫자 조합
      </label>
      <input 
      type='password'
      name="password"
      {...register("password",{required:true,maxLength:20})} />
      <label>password-check
      8 ~ 16자 영문, 숫자 조합
      </label>
      <input 
      type='password' 
      name="passwordCheck" 
      {...register("passwordCheck",{required:true,maxLength:20})} />
      <input type="submit" onClick={loginSuccess}/>
    </form>
  );
}

export default Signup;