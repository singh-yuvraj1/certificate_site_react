import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = ({company , img ,title, time , type , level , salary}) => {
  return (
   <div className='w-64 h-64 rounded-3xl bg-white shadow-lg m-16 p-4'>
       <div className='flex justify-between items-start'>
          
        <img className =" w-12 h-12 object-cover rounded-full"  src={img} alt="" srcset="" />
            <div className='flex flex-col items-center'>      
              <Bookmark size = '33'/>
              <span className='text-sm'>Save</span>    
            </div>  
       </div>

       <div className='mt-3'>
          <h2 className='text-lg font-sans' >{company} <span className='text-sm ml- text-gray-500'>{time}</span> </h2>
          <h1>{title}</h1>
          <div className='flex gap-3 mt-2'>
             <button className='bg-slate-300 rounded-3xl text-sm w-23 h-7' >{type}</button>
             <button className='bg-slate-300 rounded-3xl text-sm w-23 h-7'>{level}</button>
           </div>  
        </div>
         <hr className='mt-8'></hr>
       <div className='mt-2 flex gap-13' >
        
          <h3>{salary}</h3> 
          <button className= "bg-slate-300 rounded-3xl text-sm w-23">Apply Now</button>
        </div>
    </div>
  )
}

export default Card
    