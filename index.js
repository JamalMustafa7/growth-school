const dropdownButton=document.querySelector(".dropdown-button");
const dropdown=document.querySelector(".dropdown");
const hamburger=document.querySelector(".hamburger");
const innerLink=document.querySelector(".nav-inner-links");

document.addEventListener('DOMContentLoaded',function()
{
    if(window.innerWidth<=850)
    {
        innerLink.classList.add("hide");
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
    innerLink.classList.add("hide");

    dropdown.classList.toggle("hide");
    event.stopPropagation();
})

document.addEventListener("click",function(event)
{
    dropdown.classList.add("hide")
    innerLink.classList.add("hide");
})

hamburger.addEventListener("click",function(event)
{
    dropdown.classList.add("hide")
    innerLink.classList.toggle("hide")
    event.stopPropagation();
})