export const getBlogPosts = () => {
    try{
        const response = fetch("https://a2sv-backend.onrender.com/api/blogs").then((res)=>res.json())

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
        const response = fetch(`https://a2sv-backend.onrender.com/api/blogs/${id}`,
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