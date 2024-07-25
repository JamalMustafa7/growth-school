const dropdownButton=document.querySelector(".dropdown-button");
const dropdown=document.querySelector(".dropdown");
dropdownButton.addEventListener("click",function(event)
{
    dropdown.classList.toggle("hide");
    event.stopPropagation();
})

document.addEventListener("click",function(event)
{
    dropdown.classList.add("hide")
})