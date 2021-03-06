import React, { Component } from 'react';
import Field from './Components/Field';
import Button from './Components/Button';
import { place, move, turnLeft, turnRight, report } from './Commands';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      f: 'NORTH',
      log: 'I am at (0, 0), facing NORTH'
    };
    this.update = this.update.bind(this);
    this.runCommand = this.runCommand.bind(this);
  }

  update(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  runCommand(e) {
    let dir;
    const { x, y, f } = this.state;
    switch (e.target.innerHTML) {
      case 'Place':
        const placePoint = place(x, y, f);
        this.setState({
          x: placePoint.x,
          y: placePoint.y,
          log: placePoint.log
        });
        break;
      case 'Move':
        const m = move(x, y, f);
        if (typeof m === 'string') this.setState({ log: m });
        else
          this.setState({
            x: m.x,
            y: m.y,
            log: m.log
          });
        break;
      case 'Left':
        dir = turnLeft(x, y, f);
        this.setState({ f: dir.f, log: dir.log });
        break;
      case 'Right':
        dir = turnRight(x, y, f);
        this.setState({ f: dir.f, log: dir.log });
        break;
      case 'Report':
        this.setState({ log: report(x, y, f) });
        break;
      default:
        this.setState({ log: 'Invlid command' });
        break;
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='form-field-wrap'>
          <Field type='number' label='x-position' value={this.state.x} update={this.update} />
          <Field type='number' label='y-position' value={this.state.y} update={this.update} />
          <Field type='text' label='facing' value={this.state.f} update={this.update} />
        </div>
        <div className='button-wrap'>
          <Button label='Place' click={this.runCommand} />
          <Button label='Move' click={this.runCommand} />
          <Button label='Left' click={this.runCommand} />
          <Button label='Right' click={this.runCommand} />
          <Button label='Report' click={this.runCommand} />
        </div>
        <h3>Result</h3>
        <div className='result'>{this.state.log}</div>
      </div>
    );
  }
}

export default App;
