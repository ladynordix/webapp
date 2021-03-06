import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import Header from '../menu_dashboard/looper_header'

import Profile from '../../../assets/img/hero-header/profile.svg'
import Chat from '../../../assets/img/hero-header/chat.svg'
import RateLooper from '../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../assets/img/hero-header/task.svg'
import Map from '../../../assets/img/hero-header/map.svg'


const Availability = () => {
	

    const [isMon, setIsMon] = useState(false);
    const [isTue, setIsTue] = useState(false);
    const [isWed, setIsWed] = useState(false);
    const [isThu, setIsThu] = useState(false); 
    const [isFri, setIsFri] = useState(false);
    const [isSat, setisSat] = useState(false);
    const [isSun, setisSun] = useState(false);
    const [istimen, setistimen] = useState(false);
    const [istimet, setistimet] = useState(false);
    const [istimeel, setistimeel] = useState(false);
    const [istimetw, setistimetw] = useState(false);
    const [istimethi, setistimethi] = useState(false);
    const [istimefo, setistimefo] = useState(false);
    const [istimefi, setistimefi] = useState(false);
    const [istimesi, setistimesi] = useState(false);
    const [istimese, setistimese] = useState(false);
    const [istimeei, setistimeei] = useState(false);
    const [istimeni, setistimeni] = useState(false);
    const [istimetwe, setistimetwe] = useState(false);
    const [isWeekdays, setIsWeekdays] = useState(false);
    const [isWeekends, setisWeekends] = useState(false);
    const [isAllday, setisAllday] = useState(false);
	const menus = [
    {
      img: Profile,
      to: '/profile',
      text: 'Profile',
    },
    {
      img: Chat,
      to: '/chat',
      text: 'Chat',
    },
    {
      img: RateLooper,
      to: '/rate-looper',
      text: 'Rate a Looper',
    },
    {
      img: HallofFame,
      to: '/hall-of-fame',
      text: 'Hall of Fame',
    },
    {
      img: HeroLog,
      to: '/hero-log',
      text: 'My Hero Log',
    },
    {
      img: Task,
      to: '/tasks',
      text: 'My Tasks',
    },
    {
      img: Map,
      to: '/map',
      text: 'The Map',
    },
    {
      to: '/request',
      text: 'I need a Hero',
    },
  ]

    // render() {
    return (
	    
		<center>
		<div className="avail">
		
            <div className='profile-bg-availability'>
              
                <h1 className='my-availability'>My availability</h1>
                <h4 className='h4-availability'>you can select any section</h4>
            </div>
            <div className="day">
                <button className='weekdays'  id={isWeekdays? 'days-selected' : 'id-days'} onClick={() => {
                    setIsWeekdays(!isWeekdays);
                    setisWeekends(false);
                    setisSat(false);
                    setisSun(false)
                    setIsMon(true);
                    setIsTue(true);
                    setIsWed(true);
                    setIsThu(true);
                    setIsFri(true);
                }}>Weekdays</button>
                <button className='weekends' id={isWeekends? 'ends-selected': 'id-ends'}  onClick={() => {
                    setisWeekends(!isWeekends);
                    setIsWeekdays(false)
                    setisSat(!isSat);
                    setisSun(!isSun);
                    setIsMon(!isMon);
                    setIsTue(!isTue);
                    setIsWed(!isWed);
                    setIsThu(!isThu);
                    setIsFri(!isFri);
                    }}>Weekends</button> 
            </div>
            <div>
                <button className='mon' id='daily' style={{ background: isMon ? '#5FD680' : null }} onClick={()=>  {setIsMon(!isMon); setisWeekends(false); setIsWeekdays(true);  setisSat(false); setisSun(false) }}>MON</button>
                <button className='tue' id='daily' style={{ background: isTue ? '#5FD680' : null }} onClick={()=>  {setIsTue(!isTue); setisWeekends(false); setIsWeekdays(true);  setisSat(false); setisSun(false) }}>TUE</button>
                <button className='wed' id='daily' style={{ background: isWed ? '#5FD680' : null }} onClick={()=>  {setIsWed(!isWed); setisWeekends(false); setIsWeekdays(true);  setisSat(false); setisSun(false) }}>WED</button>
                <button className='thu' id='daily' style={{ background: isThu ? '#5FD680' : null }} onClick={()=>  {setIsThu(!isThu); setisWeekends(false); setIsWeekdays(true);  setisSat(false); setisSun(false) }}>THU</button>
                <button className='fri' id='daily' style={{ background: isFri ? '#5FD680' : null }} onClick={()=>  {setIsFri(!isFri); setisWeekends(false); setIsWeekdays(true);  setisSat(false); setisSun(false) }}>FRI</button>
                <button className='sat' id='daily' style={{ background: isSat ? '#5FD680' : null }} onClick={()=>  {setisSat(!isSat); setIsWeekdays(false); setisWeekends(true); setIsMon(false);setIsTue(false);setIsWed(false);setIsThu(false);setIsFri(false);}}>SAT</button>
                <button className='sun' id='daily' style={{ background: isSun ? '#5FD680' : null }} onClick={()=>  {setisSun(!isSun); setIsWeekdays(false); setisWeekends(true); setIsMon(false);setIsTue(false);setIsWed(false);setIsThu(false);setIsFri(false);}}>SUN</button>
            </div>
            <div>
                <button  className='All' id={isAllday? 'all-day-selected' : 'all-day' } onClick={() => setisAllday(!isAllday)}>All day</button>
            </div>
            <div>
                <button onClick={() => {setistimen(!istimen)}} id={istimen? 'time-selected' : 'time'} className='time_nine'>9:00-10:00</button>
                <button onClick={() => {setistimet(!istimet)}} id={istimet? 'time-selected' : 'time'} className='time_ten'>10:00-11:00</button>
                <button onClick={() => {setistimeel(!istimeel)}} id={istimeel? 'time-selected' : 'time'} className='time_eleven'>11:00-12:00</button>
                <button onClick={() => {setistimetw(!istimetw)}} id={istimetw? 'time-selected' : 'time'} className='time_twelve'>12:00-13:00</button>
                <button onClick={() => {setistimethi(!istimethi)}} id={istimethi? 'time-selected' : 'time'} className='time_thirteen'>13:00-14:00</button>
                <button onClick={() => {setistimefo(!istimefo)}} id={istimefo? 'time-selected' : 'time'} className='time_fourteen'>14:00-15:00</button>
                <button onClick={() => {setistimefi(!istimefi)}} id={istimefi? 'time-selected' : 'time'} className='time_fifteen'>15:00-16:00</button>
                <button onClick={() => {setistimesi(!istimesi)}} id={istimesi? 'time-selected' : 'time'} className='time_sixteen'>16:00-17:00</button>
                <button onClick={() => {setistimese(!istimese)}} id={istimese? 'time-selected' : 'time'} className='time_seventeen'>17:00-18:00</button>
                <button onClick={() => {setistimeei(!istimeei)}} id={istimeei? 'time-selected' : 'time'} className='time_eighteen'>18:00-19:00</button>
                <button onClick={() => {setistimeni(!istimeni)}} id={istimeni? 'time-selected' : 'time'} className='time_nineteen'>19:00-20:00</button>
                <button onClick={() => {setistimetwe(!istimetwe)}} id={istimetwe? 'time-selected' : 'time'} className='time_twenty'>20:00-21:00</button>
            </div>
            <div className='save'>
			<Link to="/looper/deliveryPayment">
                <button className='save-availability'>Next-Final Confirmation</button>
			</Link>
            </div>
			</div>
			</center>
		
	

    )
    // }
}

export default Availability