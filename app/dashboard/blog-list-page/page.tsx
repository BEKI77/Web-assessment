"use client"
import BlogCard from './blog-cards/BlogCard'
import React, { useState, useEffect } from 'react'
import { getBlogPosts } from '@/app/api/blog-apies'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, RefreshCw, ChevronRight } from 'lucide-react'

const Page = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const filtered = posts.filter((post: any) => 
      post.author?.name && post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredPosts(filtered)
  }, [searchTerm, posts])

  const fetchData = async () => {
    try {
      setLoading(true)
      const res: any = await getBlogPosts()
      if (res) {
        setPosts(res)
        setFilteredPosts(res)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">A2SV Blog</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-1/2">
                <Input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <Button onClick={fetchData} disabled={isLoading}>
                <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh Posts
              </Button>
            </div>
          </CardContent>
        </Card>

        {isLoading ? (
          <div className="space-y-8">
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} className="h-[200px] w-full rounded-lg" />
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {filteredPosts.filter((post:any)=>(post.author?.name)).map((post: any, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-gray-600 text-lg">No blog posts found. Try adjusting your search.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Page