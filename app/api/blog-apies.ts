const baseUrl = ``

export const getBlogPosts = () => {
    try{
        const response = fetch('/data.json').then((res)=>res.json())

        if(response==null){
            throw new Error("Response is null");
        }

        console.log(response);
        return response
    }catch(error){
        console.log(error);
    }
}


export const getPost = (id:string)=>{
    try{
        const response = fetch(`${baseUrl}/api/blogs/${id}`,
            {
                cache:"force-cache",
            }
        ).then((res)=>res.json())
        if(response==null){
            throw new Error("Response is null");
        }
        console.log(response);
        return response;
    }catch(error){
        console.log(error);
    }
}