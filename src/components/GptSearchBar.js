import React from 'react'
import { useSelector } from 'react-redux'
import language from '../utils/langConstant';

function GptSearchBar() {
    const configLanguageKey = useSelector((store)=>store.config.language);
   
  return (
    
    <div className='pt-[5%] flex justify-center '>
        <from className="w-1/2 bg-black grid grid-cols-12">
            <input type='text' className='p-4 m-4 col-span-9' placeholder={language[configLanguageKey].getSearchPlaceholder}/>
            <button className='py-2 px-4 bg-red-400 text-white rounded-lg col-span-2'>{language[configLanguageKey].search}</button>
        </from>
    </div>
  )
}

export default GptSearchBar