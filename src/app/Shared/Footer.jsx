import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer className="bg-black text-gray-400 text-sm py-8 px-4">
                <div className="container mx-auto">
                    {/* Payment Methods */}
                    <div className="mb-6">
                        <h3 className="text-orange-500 font-bold">Payment Methods</h3>
                        <div className="flex flex-wrap gap-4 mt-2 opacity-40">
                            {/* Payment icons */}
                            <Image className='w-16 h-10' src={"/pay/pay16.png"} width={500} height={500} alt='Image' />
                            <Image className='w-16 h-10' src={"/pay/pay22.png"} width={500} height={500} alt='Image' />
                            <Image className='w-16 h-10' src={"/pay/pay33.png"} width={500} height={500} alt='Image' />
                            <Image className='w-16 h-10' src={"/pay/pay34.png"} width={500} height={500} alt='Image' />
                            <Image className='w-16 h-10' src={"/pay/pay45.png"} width={500} height={500} alt='Image' />
                            <Image className='w-16 h-10' src={"/pay/pay48.png"} width={500} height={500} alt='Image' />
                        </div>
                    </div>

                    {/* Responsible Gaming */}
                    <div className="mb-6">
                        <h3 className="text-orange-500 font-bold">Responsible Gaming</h3>
                        <div className="flex gap-4 mt-2 opacity-40">
                        <Image className='w-16 h-10' src={"/pay/pp.png"} width={500} height={500} alt='Image' />
                          
                        </div>
                    </div>

                    {/* Gaming License */}
                    <div className="mt-6 flex flex-col md:flex-row justify-between">
                        <div>
                            <h3 className="text-orange-500 font-bold">Gaming License</h3>
                            <div className="flex gap-4 mt-2">
                            <Image className='w-16 h-10' src={"/pay/gaming_license.png"} width={500} height={500} alt='Image' />
                          
                            </div>
                        </div>
                    </div>

                    {/* Copyright & Branding */}
                    <div className="mt-6  border-t border-gray-600 pt-4">
                        <h3 className="text-orange-500 font-bold">Best Quality Platform</h3>
                        <p>© 2025 BGB Copyrights. All Rights Reserved</p>
                    </div>

                    {/* Description */}
                    <div className="mt-6 ">
                        <h3 className="text-orange-500 font-bold text-lg">N/A 777 – Bangladesh’s Top Choice for Betting & Casino</h3>
                        <p className="mt-2  mx-auto text-left text-white">
                            If you are still unaware of N/A 777, you are losing out on one of the greatest online casino and sports betting platforms that Bangladesh has to offer right now. An Asian business that runs several significant worldwide online gaming platforms owns N/A 777. Because the government of Curacao has granted the organization a license, our games can be played on a secure and dependable website.

                            The core components of the Bengalbet online gaming experience are the privacy and safety of our environment as well as the quality of our products. To ensure an entirely safe and rational online gambling experience, we continually assess our games and procedures and employ the most advanced security measures obtainable. We preserve the secrecy of all your information and we will not sell or share it with outside parties unless it is necessary to comply with our privacy policy.

                            <br /><br /> N/A 777 boasts thousands of daily users, and if there is one thing that is added to its admiration, it is its bonuses and promotions, which offer fantastic chances to both new and returning clients.

                            For sports betting, N/A 777 sportsbook offers a fantastic selection of nearly 20 sports, with football, tennis, basketball, volleyball, and many more standing out among them. Naturally, as we are in the year of major contests like the BPL and T20, we will be able to use our predictions to watch the national teams of each nation compete in these international championships.

                            Yet, when it comes to the casino collection, this website caters hundreds of games from some of the topmost creators in the business, like Microgaming, NetEnt, iSoftbet, and others. There are many diverse kinds of slots, some with huge payouts, along with table games, Live Roulette, Poker, Blackjack, and other games.

                            Finally, Bengalbet offers numerous promos for every component of its website, as can be observed by visiting that page. We may therefore assert that this is one of the pages with the highest quantity and caliber of offers. It is advised that you frequently check the promotions section because it is updated and changes frequently.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
  )
}

export default Footer
