export default function Aside() {
    const [clicker, setClicker] = useState(false);
    let defaultScreen = <div className="mt-24 text-center w-2/3">
    <img className="w-16 h-16 object-contain mx-auto" />
    <h2 className="text-xl font-bold text-stone-700 my-4">No project selected</h2>
    <p className="text-stone-800 my-4">Select a project or get started with a new one</p>
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleClick}>Create new Project</button>
</div>
    function handleClick() {
        setClicker(true)
    }
    if(clicker) {
        defaultScreen = (<Form />)
    }
    return(
        <>
            <main className="h-screen my-8 flex gap-8">
                <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                    <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">your projects</h2>
                    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleClick}>+ add project</button>
                    <ul className="mt-8"></ul>
                </aside>
                {defaultScreen}
            </main>
            
        </>
    )
}