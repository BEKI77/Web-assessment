import React from 'react'
import Link from 'next/link';
import { GiAbstract002 } from "react-icons/gi";
import Image from 'next/image';
const BlogCard = (props:any) => {
  return (
    <Link href={`/components/blog-page/${props._id}`}>
    <div className='border rounded-md p-4 w-[65%] mx-auto h-72 flex justify-between overflow-hidden ' >
      <div className='md:w-[70%] w-full'>
          <div className='flex justify-start gap-4 my-2 overflow-hidden' >
            <img src={props.author?.image} alt="img" className='w-12 h-12 border rounded-full my-auto' />
            <div className='flex flex-col gap-2 my-auto'>
                <div className='flex justify-evenly gap-2 my-auto' >
                    <p className='my-auto text-[16px]'>{props.author?.name}</p>
                    <GiAbstract002 size={5} className='my-auto'/>
                    <p className='text-[10px] text-gray-600 my-auto'>{
                      `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][new Date('2023-08-18T21:59:57.206Z').getMonth()]} ${new Date('2023-08-18T21:59:57.206Z').getDate()},${new Date('2023-08-18T21:59:57.206Z').getFullYear()}`
                    }</p>
                </div>
                <div className='overflow-hidden gap-2 hidden md:flex'>
                  {
                    props.skills?.map((skill:any, i:any) => <p key={i} className='text-[13px] text-gray-500 font-[600]' >{skill.toUpperCase()}</p>)
                  }
                </div>
            </div>
          </div>
          <div className='my-4 overflow-hidden w-full h-[55%]'>
              <h1 className='text-wrap text-[18px] font-[600] mb-1 px-5'>{props.title}</h1>
              <p  className="h-auto text-[13px] font-sans font-[400] text-gray-600 text-wrap overflow-hidden text-ellipsis whitespace-nowrap px-5 " >{props.description}</p>
          </div>
          <div className='flex gap-4 pl-10 overflow-hidden bg-transparent'>
            {
              props.tags?.filter((tag:any) => tag!='').map((tag:any, i:any) => <label key={i} className=' bg-gray-100 rounded-full px-5 py-1 text-gray-600 text-[14px]'>{tag}</label>)
            }
          </div>
      </div>
      <div className='w-1/3 my-auto hidden md:block '>
          <img src ="https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg" height={250} alt="logo" className='rounded-lg my-auto w-auto'/>
      </div>
    </div>
    </Link>
  )
}

export default BlogCard
