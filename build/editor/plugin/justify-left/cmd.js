/*
Copyright 2014, KISSY v1.50
MIT Licensed
build time: Feb 25 19:39
*/
/*
 Combined modules by KISSY Module Compiler: 

 editor/plugin/justify-left/cmd
*/

KISSY.add("editor/plugin/justify-left/cmd", ["../justify-cmd"], function(S, require) {
  var justifyUtils = require("../justify-cmd");
  return{init:function(editor) {
    justifyUtils.addCommand(editor, "justifyLeft", "left")
  }}
});

