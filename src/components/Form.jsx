import { useRef, useState } from "react"
import Input from "./Input.jsx"

export default function Form(){
    
    return(
        <main className="h-screen my-8 flex gap-8">
            <div className="mt-24 text-center w-2/3">
                <form className="mt-4 text-right">
                    <button className="text-stone-700 hover:text-red-500">Cancel</button>
                    <button className="text-stone-700 hover:text-red-500" onClick={sendForm}>Save</button>
                    
                    <Input label="Title"/>
                    <Input label="Description" isTextArea/>
                    <Input label="Date"/>
                </form>
            </div>
        </main>
    )
}