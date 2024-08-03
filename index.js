const dropdownButton=document.querySelector(".dropdown-button");
const dropdown=document.querySelector(".dropdown");
const hamburger=document.querySelector(".hamburger");
const innerLink=document.querySelector(".nav-inner-links");
const navbar=document.querySelector(".navbar");
let dropdown_open=false;
let hamburger_open=false;
document.addEventListener('DOMContentLoaded',function()
{
    if(window.innerWidth<=850)
    {
        innerLink.classList.add("hide");
        hamburger_open=false;
    }
})
window.addEventListener('resize', function() {
    if(window.innerWidth<=850)
        {
            innerLink.classList.add("hide");
        }
   
    else
        innerLink.classList.remove("hide");
});
dropdownButton.addEventListener("click",function(event)
{
    dropdown_open=!dropdown_open;
    console.log(dropdown_open)
    if(hamburger_open)
    {
        innerLink.classList.add("hide");
        hamburger_open=false;
    }

    dropdown.classList.toggle("hide");
    event.stopPropagation();
})

document.addEventListener("click",function(event)
{
    if(hamburger_open)
        {
            innerLink.classList.add("hide");
            hamburger_open=false;
        }
        if(dropdown_open)
            {
                dropdown.classList.add("hide")
                dropdown_open=false;
            }
    
})

hamburger.addEventListener("click",function(event)
{
    hamburger_open=!hamburger_open;
    if(dropdown_open)
    {
        dropdown.classList.add("hide")
        dropdown_open=false
    }
    innerLink.classList.toggle("hide")
    event.stopPropagation();
})
