import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSearch, faVideo, faComments, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faHeart, faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
type Props = {}

const SideBar = ({ }: Props) => {
  return (

    <div className='hidden md:block md:w-auto 
     xl:w-[15%] h-[100vh] bg-black text-white 
    md:grid justify-between 
    border-e-gray-800 border-r-[0.5px] sticky top-0' >
      <div  >
        <div >
          <p className='text-base p-6 hidden xl:block'>  <img src="logo/instagram.png" className='w-[100px]' /></p>
          <p className='text-base p-6  xl:hidden'>
            <FontAwesomeIcon className=' size-5' icon={faInstagram} />
          </p>
        </div>
        <div className='flex  pl-6 pt-2 pb-3 '>
          <FontAwesomeIcon className='size-5' icon={faHouse} />
          <p className='pl-3 text-base  hidden xl:block'>  หน้าหลัก</p>
        </div>
        <div className='flex pl-6 pt-3 pb-3 '>
          <FontAwesomeIcon className='size-5' icon={faSearch} />
          <p className='pl-3 text-base hidden xl:block'>ค้นหา</p>
        </div>
        <div className='flex pl-6 pt-3 pb-3 '>
          <FontAwesomeIcon className='size-5' icon={faCompass} />
          <p className='pl-3 text-base hidden xl:block'>สำรวจ</p>
        </div>
        <div className='flex pl-6 pt-3 pb-3 '>
          <FontAwesomeIcon className='size-5' icon={faVideo} />
          <p className='pl-3 text-base hidden xl:block'>Reels</p>
        </div>
        <div className='flex pl-6 pt-3 pb-3 '>
          <FontAwesomeIcon className='size-5' icon={faComments} />
          <p className='pl-3 text-base hidden xl:block'>ข้อความ</p>
        </div>
        <div className='flex pl-6 pt-3 pb-3 '>
          <FontAwesomeIcon className='size-5' icon={faHeart} />
          <p className='pl-3 text-base hidden xl:block'>การแจ้งเตือน</p>
        </div>
        <div className='flex pl-6 pt-3 pb-3 '>
          <FontAwesomeIcon className='size-5' icon={faPlusSquare} />
          <p className='pl-3 text-base hidden xl:block'>สร้าง</p>
        </div>
        <div className='flex pl-6 pt-3 pb-3 '>
          <FontAwesomeIcon className='size-5' icon={faUser} />
          <p className='pl-3 text-base hidden xl:block'>โปรไฟล์</p>
        </div>

      </div>
      <div className='mt-auto'>
        <div className='flex pl-5 pt-3 pb-3 '>
          <img src="icon/threads.png" className='size-7' alt="Threads" />
          <p className='pl-2 text-base hidden xl:block'>Threads</p>
        </div>
        <div className='flex pl-6 pt-3 pb-3 '>
          <FontAwesomeIcon className='size-5' icon={faBars} />
          <p className='pl-3 text-base hidden xl:block'>เพิ่มเติม</p>
        </div>
      </div>
    </div>

  )
}


export default SideBar