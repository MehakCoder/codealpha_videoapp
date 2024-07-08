"use client"

import Image from "next/image"
import HomeCard from "./HomeCard"
import { useState } from "react"
import { useRouter } from "next/navigation"
import MeetingModal from "./MeetingModal"

const MeetingTypeList = () => {
    const router = useRouter();
    const[meetingState, setmeetingState] =useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
       <HomeCard 
         img="icons/add-meeting.svg"
         title="New Meeting"
         description="Start an instant meeting"
         handleClick={() => setmeetingState('isJoiningMeeting') } 
         className="bg-orange-1"
       />
       <HomeCard 
         img="icons/schedule.svg"
         title="Schedule Meeting"
         description="Plan your meeting"
         handleClick={() => setmeetingState('isScheduleMeeting') } 
         className="bg-blue-1"
       />
       <HomeCard
         img="icons/recordings.svg"
         title="View Recordings"
         description="Check out your recordings"
         handleClick={() => setmeetingState('isJoiningMeeting') } 
         className="bg-purple-1"
       />
       <HomeCard
         img="icons/join-meeting.svg"
         title="Join Meeting"
         description="via invitation link"
         handleClick={() =>  setmeetingState('isJoiningMeeting') }
         className="bg-yellow-1"
       />
        <MeetingModal />
    </section>
  )
}

export default MeetingTypeList