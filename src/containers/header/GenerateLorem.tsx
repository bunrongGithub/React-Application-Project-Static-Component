import { useEffect, useState } from 'react'
import { loremIpsum } from 'lorem-ipsum'
interface Props{
   numtext:number,
}
function generateLoremIpsum({numtext}:Props){
   const [text,setText] = useState('');
   useEffect(()=>{
      setText(loremIpsum({count:numtext,units:'words'}));
   },[numtext])
   return text;
}
export default generateLoremIpsum;