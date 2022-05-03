import { Component } from 'react';
import General from './components/General';
import Studies from './components/Studies';
import Experience from './components/Experience';

export default class App extends Component {
  render() {
    return <div className="container">
      <General />
      <Studies />
      <Experience />      
    </div>;
  }
}
