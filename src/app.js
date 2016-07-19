import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AceEditor from 'react-ace';

import 'brace';
import 'brace/mode/jsx';
import 'brace/theme/monokai';

class App extends Component {
  constructor() {
    super();

    this.state = {code: 'var a = 2;'};
  }

  onChange(code) {
    this.setState({ code });
  }

  render() {
    return (
      <div>
        <h2>Test PreactCompat and ReactAce</h2>
        <AceEditor
          mode="jsx"
          theme="monokai"
          name="jseditor"
          value={this.state.code}
          tabSize={2}
          onChange={::this.onChange}
          showPrintMargin={false}
          editorProps={{$blockScrolling: Infinity}}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
