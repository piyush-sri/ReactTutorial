import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag  dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[45px]  bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
       <FaRegFileLines />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full  left-0'>
            <div className='flex items-center justify-between  px-8 mb-5 py-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoCloseSharp />:<IoCloudDownloadOutline size=".7em" color="#fff"/>}
                
                </span>
            </div>
            {
                data.tag.isOpen && (<div className={`{
                   tag w-full py-4 ${data.tag.tagColor=== "blue" ? "bg-blue-600": "bg-green-600"} }`}>
                <h3 className='text-md font-semibold flex items-center justify-center'>{data.tag.tagTitle}</h3>
            </div>      )
}
         
        </div>
        </motion.div>
  )
}

export default Card