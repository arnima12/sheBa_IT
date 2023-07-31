import React, { useContext, useEffect, useState } from 'react';
import target from "../../assets/target 1.png"
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const SignIn = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { loginUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail,setLoginUserEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const rememberMeValue = Cookies.get('rememberMe');
    if (rememberMeValue) {
      setRememberMe(JSON.parse(rememberMeValue));
    }
  }, []);

  const handleCheckboxChange = () => {
    const newRememberMe = !rememberMe;
    setRememberMe(newRememberMe);
    Cookies.set('rememberMe', newRememberMe, { expires: 30 });
  };
  
  const handleLogin = data => {
    console.log("data",data);
    
    setLoginError('')
    
    
    loginUser(data.email, data.password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log("login", user.email)
            setLoginUserEmail(data.email);
            navigate('/')
        })
        .catch((error) => {
            console.log(error.message);
            setLoginError(error.message);
        });
}
   return (
    <div className="container mx-auto px-32 xl:h-[600px] overflowX-hidden mb-24">
      <div className="hero-content flex-col lg:flex-row rounded-3xl" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)', margin: '0 -16px' }}>
        <img src={target} alt="signup" className="h-[480px] my-0" />
        <div className="my-16">
          <h1 className="text-4xl font-bold text-white">Hey! Hello 👋</h1>
          <p className="py-6 text-white">Enter the information you entered while registering.</p>
          <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input type="email" className="input input-bordered w-full " {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p className="text-red-500">{errors.email?.message}</p>}

            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input type="password" className="input input-bordered w-full " {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be 6 characters or longer" } })} />
                        {errors.password && <p className="text-red-500">{errors.password?.message}</p>}
              <div className="flex justify-between text-white my-4">
                <div className="flex items-center">
                <label>
                  <span><input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                  />
                  Remember Me</span>
                </label>
                </div>
                <div>
                <label className="label">
                  <span >
                    <Link to="/reset">Forget Password</Link>
                  </span>

                </label>
                </div>
              </div>
            </div>

            <input className="btn flex gap-2 font-bold border-0 text-white text-[12px] px-6 py-4 rounded-lg items-center" style={{backgroundColor: "rgba(144, 253, 191, 1)"}} type="submit" value="Sign In" />
            <div>
                        {loginError && <p className="text-red-500">{loginError}</p>}
                    </div>
          </form>
         
          
        </div>

      </div>
      <div className="border-2 mt-8 rounded-3xl flex justify-between">
        <div className="flex gap-4 items-center px-2">
          <div>🥺</div>
          <div>
            <p>Don't have an account?</p>
          </div>
        </div>
        
          <button className="text-white py-2 flex items-center rounded-3xl px-8" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)'}}><Link to="/signUp">Create Account</Link></button>
        
      </div>
    </div>

  );
};

export default SignIn;