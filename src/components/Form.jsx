import { useRef, useState } from "react"

export default function Form(){
    let formTitleRef = useRef();
    let formDescriptionRef = useRef();
    let formDateRef = useRef();

    const [kokos, setKokos] = useState([{title, description, date}])
    function sendForm() {
        setKokos(formTitleRef.current.value);
        console.log(formTitleRef.current.value)
    }
    return(
        <main className="h-screen my-8 flex gap-8">
            <div className="mt-24 text-center w-2/3">
                <form className="mt-4 text-right">
                    <button className="text-stone-700 hover:text-red-500">Cancel</button>
                    <button className="text-stone-700 hover:text-red-500" onClick={sendForm}>Save</button>
                    
                    <p className="flex flex-col gap-1 my-4">
                        <label className="text-sm font-bold uppercase text-stone-500">Title</label>
                        <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" ref={formTitleRef}/>
                    </p>
                    <p className="flex flex-col gap-1 my-4">
                        <label className="text-sm font-bold uppercase text-stone-500">Description</label>
                        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200"  ref={formDescriptionRef}/>
                    </p>
                    <p className="flex flex-col gap-1 my-4">
                        <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
                        <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="date" ref={formDateRef}/>
                    </p>
                </form>
            </div>
        </main>
    )
}