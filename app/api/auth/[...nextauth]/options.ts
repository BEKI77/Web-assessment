import type { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username:{
                    label:"Username:",
                    type: "text",
                    placeholder: "Your UserName"
                },
                password:{
                    label: "Password: ",
                    type: "password",
                    placeholder: "Your Password"
                },
            },

            async authorize(credentials) {
                const user = {id:"42", name:"beki", password:"12345678"}

                if(credentials?.username === user.name && credentials?.password===user.password){
                    return user;
                }else{
                    return null;
                }
            }

        })
    ],
    pages:{
        signIn:"/auth/signIn"
    },
    secret: process.env.NEXTAUTH_SECRET,

    // callbacks: {
    //     async redirect({ url, baseUrl }) {
    //         // Check if the url starts with the base URL
    //         if (url.startsWith(baseUrl)) {
    //             return url;
    //         }
    //         // If the url is external or malformed, return to the base URL
    //         return baseUrl;
    //     }
    // }
}