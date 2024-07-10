import Link from 'next/link'
import { TiLocation } from "react-icons/ti";
import { FaClock } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";

interface Event {
    id: number
    title: string
    location: string
    loginTime: string
    logoutTime: string
    fineAmount: number
    eventDate: string
    classes?: string
}

interface ParsedEvent extends Omit<Event, 'eventDate'> {
    eventDate: Date; // Converted to JavaScript Date object
}

const EventsCard: React.FC<{ eventData: ParsedEvent }> = ({ eventData }) => {

  return (
    <Link href={`/events/${eventData.id}`}>
      <div className="flex flex-col bg-white h-fit rounded-xl mt-4 p-4">
        <div className='flex flex-row items-center justify-between'>
          <span className="event__title">{eventData.title}</span>
          <IoIosArrowForward size={20} className='opacity-70'/>
        </div>
        <span className='text-xs font-medium mt-2 text-gray-500'>Attendees</span>
        <div className='text-xs flex flex-wrap gap-1 mt-2'>
          <span className="event__class">BSBA</span>
          <span className="event__class">BSIT</span>
          <span className="event__class">BOT</span>
          <span className="event__class">BS Info Tech</span>
          <span className="event__class">BSEd.</span>
          <span className="event__class">BSE</span>
          <span className="event__class">BSCE</span>
        </div>
        <div className="mt-5 flex flex-col">
          <div className='flex flex-row items-center gap-1 w-fit'>
            <TiLocation size={17} className='opacity-60'/>
            <span className="event__info">{eventData.location}</span>
          </div>
          <div className='flex flex-row items-center gap-2 w-fit'>
            <FaClock size={12} className='ml-[2px] opacity-60 translate-y-[1px]' />
            <div>
              <span className="event__info">{eventData.loginTime}</span>
              <span className="event__info mx-1">-</span>
              <span className="event__info">{eventData.logoutTime}</span>
            </div>
          </div>
          <div className='flex flex-row items-center gap-2 mt-1 w-fit'>
            <FaMoneyBillWave size={15} className='ml-[1px] opacity-60 translate-y-[1px]' />
            <span className="event__info">P25.00</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default EventsCard