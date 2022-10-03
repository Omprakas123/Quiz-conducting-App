
const charVal = document.getElementById('textarea');
let totalCount = document.getElementById('total-counter');
let remaningCount = document.getElementById('remaining-counter');

let charCount = 0;

 const updateCounter=()=>{
   

     charCount=charVal.value.length;
     totalCount.innerHTML = charCount;
     remaningCount.innerHTML =`${150-charCount}`;
 };
charVal.addEventListener('keyup',()=> {updateCounter()});

const copyText = ()=>{
    charVal.select();
    charVal.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(charVal.value);
}
