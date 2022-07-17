function pagechange(){
    var page = document.getElementById("select1fr").value;
    if(page==1){
        document.getElementById("pgchnga").setAttribute("href","length.html");
    }
    if(page==2){
        document.getElementById("pgchnga").setAttribute("href","weight.html");
    }
    if(page==3){
        document.getElementById("pgchnga").setAttribute("href","volume.html");
    }
    if(page==4){
        document.getElementById("pgchnga").setAttribute("href","temperature.html");
    }
    if(page==5){
        document.getElementById("pgchnga").setAttribute("href","currency.html");
    }
}