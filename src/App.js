import { useState } from 'react';
import './App.css';
import { data } from './data';
import Explanation from './Explanation';

function App() {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [exactproject, setExactProject] = useState(null);

  const handleClick = () => {
    const foundProject = data.find((project) => project.id.toString() === name.toString());
    if (foundProject) {
      setExactProject(foundProject);
      setOpen(true);
    }
  };

  return (
    <div className="App">
      <div className='project'>
        <h1 className='project__title'>
          652A2 Sərbəst İş Generator
        </h1>
        <input type="text" className='project__input' placeholder='jurnaldakı sıranı yaz' onChange={e => setName(e.target.value)}/>
        <button onClick={handleClick}>Sərbəst işi götür</button>
        {open && <Explanation exactproject={exactproject} />}
        <h5>By Mirtiz &copy;2023</h5>
      </div>
    </div>
  );
}

export default App;
