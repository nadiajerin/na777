import Link from 'next/link'


const DepositWithdraw = () => {
  return (
    <div className=' grid grid-cols-2 gap-4 lg:gap-10 items-center text-white my-4'>
        <Link href="/deposit"  className='w-full h-[60px] lg:h-[80px] flex items-center justify-center
        bg-gradient-to-b from-[#361600] via-[#fe6702] to-[#361600] 
        '>
            <p className=' text-xs  lg:text-xl font-bold uppercase'>Deposit Now</p>
        </Link >
        {/* Grid */}
        <Link href="/withdraw" className='w-full h-[60px] lg:h-[80px] flex items-center justify-center
        bg-gradient-to-b from-[#361600] via-[#fe6702] to-[#361600]
        '>
            <p className='text-xs lg:text-xl font-bold uppercase'>Withdraw Now</p>
        </Link >
    </div>
  )
}

export default DepositWithdraw
