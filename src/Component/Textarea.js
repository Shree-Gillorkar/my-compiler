import React from 'react'

export default function Textarea() {

  //save file
  function save_func(){
    var query = document.getElementById("codeEditor").value;

    var data = [];
    data.push(query);

    var data_string = JSON.stringify(data);

    var file = new Blob([data_string],{type:"sql"});

    var anchor = document.createElement("a");
    anchor.href =URL.createObjectURL(file);
    anchor.download = "query.sql";
    anchor.click();
  
  }

   // run Query
   function run_query(){
    var query = document.getElementById("output").value="Query Executed Successfully!";
  
  }


  //Both Textarea components are referenced as:
  var codeEditor = document.getElementById('codeEditor');
  var lineCounter = document.getElementById('lineCounter');

//   //To synchronise the scrolling of both Textareas:
//   codeEditor.addEventListener('scroll', () => {
//     lineCounter.scrollTop = codeEditor.scrollTop;
//     lineCounter.scrollLeft = codeEditor.scrollLeft;
// });


// //To enable the ⌨ [Tab ⭾] key to be input into the code editor component:
// codeEditor.addEventListener('keydown', (e) => {
//        let { keyCode } = e;
//        let { value, selectionStart, selectionEnd } = codeEditor;
// if (keyCode === 9) {  // TAB = 9
//          e.preventDefault();
//          codeEditor.value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
//          codeEditor.setSelectionRange(selectionStart+2, selectionStart+2)
//        }
//  });

// //Finally, the code snippet to output the line counter display:
var lineCountCache = 0;
function line_counter() {
      var lineCount = codeEditor.value.split('\n').length;
      var outarr = new Array();
      if (lineCountCache != lineCount) {
         for (var x = 0; x < lineCount; x++) {
            outarr[x] = (x + 1) + '.';
         }
         lineCounter.value = outarr.join('\n');
      }
      lineCountCache = lineCount;
}//after refresh code don't work********************fix
// codeEditor.addEventListener('input', () => {
//     line_counter();
// });

  return (
  <div className="row">
    <div className="col-sm">
    {/* <h5 align="left">Input</h5> */}
    <div className="split left"><p><textarea id='lineCounter' wrap='off' readonly>1.</textarea><textarea id='codeEditor' wrap='off'></textarea></p>   </div>
    </div>
    <div className="col-sm">
      <h5 align="left">Output - </h5>
    <div ><textarea id='output' wrap='off'></textarea></div>
    <button type = "button" className="btn btn-primary mx-4"  onClick={run_query}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
  Run
    </button>
    {/* <a href="" download="query.sql"> */}
    <button  type = "button" className="btn btn-primary mx-4 my-4" onClick={save_func}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
</svg>
  Save
    </button>
    </div>
  </div>
  )
}
