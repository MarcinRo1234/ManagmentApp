import  Aside  from "./components/Aside.jsx";
import NewProject from "./components/NewProject.jsx";


function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside />
      <NewProject />
    </main>
  );
}

export default App;
