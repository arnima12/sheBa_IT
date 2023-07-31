import React, { useContext, useState } from 'react';
import target from "../../assets/signup.png"
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { createUser, updateUser, verifyEmail } = useContext(AuthContext);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [userType, setUserType] = useState('student');
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState('')

  const handleSignup = data => {
    console.log(data);
    setSignUpError(' ');
    if (data.password !== confirmPassword) {
      setSignUpError('Password and confirm password do not match');
      return;
    }
    createUser(data.email, data.password)

      .then(result => {
        // Signed in 
        verifyEmail();
        alert("Verify your email")
        const user = result.user;
        console.log("user", user);

        const userInfo = {
          displayName: data.fullName

        }

        console.log("userInfo", userInfo)
        updateUser(userInfo)
          .then(() => {
            storeUser(data.fullName, data.phoneNumber, data.email, data.password, data.address);
            navigate('/')
          })
          .catch((error) => {
            console.log(error)
          })
          .catch((error) => {
            setSignUpError(error.message)
            // Asdfghjkl1234@A
          });

      })
  }
  const storeUser = async (fullName, phoneNumber, email, password, address) => {
    const user = { fullName, phoneNumber, email, password, address };

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // User saved successfully
        setCreatedUserEmail(email);
      } else {
        // Handle the error if user save failed
        throw new Error('Failed to save user data');
      }
    } catch (error) {
      console.log(error);
      // Handle the error
      setSignUpError('Failed to save user data');
    }
  }
  return (
    <div className="hero min-h-screen mb-16">
      <div className="rounded-3xl w-[1000px] h-[850px] px-24 pb-12" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)', margin: '0 -16px' }}>
        <div className="w-[100%]" style={{
          backgroundImage: `url(${target})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
          <div className="flex flex-col items-start mt-24 text-white">
            <h1 className="text-2xl text-center font-extrabold ">
              Create Account
            </h1>
            <p>Already have an account? <Link to="/signIn" className="link">Log In?</Link></p>
          </div>


          <form onSubmit={handleSubmit(handleSignup)} className="pb-8">
            <div className="w-full grid grid-cols-2 justify-start items-start gap-4 mt-8">
              <div className="item">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-white">Full Name</span>
                </label>
                <input type="text" {...register("fullName", { required: "Enter your full name" })} className="input input-bordered w-full " />
              </div>
              <div className="item">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-white">Email</span>
                </label>
                <input {...register("email", { required: "Enter your email" })} className="input input-bordered w-full " />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className="item">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-white">Password</span>
                </label>
                <input type="password" {...register("password", { required: "Enter your password", minLength: { value: 8, message: "Password must be 8 characters long" }, pattern: { value: /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/, message: "Password must be strong" } })} className="input input-bordered w-full " />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
              <div className="item">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-white">Phone Number</span>
                </label>
                <input type="tel" {...register("phoneNumber", { required: "Enter your phone number" })} className="input input-bordered w-full " />
                {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}

              </div>
              <div className="item">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-white">Confirm Password</span>
                </label>
                <input type="password" {...register("confirmPassword", { required: "Enter your password" })} className="input input-bordered w-full " onChange={e => setConfirmPassword(e.target.value)} />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}


              </div>
              <div className="item">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-white">Address</span>
                </label>
                <input type="text" {...register("address", { required: "Enter your address" })} className="input input-bordered w-full " />
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
              </div>
            </div>
            <input className="btn border-none text-white w-full mt-8 mb-24" type="submit" value="Sign up" style={{ backgroundColor: "rgba(144, 253, 191, 1)" }} />
            {signUpError && <p className="text-red-500">{signUpError}</p>}
            <div className="flex justify-center">
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="input input-bordered w-72"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
          </form>

        </div>
      </div>
    </div>

  );
};

export default SignUp;