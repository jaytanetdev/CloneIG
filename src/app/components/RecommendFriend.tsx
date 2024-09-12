import React from 'react'

type Props = {}

const RecommendFriend = (props: Props) => {
    return (
        <div className='w-[40%]  xl:w-[30%] min-h-screen bg-black text-white lg-1160:block hidden'  >
            <div className='pl-10 xl:pl-0  w-[60%] xl:w-[270px] '>
                <div className='grid  mt-5' >
                    <div className='flex justify-between  mt-6'>
                        <div className='flex'>
                            <img src="person/tanet.png" className='rounded-full w-[50px] h-[50px]  p-[2px]' />
                            <div className=' grid items-center '>
                                <p className='text-sm pl-2'>jay_tanet</p>
                                <p className='text-sm text-gray-400 pl-2'>Jay Tanet</p>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <p className='text-sm text-blue-500 '>เปลี่ยน</p>

                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <p className='text-base pl-2 mt-5 text-gray-400'>แนะนำเพื่อนสำหรับคุณ</p>
                        <p className='text-base pl-2 mt-5 text-white-400'>ดูทั้งหมด</p>
                    </div>
                    <div className='flex justify-between  mt-3 '>
                        <div className='flex'>
                            <img src="person/pineapple.png" className='rounded-full w-[50px] h-[50px]  p-[2px]' />
                            <div className=' grid items-center '>
                                <p className='text-sm pl-2'>สับปะรด</p>
                                <p className='text-sm text-gray-400 pl-2'>แนะนำสำหรับคุณ</p>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <p className='text-sm text-blue-500 '>ติดตาม</p>

                        </div>
                    </div>
                    <div className='flex justify-between  mt-3'>
                        <div className='flex'>
                            <img src="person/makham.png" className='rounded-full w-[50px] h-[50px]  p-[2px]' />
                            <div className=' grid items-center '>
                                <p className='text-sm pl-2'>มะขาม</p>
                                <p className='text-sm text-gray-400 pl-2'>แนะนำสำหรับคุณ</p>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <p className='text-sm text-blue-500 '>ติดตาม</p>

                        </div>
                    </div>
                    <div className='flex justify-between  mt-3'>
                        <div className='flex'>
                            <img src="person/tomato.png" className='rounded-full w-[50px] h-[50px]  p-[2px]' />
                            <div className=' grid items-center '>
                                <p className='text-sm pl-2'>มะเขือเทศ</p>
                                <p className='text-sm text-gray-400 pl-2'>แนะนำสำหรับคุณ</p>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <p className='text-sm text-blue-500 '>ติดตาม</p>

                        </div>
                    </div>
                    <div className='flex justify-between  mt-3'>
                        <div className='flex'>
                            <img src="person/watermalon.png" className='rounded-full w-[50px] h-[50px]  p-[2px]' />
                            <div className=' grid items-center '>
                                <p className='text-sm pl-2'>แตงโม</p>
                                <p className='text-sm text-gray-400 pl-2'>แนะนำสำหรับคุณ</p>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <p className='text-sm text-blue-500 '>ติดตาม</p>

                        </div>
                    </div>
                    <div className='flex justify-between  mt-3'>
                        <div className='flex'>
                            <img src="person/kiwi.png" className='rounded-full w-[50px] h-[50px]  p-[2px]' />
                            <div className=' grid items-center '>
                                <p className='text-sm pl-2'>กีวี่</p>
                                <p className='text-sm text-gray-400 pl-2'>แนะนำสำหรับคุณ</p>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <p className='text-sm text-blue-500 '>ติดตาม</p>
                        </div>
                    </div>


                    <div className='mt-5'>
                        <p className='text-[0.75rem] text-gray-500'>
                            เกี่ยวกับ. ความช่วยเหลือ. ข่าวประชาสัมพันธ์.
                        </p>
                        <p className='text-[0.75rem] text-gray-500'>
                            API. งาน. ความเป็นส่วนตัว. ข้อกำหนด.
                        </p>
                        <p className='text-[0.75rem] text-gray-500'>
                            ตำแหน่ง. ภาษา. Meta Verified.
                        </p>

                        <p className='mt-5 text-[0.75rem] text-gray-500'>
                            © 2024 Instagram from Meta
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendFriend