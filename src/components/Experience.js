import { Component } from 'react';

export default class Experience extends Component {
  render() {
    const { experience, changeExperience } = this.props;

    return experience.map((item, index) => {
      return (
        <div className="experience">
          <input
            type="text"
            placeholder="Company name"
            value={experience[index].company}
            name="company"
            onChange={changeExperience}
            index={index}
            key={'company' + index}
          />
          <input
            type="text"
            placeholder="Position"
            value={experience[index].position}
            name="position"
            onChange={changeExperience}
            index={index}
            key={'position' + index}
          />
          <input
            type="text"
            placeholder="Tasks"
            value={experience[index].tasks}
            name="tasks"
            onChange={changeExperience}
            index={index}
            key={'tasks' + index}
          />
          <input
            type="date"
            placeholder="From"
            value={experience[index].from}
            name="from"
            onChange={changeExperience}
            index={index}
            key={'from' + index}
          />
          <input
            type="date"
            placeholder="Until"
            value={experience[index].until}
            name="until"
            onChange={changeExperience}
            index={index}
            key={'until' + index}
          />
        </div>
      );
    });
  }
}
