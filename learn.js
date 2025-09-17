document.getElementById("name").innerText = "There !!!";

    // DARK_MODE and LIGHT_MODE
let isDarkMode = false;
 function changeBackground(){
     const back = document.body;
     const button =  document.getElementById("btn");
     if(!isDarkMode){
        // dark-mode
        back.style.backgroundColor = "Black";
        back.style.color = "#FFE8DB";
        back.classList.add("dark-mode");
        back.classList.remove("light-mode")
        button.innerHTML="<span> Light-mode </span>";
         button.style.backgroundColor = "#FFE8DB";
         button.style.color = "Black";
        button.style.boxShadow = "5px 5px 7px #FFE8DB;"
        tme.style.color = "#FFE8DB";
        tme.style.border= "6px solid #FFE8DB";
        isDarkMode = true;
     } 
    //  light-mode
     else{
     back.style.backgroundColor ="#FFE8DB";
     back.style.color = "Black"
     back.classList.remove("dark-Mode");
     back.classList.add("light-mode")
     button.innerHTML = "<span>Dark-mode</span>";
     button.style.backgroundColor = "Black";
     button.style.color = "#FFE8DB";
     tme.style.border = '6px solid black';
     tme.style.color = "black"
       isDarkMode = false;
     }
}

//   TIME -- SECTION
const timed = document.getElementById("tme");

updateTime();

 setInterval(updateTime,1000 )

function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const seconds = date.getSeconds();  
    timed.innerText = `${formatTime(hours)}:${formatTime(mins)}:${formatTime(seconds)}`;
    // timed.innerText = date.toLocaleTimestring()
}

function formatTime(time) {
    return time.toString().padStart(2, "0");
}


// SNOW drop
