import React, { useState } from 'react';
import General from './components/General';
import Studies from './components/Studies';
import Experience from './components/Experience';
import Output from './components/Output';

const App = () => {
  const [general, setGeneral] = useState({
    name: '',
    surname: '',
    email: '',
    number: '',
  });
  const [studies, setStudies] = useState([
    {
      school: '',
      title: '',
      date: '',
    },
  ]);
  const [experience, setExperience] = useState([
    {
      company: '',
      position: '',
      tasks: '',
      from: '',
      until: '',
    },
  ]);

  const changeGeneral = (event) => {
    const { name, value } = event.target;
    setGeneral((prev) => ({ ...prev, [name]: value }));
  };

  const changeStudies = (event) => {
    const index = parseInt(event.target.getAttribute('index'));
    const { name, value } = event.target;
    let newArray = [...studies];
    newArray[index][name] = value;
    setStudies(newArray);
  };

  const changeExperience = (event) => {
    const index = parseInt(event.target.getAttribute('index'));
    const { name, value } = event.target;
    let newArray = [...experience];
    newArray[index][name] = value;
    setExperience(newArray);
  };

  const addStudies = () => {
    setStudies((studies) => [
      ...studies,
      {
        school: '',
        title: '',
        date: '',
      },
    ]);
  };

  const addExperience = () => {
    setExperience((experience) => [
      ...experience,
      {
        company: '',
        position: '',
        tasks: '',
        from: '',
        until: '',
      },
    ]);
  };

  const removeStudies = () => {
    let newArray = [...studies];
    newArray.pop();
    setStudies(newArray);
  };

  const removeExperience = () => {
    let newArray = [...experience];
    newArray.pop();
    setExperience(newArray);
  };

  return (
    <div className="input">
      <General general={general} changeGeneral={changeGeneral} />
      <Studies studies={studies} changeStudies={changeStudies} />
      <button type="button" onClick={addStudies}>
        Add
      </button>
      {studies.length > 1 ? (
        <button type="button" onClick={removeStudies}>
          Remove
        </button>
      ) : null}
      <Experience experience={experience} changeExperience={changeExperience} />
      <button type="button" onClick={addExperience}>
        Add
      </button>
      {experience.length > 1 ? (
        <button type="button" onClick={removeExperience}>
          Remove
        </button>
      ) : null}
      <Output general={general} studies={studies} experience={experience} />
    </div>
  );
};

export default App;
