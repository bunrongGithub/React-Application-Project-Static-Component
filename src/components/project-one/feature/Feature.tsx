import React from 'react'
import './feature.css'
interface Props{
   titile:string,
   text:string,
}
const Feature = ({titile,text}:Props) => {
   return (
      <div className='gpt3__features-container__feature' >
         <div className="gpt3__features-container__feature-title">
            <div/>
            <h1>{titile}</h1>
         </div>
         <div className='gpt3__features-container_feature-text'>
            <p>
               {text}
            </p>
         </div>
      </div>
   )
}
export default Feature