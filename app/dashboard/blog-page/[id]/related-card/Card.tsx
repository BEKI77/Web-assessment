'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { getPost } from '@/app/api/blog-apies';
const Card = (id:string) => {
    const  [post, setPost] = useState<any>({})
    const [isloading, setLoding] = useState(true)

    useEffect(()=>{
        const fetchData = async()=>{
            try{
              const res:any = await getPost(id)
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
    <div>
        {
            isloading?<p>Loading...</p>:
            <div>
                <img src={post.image} className='w-full'/>
                <h3>{post.title}</h3>
                
            </div>

        }
      
    </div>
  )
}

export default Card
