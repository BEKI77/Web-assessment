'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { getPost } from '@/app/api/blog-apies';
import { FaGripLinesVertical } from "react-icons/fa";

const Page = ({params:{id}}:{params:{id:string}}) => {
    const  [post, setPost] = useState<any>({})
    const [isloading, setLoding] = useState(true)

    useEffect(()=>{
        const fetchData = async()=>{
            try{
              const res:any = await getPost(id)
              console.log(res)
              if(res){
                setPost(res)
                setLoding(false)
              }
            }catch(error){
              console.log(error);
            }
          }
      
          fetchData()
        },[])

  return (
        <div className='pt-10'>
            {isloading?<p className='text-center'>Loading...</p>:
            <div>
                <h1 className='text-center text-[20px] font-sans font-[700] mb-5'>{post.title}</h1>
                <div className='flex gap-3 justify-center mb-10'>
                    {
                        post.tags?.map((tag:any, i:number) => <h3 className='text-gray-400 text-[14px]' key={i} >{tag}</h3>)
                    }
                </div>
                <div className='w-[50%] h-auto mx-auto'>
                    <img src={post.image} alt={post.title} className='rounded-md'/>
                </div>
                <div className='mx-auto w-[50%]'>
                    <img src={post?.author?.image} alt='img' className='w-[50px] h-[50px] rounded-full mx-auto my-3' />
                    <div className='flex gap-3 justify-center p'>
                        <h3 className='text-[14px] font-mono' >{post.author.name}</h3>
                        <FaGripLinesVertical size={10} className='my-auto' />
                        {post.skills.map((tag:any, i:number) => (<h3 className='font-mono text-[14px]' key={i} >{tag}</h3>))}
                    </div>
                    <p className='font-mono text-[14px] text-blue-800 text-center' >{post.author.email}</p>
                </div>
                <div className='w-[70%] mx-auto'>
                    <p className='overscroll-auto '>{post.description}</p>
                </div>
            </div>
            
            }
        </div>

  )

}
export default Page
