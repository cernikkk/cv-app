import { Component } from 'react';

export default class Output extends Component {
  render() {
    const { general, studies, experience } = this.props;

    return (
      <div className="output">
        <div className="general">
          <div>{general.name}</div>
          <div>{general.surname}</div>
          <div>{general.email}</div>
          <div>{general.number}</div>
        </div>
        {studies.map((item, index) => {
          return (
            <div className="studies">
              <div key={'school-o' + index}>{studies[index].school}</div>
              <div key={'title-o' + index}>{studies[index].title}</div>
              <div key={'date-o' + index}>{studies[index].date}</div>
            </div>
          );
        })}
        {experience.map((item, index) => {
          return (
            <div className="experience">
              <div key={'company-o' + index}>{experience[index].company}</div>
              <div key={'position-o' + index}>{experience[index].position}</div>
              <div key={'tasks-o' + index}>{experience[index].tasks}</div>
              <div key={'from-o' + index}>{experience[index].from}</div>
              <div key={'until-o' + index}>{experience[index].until}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
