import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Story from '@/components/Story';
type Props = {

}

const Content = ({ }: Props) => {
    return (
        <div className=' min-h-screen w-[100%] lg-1160:w-[55%] bg-black text-white '>
            <div className='w-100% md:w-90% ml-auto  '>
                <div className='pt-[20px] flex justify-center '> 
                    <div className='w-full md-777:max-w-[600px] max-w-[auto]  '> 
                        <Story />
                    </div>
                </div>

                <div className='grid justify-center text-center mt-5  ' >
                    <div className='flex justify-between'>
                        <div className='flex cursor-pointer '>
                            <div className='bg-red-500 rounded-full  p-[2px] '>
                                <div className='bg-black rounded-full '>
                                    <img src="person/kaijeaw.png" className='rounded-full w-[40px] h-[40px]  p-[2px]' />
                                </div>
                            </div>
                            <div className='ml-2 flex items-center'>
                                <p className='text-base'>ไข่เจียว</p>
                            </div>
                        </div>
                        <div className=' flex items-center cursor-pointer '>
                            <img src="icon/jud.png" className='ml-2 w-[30px]' />
                        </div>
                    </div>
                    <div className='mt-1 '>
                        <img src="content/kubtun.jpg" className='w-[350px] h-[450px]  p-[2px]' />
                    </div>
                    <div className='mt-2 flex justify-between cursor-pointer'>
                        <div className='flex'>
                            <FontAwesomeIcon className='size-5' icon={faHeart} />
                            <img src="icon/messessge.png" className='ml-2 w-[30px]' />
                            <img src="icon/share.png" className=' w-[30px]' />
                        </div>
                        <div>
                            <img src="icon/save.png" className='ml-2 w-[30px]' />
                        </div>
                    </div>
                    <div className='grid text-left'>
                        <p>ถูกใจ 9,500 คน</p>
                        <p>ไข่เจียว Welcome to Avanger Captain America </p>
                        <p className='text-gray-400 cursor-pointer'>...เพิ่มเติม</p>
                        <p className='text-gray-400 cursor-pointer'>ดูความคิดเห็น 10 รายการ</p>
                        <p className='text-gray-400 cursor-pointer'>เพิ่มความคิดเห็น</p>
                    </div>
                </div>








                <div className='grid justify-center text-center mt-5 mb-10 ' >
                    <div className='flex justify-between'>
                        <div className='flex cursor-pointer '>
                            <div className='bg-red-500 rounded-full  p-[2px] '>
                                <div className='bg-black rounded-full '>
                                    <img src="person/kaijeaw.png" className='rounded-full w-[40px] h-[40px]  p-[2px]' />
                                </div>
                            </div>
                            <div className='ml-2 flex items-center'>
                                <p className='text-base'>ไข่เจียว</p>
                            </div>
                        </div>
                        <div className=' flex items-center cursor-pointer '>
                            <img src="icon/jud.png" className='ml-2 w-[30px]' />
                        </div>
                    </div>
                    <div className='mt-1 '>
                        <img src="content/ironman.jpg" className='w-[350px] h-[450px]  p-[2px]' />
                    </div>
                    <div className='mt-2 flex justify-between cursor-pointer'>
                        <div className='flex'>
                            <FontAwesomeIcon className='size-5' icon={faHeart} />
                            <img src="icon/messessge.png" className='ml-2 w-[30px]' />
                            <img src="icon/share.png" className=' w-[30px]' />
                        </div>
                        <div>
                            <img src="icon/save.png" className='ml-2 w-[30px]' />
                        </div>
                    </div>
                    <div className='grid text-left'>
                        <p>ถูกใจ 1,153,500 คน</p>
                        <p>ไข่เจียว Welcome to Avanger Iron Man</p>
                        <p className='text-gray-400 cursor-pointer'>...เพิ่มเติม</p>
                        <p className='text-gray-400 cursor-pointer'>ดูความคิดเห็น 10 รายการ</p>
                        <p className='text-gray-400 cursor-pointer'>เพิ่มความคิดเห็น</p>
                    </div>
                </div>







            </div>
        </div >
    )
}


export default Content