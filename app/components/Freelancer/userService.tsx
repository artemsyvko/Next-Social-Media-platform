"use client"
import Head from 'next/head';
import ServiceCard from './serviceCard';
import RequestModal from './RequestModal';
import { useState } from 'react';

const services = [
    {
        title: 'Organic Social Promotions',
        description: 'I will increase instagram followers and grow organic engagement',
        price: 'From €215 / project',
        rating: 4.9,
        reviews: 66,
        imageUrl: 'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/155398405/original/3e4c7fdbfa7210e2f8a4d6612ae9d83f2e23bcf9.png'
    },
    {
        title: 'Analytics & Tracking',
        description: 'I will remove bot and clean up instagram ghost followers',
        price: 'From €113 / project',
        rating: 5.0,
        reviews: 407,
        imageUrl: 'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/155398405/original/3e4c7fdbfa7210e2f8a4d6612ae9d83f2e23bcf9.png'
    },
    {
        title: 'Analytics & Tracking',
        description: 'I will unfollow on instagram and normalize number of your following',
        price: 'From €98 / project',
        rating: 5.0,
        reviews: 17,
        imageUrl: 'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/206773320/original/801f9d82824ea2ccdf13b78729c479376d7e38a5.png'
    },
    {
        title: 'Digital Marketing',
        description: 'I will make a list of your instagram ghost and fake followers so you can remove them',
        price: 'From €34 / project',
        rating: 5.0,
        reviews: 10,
        imageUrl: 'https://fiverr-res.cloudinary.com/video/upload/so_5.836217,t_gig_cards_web/seokwuld9e8uba3d5ta3.png'
    },
];

export default function Home() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className='bg-white'>
                <Head>
                    <title>My Services</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="py-10 bg-gray-100 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-2xl font-bold mb-8">See my services</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    title={service.title}
                                    description={service.description}
                                    price={service.price}
                                    rating={service.rating}
                                    reviews={service.reviews}
                                    imageUrl={service.imageUrl}
                                />
                            ))}
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden border shadow-lg">
                                <div className='w-full flex items-center'>
                                    <div className="w-full py-4 flex px-4 items-center">
                                        <p className="text-gray-600 mt-2 text-base font-bold">Need a custom offer? <br /> Tell Brian ANd Dee what you need.</p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center'>
                                    <div className="w-full py-2 flex px-4 items-center">
                                        <p className="text-gray-600 text-sm font-bold">Organic Social Promotions</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-full p-2 justify-end mt-2">
                                    <a className="p-1 border border-gray-600 rounded cursor-pointer text-xs" onClick={() => setIsOpen(true)}>Request a quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <RequestModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
