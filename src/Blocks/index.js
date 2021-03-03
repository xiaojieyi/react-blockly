
import Blockly from 'blockly';

// Blockly.defineBlocksWithJsonArray([{
//   "type": "graph_get_x",
//   "message0": "x",
//   "output": "Number",
//   "colour": Blockly.Msg['VARIABLES_HUE'],
//   "tooltip": Blockly.Msg['VARIABLES_GET_TOOLTIP'],
//   "helpUrl": Blockly.Msg['VARIABLES_GET_HELPURL']
// }]);

// Blockly.JavaScript['graph_get_x'] = function(block) {
//   // x variable getter.
//   return ['x', Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.defineBlocksWithJsonArray([{
//   "type": "graph_set_y",
//   "message0": "y = %1",
//   "args0": [
//     {
//       "type": "input_value",
//       "name": "VALUE",
//       "check": "Number"
//     }
//   ],
//   "colour": Blockly.Msg['VARIABLES_HUE'],
//   "tooltip": Blockly.Msg['VARIABLES_SET_TOOLTIP'],
//   "helpUrl": Blockly.Msg['VARIABLES_SET_HELPURL']
// }]);

// Blockly.JavaScript['graph_set_y'] = function(block) {
//   // y variable setter.
//   var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
//       Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
//   return 'y = ' + argument0 + ';';
// };



Blockly.Blocks['string_length'] = {
  init: function() {
    this.jsonInit({
      "message0": 'length of %1',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        }
      ],
      "output": "Number",
      // "previousStatement": null,
      // "nextStatement": null,
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};

Blockly.JavaScript['string_length'] = function(block) {
  // String or array length.
  let argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
  // return "'aaa'.length";
};
