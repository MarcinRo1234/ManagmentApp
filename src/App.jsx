import { useState } from "react";

import  Aside  from "./components/Aside.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";


function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []

  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside onStartAddProject={handleStartAddProject} />
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    </main>
  );
}

export default App;
