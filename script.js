
function clickhome() {
    document.getElementById('print').innerHTML = "You Have Clicked Home.";
}


function clickprofile() {
    document.getElementById('print').innerHTML = "You Have Clicked profile.";
}

function clickout() {
    document.getElementById('print').innerHTML = "You are logged out.";
}

function showList() {
       
        var x = document.getElementsByClassName("hobby");
        console.log("showListclicked" +x[0].style.display);
        if(x[0].style.display === "") {
            x[0].style.display = "block";
        } 
        else if(x[0].style.display === "none") {
            x[0].style.display = "block";
        }
        else {
            x[0].style.display = "none";
        }
}

function myFunction() {
            console.log ('secttion is: '+document.getElementsByTagName("section")[0].innerHTML);
}


function add(){
        var list = document.getElementsByClassName('hobby-list')[0],
            newLi = document.createElement("li"),
            newA = document.createElement("a");
            newA.innerHTML = "Dancing";
            list.appendChild(newLi);
            newLi.appendChild(newA);
            list.insertBefore(newLi, list.getElementsByTagName('li')[0]);
         
}


function remove() {
    var list = document.getElementsByClassName('hobby-list')[0],
    childLi = list.getElementsByTagName('li')[0];
    list.removeChild(childLi);
}