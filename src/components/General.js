import { Component } from 'react';

export default class General extends Component {
  render() {
    const { general, changeGeneral } = this.props;

    return (
      <div className="general">
        <input
          type="text"
          placeholder="Name"
          value={general.name}
          name="name"
          onChange={changeGeneral}
        />
        <input
          type="text"
          placeholder="Surname"
          value={general.surname}
          name="surname"
          onChange={changeGeneral}
        />
        <input
          type="email"
          placeholder="Email"
          value={general.email}
          name="email"
          onChange={changeGeneral}
        />
        <input
          type="number"
          placeholder="Phone number"
          value={general.phone}
          name="number"
          onChange={changeGeneral}
        />
      </div>
    );
  }
}
