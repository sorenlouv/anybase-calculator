import React, { Component } from 'react';
import classNames from 'classnames';
import { calc, isBaseValid, isExprValid } from './calculator';
import './App.css';

const examples = {
  2: ['100 + 11', '111 - 10'],
  8: ['10 - 1', '5 + 5', '5 * 5'],
  16: ['a * b', '1f - f']
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expr: 'a+b',
      base: 16,
      isBaseValid: true,
      isExprValid: true
    };
  }

  onChangeExpr = event => {
    const expr = event.target.value;
    this.setState({
      expr,
      isExprValid: isExprValid(expr, this.state.base)
    });
  };

  onChangeBase = event => {
    const base = event.target.value;
    this.setState({
      base,
      isBaseValid: isBaseValid(base),
      isExprValid: isExprValid(this.state.expr, base)
    });
  };

  update = (expr, base) => {
    this.setState({ expr, base });
  };

  render() {
    let result;
    try {
      result = calc(this.state.expr, this.state.base);
    } catch (e) {}

    return (
      <div className="App">
        <div className="sections">
          <section className="section-calculator">
            <div className="inputs">
              <div className="input-wrapper">
                <div className="label">Formula</div>
                <input
                  placeholder="eg. 2 + 2"
                  autoFocus="true"
                  className={classNames('expr', {
                    invalid: !this.state.isExprValid
                  })}
                  type="text"
                  onChange={this.onChangeExpr}
                  value={this.state.expr}
                />
              </div>

              <div className="input-wrapper">
                <div className="label">Base (2-36)</div>
                <input
                  placeholder="10"
                  min="2"
                  max="36"
                  className={classNames('base', {
                    invalid: !this.state.isBaseValid
                  })}
                  type="number"
                  onChange={this.onChangeBase}
                  value={this.state.base}
                />
              </div>
            </div>

            {result
              ? <div className="result-container">
                  <div className="label">Result</div>
                  <div className="value">
                    <span className="any-base">
                      {result}
                      <sub>{this.state.base}</sub>
                    </span>

                    <span className="decimal">
                      = {parseInt(result, this.state.base)}
                      <sub>10</sub>
                    </span>
                  </div>
                </div>
              : null}
          </section>

          <section className="section-examples">
            <h2>Examples</h2>
            <p className="description">
              Click the examples below to see how the calculator works
            </p>
            {Object.keys(examples).map(key => {
              const expressions = examples[key];
              return (
                <div className="example" key={key}>
                  <h4>Base {key}</h4>
                  <ul>
                    {expressions.map(expr => (
                      <li key={expr} onClick={() => this.update(expr, key)}>
                        {expr}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>
        </div>
        <div className="footer">
          Created by
          {' '}
          <a href="https://twitter.com/sqrendk">Søren Louv-Jansen</a>
          . Open-sourced on
          {' '}
          <a href="https://github.com/sqren/anybase-calculator">Github</a>
        </div>
      </div>
    );
  }
}

export default App;
