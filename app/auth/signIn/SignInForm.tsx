'use client'
import { useState } from 'react';  // Import useState to manage form state
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SignInForm = () => {
    const router = useRouter();
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async (event: React.FormEvent) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      try {
        // Call the signIn method with credentials and form input values
        const result = await signIn("credentials", {
          redirect: false,  // Disable automatic redirect
          username,         // Pass the username from state
          password,         // Pass the password from state
        });
  
        console.log(result);
  
        // Handle sign-in success or error
        if (result?.error) {
          console.error("Sign-in error:", result.error);
        } else {
          console.log("Sign-in successful");
          router.push("/dashboard");  // Redirect to dashboard on successful sign-in
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    };
  
    return (
      <div className="flex h-screen bg-blue-700">
        <div className="flex-1 flex items-center justify-center p-10">
          <div className="max-w-md">
            <Image
              src='/icons/Img1.png'
              width={400}
              height={400}
              alt="3D character illustration"
              className="mb-8 mx-auto"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Welcome Back</h1>
            <p className="text-lg text-white/80 font-sans">
              Login to receive blogs and learn more about A2SV
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="w-full max-w-md p-8">
            <div className="flex justify-end mb-8">
              <Link href='/auth/signUp'>
                <Button variant="ghost" className="text-blue-700" > Sign up </Button>
              </Link>
            </div>
            <h2 className="text-3xl font-bold mb-2">Login</h2>
            <p className="text-gray-600 mb-8">
              Hey, Enter your details to sign in to your account
            </p>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                {/* Set input values to state */}
                <Input
                  type="text"
                  placeholder="Username"
                  className="w-full"
                  value={username}  // Bind the input value to state
                  onChange={(e) => setUsername(e.target.value)}  // Update state on input change
                />
              </div>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Password"
                  className="w-full pr-10"
                  value={password}  // Bind the input value to state
                  onChange={(e) => setPassword(e.target.value)}  // Update state on input change
                />
                <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SignInForm
