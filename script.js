
var sidebar=document.querySelector(".sidebar")
function showbox(){
       console.log("working");
       sidebar.classList.toggle("small-sidebar");
       
}

function send(){
       var text=document.getElementById("textboxsearch").value
       if(text==="cr7"){
              window.location.href = "cr7page.html";
       }
       else{
              window.location.href = "NoResultpage.html";
       }

}