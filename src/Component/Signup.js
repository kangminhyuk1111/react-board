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
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <label>ID</label>
      <input
        type='text'
        name="id"
        placeholder="8 ~ 16 영문 숫자 조합"
        {...register("id", {
          required: true, maxLength: 20,
          pattern: { value: /^[a-z]+[a-z0-9]{5,19}$/g, message: "잘못된 아이디 형식입니다." }
        })} />
      <label>name</label>
      <input
        type='text'
        name="name"
        placeholder="10자 이내의 이름"
        {...register("name")} />
      <label>password</label>
      <input
        type='password'
        name="password"
        placeholder="8 ~ 16 영문 숫자 조합"
        {...register("password", { required: true, maxLength: 20, pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/ })} />
      <label>password-check</label>
      <input
        type='password'
        name="passwordCheck"
        placeholder="8 ~ 16 영문 숫자 조합"
        {...register("passwordCheck", { required: true, maxLength: 20, pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/ })} />
      <input type="submit" onClick={loginSuccess} />
    </form>
  );
}

export default Signup;