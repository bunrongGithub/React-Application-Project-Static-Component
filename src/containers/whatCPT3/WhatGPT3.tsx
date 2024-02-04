import { Feature } from '../../components/project-one'
import './whatGPT3.css'
import generateLoremIpsum from '../header/GenerateLorem'
const WhatGPT3 = () => {
   return (
      <div className='gpt3__whatgpt3 section__margin section__padding ' id='wgpt3'>
         <div className='gpt3_whatgpt3-feature' >
            <Feature titile='What is GPT3' text={generateLoremIpsum({numtext:40})} />
         </div>
         <div className='gpt3__whatgpt3-heading'>
            <h1 className='gradient__text'>
               The Possibility are beyond your imagination
            </h1>
            <p>Explore The Library</p>
         </div>
         <div className="gpt3__whatgpt3-container">
            <Feature titile='Chatboxs' text={generateLoremIpsum({numtext:20})} />
            <Feature titile='Knowledgebase' text={generateLoremIpsum({numtext:20})} />
            <Feature titile='Educations' text={generateLoremIpsum({numtext:20})} />
         </div>
      </div>
   )
}

export default WhatGPT3