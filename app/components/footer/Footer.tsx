import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
const Footer = () => {
  return (
    <div className='absolute'>
        <div>

        </div>
        <div className='felx justify-between'>
            <p className='text-[8px] text-gray-600' >2020 Africa to Silicon Valley, Inc. All right reserved</p>
            <div className='flex gap-3 justify-evenly'>
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
