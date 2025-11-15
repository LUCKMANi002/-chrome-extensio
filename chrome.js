 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
 import { getDatabase ,
          ref,
          push,
          onValue,
          remove} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

  const firebaseConfig = {
        databaseURL : "https://luck-tacker-app-default-rtdb.europe-west1.firebasedatabase.app/"
  };

  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app)
  const refenceDB = ref(database , "my project")
 

const inputEl = document.getElementById("input-el")
const saveButton = document.getElementById("save-button")
const deleteButton = document.getElementById("delete-button")
const ulEL = document.getElementById("ul-el")

//console.log(saveButton)
let myLeads = [] 

onValue(refenceDB, function(snapshot){
    const getOneAnswe = snapshot.exists()

    if(getOneAnswe){
       
     let snapshotValue = snapshot.val()
     myLeads = Object.values(snapshotValue)
     codes(myLeads)
    }
})

saveButton.addEventListener("click", function(){
   push(refenceDB ,inputEl.value)
   inputEl.value = "";
   codes(myLeads)
})


let onOdardList = "";

function codes(add){
   for(let i = 0; i <add.length; i++){
     onOdardList += `<li><a href = "#"> ${add[i]} </a></li>`  
    
   }
   ulEL.innerHTML = onOdardList
}

deleteButton.addEventListener("click", function(){
   remove(refenceDB)
   ulEL.textContent = "";
   myLeads = []
})