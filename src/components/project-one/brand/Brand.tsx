import './brand.css';
import { atlassian,google,slack,dropbox,shopify } from './imports';
const Brand = () => {
   const brands = [atlassian,google,slack,dropbox,shopify];
   return (
      <div className='gpt3__brand section__padding'>
         {
            brands.map((brand,index)=>(
               <div key={index} >
                  <img src={brand} alt={brand} />
               </div>
            ))
         }
      </div>
   )
}
export default Brand