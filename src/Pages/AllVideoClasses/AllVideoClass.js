import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AllVideoClass = ({ allVideoClass }) => {

    const {user} = useContext(AuthContext);
    console.log(user)
    
    const { _id, name, bgImage, ratings, star, people, position, person } = allVideoClass;
    const handleJoinClass = () =>{
        
            }
    return (

        <div className="relative mr-0" style={{
            backgroundImage: `url(${bgImage})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', width: '300px', height: '300px',
        }}>
            <h1 className="text-white font-semibold ml-4 my-4 w-[100px]">{name}</h1>
            <div className="absolute top-4 right-2 text-white font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            </div>
            <div className="text-white absolute bottom-2 left-4">
                <p className="font-bold">{person}</p>
                <p className="text-xs font-normal">{position}</p>
                <div className="flex gap-2 text-xs">
                    <p className="font-bold">{ratings}</p>
                    <p className="text-amber-500">{star}</p>
                    <p>({people})</p>
                    <button onClick={handleJoinClass}>Play</button>
                </div>

            </div>


        </div>
    );
};

export default AllVideoClass;