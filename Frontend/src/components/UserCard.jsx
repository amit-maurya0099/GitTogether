import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import  {Link} from "react-router-dom"
const UserCard = ({user}) => {
  return (
    <div className="card bg-base-300 w-[90%]  md:w-[20%] h-[90%] shadow-sm  ">
  <figure >
    <img
      src={user.avatar.url}
      alt="avatar"
       />
  </figure>
  <div className="card-body text-lg flex flex-col items-center">
    <h2 className="card-title font-bold ">{user.firstName + " "+ user.lastName}</h2>
     <h2 className='text-base font-semibold'>{user.about}</h2>
    <div className='flex gap-4 justify-center ' >
      <Link to={user.githubUrl} ><FaGithubSquare className='text-3xl cursor-pointer' /></Link>
      <Link to={user.linkedInUrl}><FaLinkedin className='text-3xl cursor-pointer'/></Link>     
    </div>
    <div className="card-actions justify-center my-4  w-full">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard
