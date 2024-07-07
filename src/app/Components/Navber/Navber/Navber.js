"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { navberData } from './NavberData'
import { IoIosArrowDown } from 'react-icons/io'

export default function Navber() {

    const [hover, setHover] = useState(null)
    const [hoverTow, setHoverTow] = useState(null)

    const [tick, setTick] = useState(false)

    const [header, setHeader] = useState(false)

    const scrollHeader = () =>{
        if(window.scrollY >= 20){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", scrollHeader)

        return ()=>{
            window.addEventListener("scroll", scrollHeader)
        }
    },[])

    return (
        <div>
            <div className={header ? "fixed w-[100%] top-0 bg-blue text-white duration-300" : "bg-transparent"}>
                <div className='flex items-center justify-between w-[1100px] mx-auto h-[65px]'>
                    <div>
                        <Image src="/Images/nexzan-logo.webp" alt='Loading...' width={168} height={45} />
                    </div>
                    <ul className='flex items-center gap-6 h-[65px]'>
                        {
                            navberData.map((item, index) => (
                                <li key={index} className='group relative'
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(null)}
                                >
                                    <div className='flex items-center gap-1 h-[65px]'>
                                        <span className='cursor-pointer text-base font-semibold'>{item.title}</span>
                                        {
                                            item.menus && (
                                                <span className={`${item.menus ? "group-hover:rotate-180 duration-300" : " duration-300"}`}>
                                                    <IoIosArrowDown />
                                                </span>
                                            )
                                        }
                                    </div>
                                    {
                                        hover === index && item.menus && (
                                            <div className="relative">
                                                <div className={`size-5 rotate-45 absolute right-5 -top-2  ${tick ? "bg-[#7156F5] duration-300" : "bg-extraDarkBlue"}`}></div>
                                                <ul className='bg-extraDarkBlue absolute right-0  '>
                                                    {
                                                        item.menus?.map((menu, idx) => (
                                                            <li key={idx}
                                                            className='border-b border-b-blue-600 last:border-b-0 border-opacity-30 '
                                                                onMouseEnter={() => {setHoverTow(idx)
                                                                if(idx === 0){
                                                                    setTick(true)
                                                                }
                                                                }}
                                                                onMouseLeave={() => {setHoverTow(null)
                                                                if(idx === 0){
                                                                    setTick(false)
                                                                }
                                                                }}
                                                            >
                                                                <span className='text-[14px] text-[#D1D1D1] font-medium px-5 h-[43px] whitespace-nowrap  fuchsiaBlue flex items-center leading-[26px] duration-75 cursor-pointer'>{menu.title}</span>
                                                                {
                                                                    hoverTow === idx && menu.submenus && (
                                                                        <ul className='bg-extraDarkBlue absolute left-[100%] top-[42.8px]'>
                                                                            {
                                                                                menu.submenus?.map((submenu, ide) => (
                                                                                    <li key={ide}>
                                                                                        <span className='text-[14px] items-center flex text-[#D1D1D1] font-medium px-5 h-[43px] whitespace-nowrap hover:bg-[#7156F5] cursor-pointer  duration-75'>{submenu.title}</span>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    )
                                                                }
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
