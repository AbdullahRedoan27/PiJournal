import { useEffect } from "react"

const useTitleHook = title =>{
    useEffect(()=>{
        document.title = `${title} - PiJournal`
    },[title])
}

export default useTitleHook;