let buildingdp = document.getElementById('buildingGrp');
let sel_bldgopt = document.getElementById('buildingGrp').childNodes;
let new_bldg = document.getElementById('new-bldg');
let sel_bchild = document.getElementById('new-building'); 
let bldg_default = document.getElementById('bldg-default');
let fldp = document.getElementById('flGrp');
let select_flopt = document.getElementById('flGrp').childNodes;

buildingdp.addEventListener('change', (e)=>{
    console.log("test");
   let new_bldg = document.getElementById('new-bldg');
    if(new_bldg){
       fldp.removeAttribute('disabled');
       let fdp_change = document.getElementById('flGrp').options[0];
       fdp_change.text = 'test-floor';

    }
    console.log("test3");
})

var subjectObject = {
    "New Building": {
  "L3":[], 
  "L2":[],
  "L":[],
  "1":[],
  "2":[],
  "3":[],
  "4":[],
  "5":[],
  "6":[],
  "7":[],
  "8":[],
  "9":[],
  "10":[],
  //'L','1','2','3','4','5','6','7','8','9','10',
    //  "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
   //   "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]    
    },
    "Haaren Hall": {
        "C":[],
      "B":[],
      "1":[],
      "2":[],
      "3":[],
      "4":[],
      "5":[],
      "6":[],
    
      //"PHP": ["Variables", "Strings", "Arrays"],
      //"SQL": ["SELECT", "UPDATE", "DELETE"]
    }, 
  
    "BMW":{
      "6":[],
      "10":[],
      "11":[],
    }
  
  
  
  
  }
  

console.log();




// new_bldg.style.color = "red";
// buildingdp.style.color = "blue"; 



// for(let i = 0; i<sel_bldgopt; i++){

//  console.log(sel_bldgopt[i].style.color ="red");
//   // if(sel_bldgopt[i] === sel_bchild){
//   //   alert("A whole new world");
    
//   //   }
// }

buildingdp.addEventListener("click", function(){
  if(buildingdp == bldg_default){
      fldp.disabled = "true"; 
  }

  return false;
}); 








// window.onload = function() {
//     let buildingdp = document.getElementById('buildingGrp');
//     let fldp = document.getElementById('flGrp');


//   var subjectSel = document.getElementById("subject");
//   var topicSel = document.getElementById("topic");
//   var chapterSel = document.getElementById("chapter");
//   for (var x in subjectObject) {
//     subjectSel.options[subjectSel.options.length] = new Option(x, x);
//   }
//   subjectSel.onchange = function() {
//     //empty Chapters- and Topics- dropdowns
//     chapterSel.length = 1;
//     topicSel.length = 1;
//     //display correct values
//     for (var y in subjectObject[this.value]) {
//       topicSel.options[topicSel.options.length] = new Option(y, y);
//     }
//   }
//   topicSel.onchange = function() {
//     //empty Chapters dropdown
//     chapterSel.length = 1;
//     //display correct values
//     var z = subjectObject[subjectSel.value][this.value];
//     for (var i = 0; i < z.length; i++) {
//       chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
//     }
//   }
// }
