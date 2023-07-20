import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const { register, handleSubmit } = useForm();
    const { resetPassword } = useContext(AuthContext);
    const onSubmit = data => {
        console.log(data.email);
        if(!data.email){
             alert("Please enter email")
            return;
        }
        resetPassword(data.email)
        .then(() => {
            
          })
          .catch((error) => {
           console.log(error.message)
            // ..
          });
    }

    return (
        
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full flex justify-center items-center h-[400px]">
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" className="input input-bordered w-96 " {...register("email", { required: "Email Address is required" })} />
                </div>

            
            <div className="flex justify-center my-8">
                <input className="btn btn-accent w-48" type="submit" value="Reset" />
            </div>
            </div>

        </form>
        )
};

export default ResetPassword;