import './App.css';
import React from "react";
import Blockly from 'blockly';
import './Blocks';

class App extends React.Component {

  componentDidMount() {
    var blocklyDiv = document.getElementById('blocklyDiv');

    var workspace = Blockly.inject(blocklyDiv,
        {toolbox: document.getElementById('toolbox'),
      // zoom: {
      //   controls: true,
      //   wheel: true,
      //   startScale: 1.0,
      //   maxScale: 3,
      //   minScale: 0.3,
      //   scaleSpeed: 1.2
      // }
    });

    let code = '';
    workspace.addChangeListener(() => {
      code = Blockly.JavaScript.workspaceToCode(workspace);
    });
    
  }


  render() {
    return (
      <div className="App">
        <div id="blocklyDiv" style={{ height: '600px', width: '800px' }}></div>

        {/* <textarea id="code" style={{ height: '200px', width: '400px' }} value=""></textarea> */}

        <xml id="toolbox" style={{ display: 'none' }}>
          
     
          <category name="Control" colour="210">
            <block type="string_length"></block>
            <block type="controls_if"></block>
            <block type="controls_whileUntil"></block>
            <block type="controls_for"></block>
          </category>
          <category name="Logic" colour="120">
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_boolean"></block>
          </category>
        </xml>
      </div>
    );
  }
}

export default App;
