import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, TagIcon } from 'lucide-react'

interface Author {
  name: string
  image: string
}

interface BlogCardProps {
  _id: string
  title: string
  description: string
  author: Author
  createdAt: string
  skills: []
  tags: []
  image: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  _id,
  title,
  description,
  author,
  createdAt,
  skills,
  tags,
  image
}) => {
  const formatDate = (dateString: string) => {
    console.log(dateString);
    const date = new Date(dateString)
    return `${[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  return (
    <Link href={`/dashboard/blog-page/${_id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg my-10">
        <div className="flex h-full justify-between ">
        <div className="w-2/3 flex flex-col">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={author.image} alt={author.name} />
                  <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{author.name}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    <time dateTime={createdAt}>{formatDate(createdAt)}</time>
                  </div>
                </div>
              </div>
              <h2 className="text-md font-bold mb-2 line-clamp-2">{title}</h2>
              <p className="text-muted-foreground mb-4 line-clamp-3 text-[14px] ">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {skills.slice(0,3).map((skill, i) => (
                  <Badge key={i} variant="secondary">{skill}</Badge>
                ))}
                {skills.length > 3 && <Badge variant="secondary">+{skills.length - 3}</Badge>}
              </div>
            </div>
          </div>
        </CardContent>
          <CardFooter className="bg-muted/50 p-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              <TagIcon className="h-4 w-4 text-muted-foreground" />
              {tags.filter(tag => tag!== '').slice(0, 3).map((tag, i) => (
                <Badge key={i} variant="outline">{tag}</Badge>
              ))}
              {tags.length > 3 && <Badge variant="outline">+{tags.length - 3}</Badge>}
            </div>
          </CardFooter>
        </div>
        <div className="w-1/3 relative">
            <img
              src={image || "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg"}
              alt={title}
              
              className="rounded-r-lg"
            />
        </div>
      </div>
      </Card>
    </Link>
  )
}

export default BlogCard