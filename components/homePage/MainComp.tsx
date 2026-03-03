import React, { useEffect, useRef, useState } from 'react'
import { Switch } from '@nextui-org/react'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/pt-br'
import AllMatch from './allMatch'
import { MatchDetailsAPIJson } from '@/interface/api/matchs'
import { useCurrentMatch } from '@/context/EventDateContext'
import { extractFormDate } from '@/utils/function'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { Image } from '@nextui-org/react'

const MainComp = ({ matchesDate, setMatchesDate }: { matchesDate: Dayjs | null, setMatchesDate?: any }) => {
    const [allOrLive, setAllOrLive] = useState('all')
    const [waitdata, setWaitdata] = useState(false)
    const [matchs, setMatchs] = useState<Array<MatchDetailsAPIJson>>([])
    const elementRef = useRef<any>(null);
    const { currentMatch, setCurrentMatch } = useCurrentMatch();
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('Todos');

    useEffect(() => {
        (
            async () => {
                try {
                    if (matchesDate == null)
                        return
                    setMatchs([])
                    setWaitdata(false)
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/sport/football/scheduled-events/${extractFormDate(matchesDate.toDate())}`, {});
                    if (response.ok) {
                        const data = await response.json()
                        const events: MatchDetailsAPIJson[] = (data.events as MatchDetailsAPIJson[]).filter(item => moment((item.startTimestamp + (moment().utcOffset() * 60)) * 1000).isSame(matchesDate.toString(), 'day'))
                        setMatchs(events)
                        setWaitdata(true)
                    }
                } catch (error) {

                }
            }
        )()
    }, [matchesDate])

    const handleDateChange = (direction: 'prev' | 'next') => {
        if (!matchesDate) return;
        const newDate = direction === 'prev' ? matchesDate.subtract(1, 'day') : matchesDate.add(1, 'day');
        if (setMatchesDate) setMatchesDate(newDate);
        router.push(`/ma/sl/${extractFormDate(newDate.toDate())}`);
    }

    return (
        <div >
            <div className="flex justify-between items-center px-4 py-3 bg-[#1b2124] text-white rounded-t-2xl">
                <div className="flex space-x-6 text-sm font-medium">
                    {['Todos', 'Favoritos', 'Competições'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'} pb-1 transition-colors`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex items-center bg-[#2c333a] rounded-full px-3 py-1 space-x-2">
                    <button onClick={() => handleDateChange('prev')} className="text-gray-400 hover:text-white">
                        <Image src="/image/arraw-white.svg" width={10} height={10} className="rotate-90" alt="prev" />
                    </button>
                    <span className="mx-2 text-sm font-bold capitalize cursor-pointer" onClick={() => {
                        if (setMatchesDate) setMatchesDate(dayjs(new Date()));
                        router.push(`/ma/sl/${extractFormDate(new Date())}`);
                    }}>
                        {matchesDate?.isSame(dayjs(), 'day') ? 'Hoje' : matchesDate?.format('DD MMM')}
                    </span>
                    <button onClick={() => handleDateChange('next')} className="text-gray-400 hover:text-white">
                        <Image src="/image/arraw-white.svg" width={10} height={10} className="-rotate-90" alt="next" />
                    </button>
                </div>
            </div>
            <div ref={elementRef}>

                {
                    allOrLive == 'all' ?
                        <AllMatch matchs={matchs} setMatchs={setMatchs} currentMatch={currentMatch} setCurrentMatch={setCurrentMatch} matchesDate={matchesDate} waitdata={waitdata} />
                        :
                        <div className="w-full bg-[#1b2124] text-white">
                            <div className="p-4 font-bold opacity-65">
                                Pinned Leagues
                            </div>
                        </div >

                }
            </div>
        </div>
    )
}

export default MainComp


