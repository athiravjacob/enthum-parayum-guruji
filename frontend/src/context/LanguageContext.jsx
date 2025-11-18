import { createContext, useContext, useState,useEffect } from "react";

const LanguageContext = createContext()

// custom hook : to access lang and toggle
export const useLang = ()=>useContext(LanguageContext)
 
// context provoder component
export const LanguageProvider = ({children})=>{
    const [lang,setLang] = useState('ml')

    //persist lang using localStorage
    useEffect(()=>{
        const saved = localStorage.getItem("guruji-lang")
        if(saved) setLang(saved)
    },[])

    //toggle lang function
    const toggle = ()=>{
        const newLang = lang === 'ml'? 'en':'ml'
        setLang(newLang)
        localStorage.setItem("guruji-lang" , newLang)
    }

    return(
        <LanguageContext.Provider value={{lang,toggle}}>
            {children}
        </LanguageContext.Provider>
    )
}