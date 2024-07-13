
import Loginpic from "../../assets/loginpic.avif";
import { useForm, SubmitHandler } from "react-hook-form";
import { UseUserSignup } from "../../hooks/Usesignup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from "@mui/material";
interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
 
}

const Signup = () => {

  const mutation = UseUserSignup();
  const { register, handleSubmit, getValues,formState: { errors } } = useForm<SignupData>();

  const onSubmit: SubmitHandler<SignupData> = data => {

    mutation.mutate(data);
  
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-20 gap-10">
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[400px] h-auto bg-transparent p-6 rounded-lg shadow-md md:w-[500px] z-10"
      >
        <h1 className="text-xl font-bold mb-4">Signup</h1>
        
        <label className="mb-2">Enter name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          placeholder="Enter your name"
          className="mb-4 p-2 border rounded-md"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}

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

        <label className="mb-2">Confirm password</label>
        <input
          type="password"
          {...register("confirmpassword", { 
            required: "Confirm password is required",
            validate: value => value === getValues('password') || "Passwords do not match"
          })}
          placeholder="Confirm your password"
          className="mb-4 p-2 border rounded-md"
        />
        {errors.confirmpassword && <span className="text-red-500">{errors.confirmpassword.message}</span>}

        <button
          type="submit"
          className="bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300"
        >
          {mutation.isPending?<CircularProgress size={30} color="secondary"/>:'Signup'}
        </button>
      </form>
      <ToastContainer theme="light" position="top-center"/>

      <img src={Loginpic} alt="signup_pic" className="md:h-[300px] md:w-[300px] md:ml-6 mt-12 md:mt-0" />
    </section>
  );
}

export default Signup;
