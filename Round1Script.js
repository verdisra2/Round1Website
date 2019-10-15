var navOpen;
var navBar;
window.addEventListener("load", function() {
    var screenWidth = window.innerWidth;

    //create nav collapse button 
    var navHead = document.createElement("h2");
    navHead.classList.add("nav");
    navHead.style.display = "none";
    var navButton = document.createElement("a");
    navButton.setAttribute("href", "javascript:navClick();");
    navButton.innerHTML = "Nav";
    navButton.style.textAlign = "left";
    navHead.appendChild(navButton);
    document.querySelector("body").insertBefore(navHead, document.querySelector(".nav"));

    //react if window is resized
    window.addEventListener("resize", function() {
        screenWidth = window.innerWidth;
        if(screenWidth <= 510) {
            navBar = document.querySelectorAll("#navContent a");
            navOpen = false;
    
            //display nav bar contents vertically and hide them
            for(var i=0; i < navBar.length; i++) {
                navBar[i].style.float = "none";
                navBar[i].style.display = "none";
                navBar[i].style.textAlign = "left";
            }
            
            //display nav bar collapse button 
            navHead.style.display = "block";
        } else {
            navBar = document.querySelectorAll("#navContent a");
    
            //display nav bar contents normally and show them
            for(var i=0; i < navBar.length; i++) {
                navBar[i].style.float = "left";
                navBar[i].style.display = "block";
                navBar[i].style.textAlign = "center";
            }
            
            //hide nav bar collapse button 
            navHead.style.display = "none";
        }
    });

    //changes site for mobile mode
    if(screenWidth <= 510) {
        navBar = document.querySelectorAll("#navContent a");
        navOpen = false;

        //display nav bar contents vertically and hide them
        for(var i=0; i < navBar.length; i++) {
            navBar[i].style.float = "none";
            navBar[i].style.display = "none";
            navBar[i].style.textAlign = "left";
        }
        
        //display nav bar collapse button 
        navHead.style.display = "block";
    }
});

function navClick() {
    if(navOpen) {
        for(var i=0; i < navBar.length; i++) {
            navBar[i].style.display = "none";
        }
        navOpen = false;
    } else {
        for(var i=0; i < navBar.length; i++) {
            navBar[i].style.display = "block";
        }
        navOpen = true;
    }
}