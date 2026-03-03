'use client'

import RightColumn from "@/components/homePage/RightColumn";
import MatchOverview from "@/components/homePage/matchOverview";
import { useCurrentMatch } from "@/context/EventDateContext";
import { EventAPIJson } from "@/interface/api/event";
import { extractFormDate } from "@/utils/function";
import dayjs, { Dayjs } from "dayjs";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [featuredEvent, setFeaturedEvent] = useState<EventAPIJson | null>(null)

    const pathname = usePathname()
    const pages = pathname.split('/').slice(1, pathname.split('/').length)
    let date
    if (pathname == '/ma/sl')
        date = extractFormDate(new Date())
    else
        date = extractFormDate(new Date(pages[2]))

    const { currentMatch, setCurrentMatch } = useCurrentMatch();
    useEffect(() => {
    }, [])
    const [matchesDate, setMatchesDate] = useState<Dayjs | null>(dayjs(date));


    return (
        <>
            <main className=" w-full  flex flex-col items-center justify-start bg-black b-black px-3 mb-10">
                <div className="w-full desktop:w-[1344px] tablet:w-[992px] flex space-x-0 tablet:space-x-5 ">
                    <p className=" font-bold text-sm opacity-40 my-2 text-white">
                        Jogos de futebol de hoje e resultados ao vivo
                    </p>
                </div>
                <div className="w-full max-w-[1344px] mx-auto flex items-start space-x-0 tablet:space-x-5 ">
                    <div className="MYDeg w-full tablet:w-[65%] max:w-[880px]   mb-10 tablet:mb-0 bg-[#1b2124]   rounded-2xl  px-1 ">
                        {children}
                    </div>
                    <div className=" relative w-[33%] max:w-[432px] hidden tablet:block space-y-5">
                        {
                            currentMatch ?
                                <div className="bg-[#1b2124] rounded-2xl">
                                    <MatchOverview scrollType={'1'} />
                                </div>
                                :
                                <RightColumn featuredEvent={featuredEvent} setFeaturedEvent={setFeaturedEvent} />
                        }
                    </div>
                </div>

            </main>
        </>
    );
}
