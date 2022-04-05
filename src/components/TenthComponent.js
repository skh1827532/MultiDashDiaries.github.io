import React from 'react'
import logoImg from '../AssetsTen/logo.svg'
export default function TenthComponent() {
  return (
    <>
    <div className='flex flex-col bg-[#374151] items-center justify-center'>
        <img src={logoImg} className="w-[86px] h-[53px] my-2" alt="" />
        <p className="text-[#9CA3AF] text-[14px]">© 2020 Tailwind UI Kit. All rights reserved.</p>

    </div>
    </>
  )
}
