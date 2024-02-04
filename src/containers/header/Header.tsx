import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import generateLoremIpsum from './GenerateLorem';
import { useEffect, useState } from 'react';
const peopleText = ` people requested access a visit in last `;
const headerText = `Let's Build Something amazing with GPT3 OpentAI`;

const Header = () => {
   const loremText = generateLoremIpsum({numtext:30});
   const [peopleCount,setPeopleCount] = useState(0);
   const [hourCount,setHourCount] = useState(0);
   const [buttonText,setButtonText] = useState("Get Started")
   useEffect(()=>{
      const randomHours = Math.floor(Math.random() * 24) + 1;
      setHourCount(randomHours);
   },[])
   useEffect(()=>{
      const randomCount = Math.floor(Math.random() * 1001) + 1000;
      setPeopleCount(randomCount)
   },[]);
   const handleButtonClick = ()=>{
      setButtonText("Start")
   }
   return (
      <div className='gpt3_header section__padding' id='home' >
         <div className='gpt3_header-content'>
            <h1 className="gradient__text">{headerText}</h1>
            <p>
               {loremText}
            </p>
            <div className="gpt3_header-content__input">
               <input type='email' placeholder='your email address' />
               <button onClick={handleButtonClick} type='button'>{buttonText}</button>
            </div>
            <div className="gpt3__header-content__people">
               <img src={people} alt='people' />
               <p>{peopleCount}{peopleText} {hourCount} hours.</p>
            </div>
         </div>
         <div className="gpt3__header-image">
            <img src={ai} alt="ai" />
         </div>
      </div>
   )
}

export default Header