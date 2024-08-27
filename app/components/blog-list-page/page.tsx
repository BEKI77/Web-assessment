"use client"
import React from 'react'
import { getBlogPosts } from '@/app/api/blog-apies'
import { useState, useEffect } from 'react'
import BlogCard from './blog-cards/BlogCard'
const page = () => {
  const [posts, setPosts] = useState([])
  const [isloading, setLoding] = useState(true)

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res:any = await getBlogPosts()
        if(res){
          setPosts(res)
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
        <div className='w-[80%] mx-auto flex flex-col gap-4'>
            { isloading ? <p>Loading...</p> :
                posts.filter((post:any)=>(post.author?.name)).map((post:any,i) => <BlogCard key={i} {...post} />)
            }
        </div>
    </div>
  )
}

export default page
