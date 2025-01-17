"use client"
import { FC, useState } from "react";
import Pagination from "../pagination";
import { userReviewData, sellerResponseData } from "@/app/data/Freelancer/freelancerData";

type Date = {
    year: number,
    month: number,
    day: number
}

type UserReview = {
    id: number,
    useravatar: string,
    username: string,
    countryflag: string
    country: string
    date: Date
    title: string;
    content: string
}

type SellerResponse = {
    id: number
    username: string
    title: string
    content: string
    parentID: number
}

const ReviewCard: FC = () => {

    const [reviewMark, setReviewMark] = useState<string>("");
    const [showAll, setShowAll] = useState<boolean>(false);
    const [reviewID, setReviewID] = useState(-1);

    const date = new Date();

    const [userReview, setUserReview] = useState<UserReview[]>(userReviewData)

    const [sellerResponse, setSellerResponse] = useState<SellerResponse[]>(sellerResponseData)

    const handleSetReviewMark = (mark: string, id: number) => {
        setReviewID(id);
        setReviewMark(mark);
    }

    const handleSetShowAll = (id: number) => {
        if (id === reviewID) setShowAll(false);
        else {
            setReviewID(id);
            setShowAll(true);
        }
    }

    return (
        <>
            <div className="mx-auto max-w-screen-xl lg:px-4 md:px-4 sm:px-0 px-0 w-full flex items-center lg:mt-4 md:mt-14 sm:mt-20 mt-0 flex-col">
                {
                    userReview.map((userervew) => (
                        <div className="flex items-start lg:flex-row md:flex-row sm:flex-col flex-col gap-4 mt-2 border-b py-4" key={userervew.id}>
                            <div className="flex-shrink-0">
                                <div className="inline-block relative px-2">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src={userervew.useravatar} alt="Profile picture" />
                                        <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 lg:w-[70%] md:w-[80%] sm:w-full w-full">
                                <p className="flex items-baseline">
                                    <span className="text-gray-600 font-bold">{userervew.username}</span>
                                </p>
                                <p className="flex items-center mt-2">
                                    <img src={userervew.countryflag} alt="" className="w-6 h-4" />
                                    <span className="text-gray-600 text-sm ml-2">{userervew.country}</span>
                                </p>
                                <div className="flex items-center mt-4 text-gray-600">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        </div>
                                        <span className="text-sm px-2">{date.getMonth() - userervew.date.month} month ago</span>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <span className="font-bold">{userervew.title}</span>
                                    <p className="mt-1">{userervew.content}</p>
                                </div>
                                <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                                    <div className="flex items-center">
                                        <span>Helplful?</span>
                                        <button className="flex items-center ml-6" onClick={() => handleSetReviewMark("Yes", userervew.id)}>
                                            <svg className={`w-3 h-3 ${reviewMark === "Yes" && reviewID === userervew.id ? "text-blue-600" : "text-black"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                                            </svg>
                                            <span className={`ml-2 ${reviewMark === "Yes" && reviewID === userervew.id ? "text-blue-600" : "text-black"}`}>56</span>
                                        </button>
                                        <button className="flex items-center ml-4" onClick={() => handleSetReviewMark("No", userervew.id)}>
                                            <svg className={`w-3 h-3 ${reviewMark === "No" && reviewID === userervew.id ? "text-red-600" : "text-black"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" /></svg>
                                            <span className={`ml-2 ${reviewMark === "No" && reviewID === userervew.id ? "text-red-600" : "text-black"}`}>10</span>
                                        </button>
                                        <span className={`text-xs ml-4 ${reviewMark === "Yes" && reviewID === userervew.id ? "" : "hidden"}`}>You found this review helpful</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center justify-between mt-4 text-sm text-gray-600 fill-current">
                                    {
                                        <>
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 rounded-full flex justify-center items-center" style={{ "fontSize": "32px", "backgroundColor": "rgb(227, 118, 39)" }}>
                                                    <span className="text-white text-sm">H</span>
                                                </div>
                                                <div className="flex justify-center items-center px-4">
                                                    <span className="text-black text-sm font-bold">{sellerResponse.find((seller => seller.parentID === userervew.id))?.title}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-center items-center px-12 py-4">
                                                    {
                                                        showAll && reviewID === userervew.id ? (
                                                            <span className="text-black text-sm">{sellerResponse.find((seller => seller.parentID === userervew.id))?.content} <a className="cursor-pointer border-b border-blue-600 font-bold text-blue-600" onClick={() => handleSetShowAll(userervew.id)}>See Less</a></span>
                                                        ) : (
                                                            <span className="text-black text-sm">{sellerResponse.find((seller => seller.parentID === userervew.id))?.content.substring(0, 100) + "..."} <a className="cursor-pointer border-b border-blue-600 font-bold text-blue-600" onClick={() => handleSetShowAll(userervew.id)}>See more</a></span>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="lg:w-[30%] md:w-[30%] sm:w-full w-full h-full flex flex-col justify-center items-center px-4">
                                <div className="py-4 w-full flex items-center">
                                    <span className="font-bold text-sm text-gray-500">Ordered:</span>
                                </div>
                                <a className="flex items-center w-full cursor-pointer border shadow-lg">
                                    <div className="flex p-4">
                                        <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155398405/original/3e4c7fdbfa7210e2f8a4d6612ae9d83f2e23bcf9.png" className="w-36 rounded" alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="font-bold text-sm">Analytics & Tracking</span>
                                        <span className="text-sm py-2">From €112.61</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Pagination />
        </>
    )
}

export default ReviewCard;