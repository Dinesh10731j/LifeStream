
import Loginpic from "../../assets/loginpic.avif";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { UseUserLogin } from "../../hooks/Uselogin";
import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();
  const mutation = UseUserLogin();

  const onSubmit: SubmitHandler<LoginData> = data => {
   mutation.mutate(data);

  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-20 gap-10">
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[400px] h-auto bg-transparent p-6 rounded-lg shadow-md md:w-[500px] z-10"
      >
        <h1 className="text-xl font-bold mb-4">Login</h1>
        
        <label className="mb-2">Enter e-mail</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your e-mail"
          className="mb-4 p-2 border rounded-md"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

        <label className="mb-2">Enter password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Enter your password"
          className="mb-4 p-2 border rounded-md"
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {mutation.isPending?<CircularProgress size={20} color="success"/>: 'Login'}
        </button>

        <Link to="/signup" className="bg-pink-300 text-white py-2 rounded-md hover:bg-pink-500 transition duration-300 mt-7 text-center">
          Signup
        </Link>
      </form>
      <ToastContainer theme="light" position="top-center"/>

      <img src={Loginpic} alt="login_pic" className="md:h-[300px] md:w-[300px] md:ml-6 mt-12 md:mt-0" />
    </section>
  );
}

export default Login;
