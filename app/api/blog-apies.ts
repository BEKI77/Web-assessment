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

export const getPost = async (id: string) => {
    try {
      // Await the response from fetch
      const response: any = await fetch(`/data.json`).then((res) => res.json());
  
      // Check if the response is null or undefined
      if (response == null) {
        throw new Error("Response is null");
      }
      console.log(response)
      // Filter the data to find the post with the matching _id
      const data = response.filter((post: any) => post._id === id);
  
      console.log(data);
      return data[0]; // You can return the array if using filter, or data[0] if using find
    } catch (error) {
      console.error("Error fetching the post:", error);
    }
  };
  