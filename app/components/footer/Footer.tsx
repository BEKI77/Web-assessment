import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full'>
        <div>
        </div>
        <div className='flex justify-between h-8'>

            <p className='text-[8px] text-gray-600' >2020 Africa to Silicon Valley, Inc. All right reserved</p>
            <div className='flex gap-3 justify-evenly left-0 w-1/3'>
                <TiSocialTwitter size={20} />
                <TiSocialFacebookCircular size={20} />
                <TiSocialYoutube size={20} />
                <SlSocialLinkedin size={20} />
            </div>
        </div>
    </div>
  )
}

export default Footer
