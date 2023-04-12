
import './App.css';

import DegreeFacts from './components/degreelist';
import DegreeId from './components/degreeid'
import Degreeadd from './components/degreecreate';
import CohortFacts from './components/cohortlist';
import CohortId from './components/cohortid';
import Cohortadd from './components/cohortcreate';
import ModulesFacts from './components/moduleslist';
import ModuleId from './components/modulesid';
import ModulecohortId from './components/modulecohort';
import Moduleadd from './components/modulecreate';
import StudentId from './components/studentid';
import Studentadd from './components/studentcreate';
import Gradeadd from './components/gradeadd';



function App() {
  return (
    
    <div className="App">
      <header className="App-header">

        <DegreeFacts/>
        <DegreeId id="COMSCI" />
        <Degreeadd/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CohortFacts/>
        <CohortId id="COMSCI1"/>
        <Cohortadd/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ModulesFacts/>
        <ModuleId id="CA298"/>
        <ModulecohortId id="COMSCI2"/>
        <Moduleadd/>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <StudentId id="26870106"/>
        <Studentadd/>
        <Gradeadd/>

        
      

      </header>
    </div>
  );
}

export default App;
