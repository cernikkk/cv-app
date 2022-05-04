import { Component } from 'react';

export default class Studies extends Component {
  render() {
    const { studies, changeStudies } = this.props;

    return studies.map((item, index) => {
      return (
        <div className="studies">
          <input
            type="text"
            placeholder="School name"
            value={studies[index].school}
            name="school"
            onChange={changeStudies}
            index={index}
            key={'school' + index}
          />
          <input
            type="text"
            placeholder="Title"
            value={studies[index].title}
            name="title"
            onChange={changeStudies}
            index={index}
            key={'title' + index}
          />
          <input
            type="date"
            placeholder="Date"
            value={studies[index].date}
            name="date"
            onChange={changeStudies}
            index={index}
            key={'date' + index}
          />
        </div>
      );
    });
  }
}
