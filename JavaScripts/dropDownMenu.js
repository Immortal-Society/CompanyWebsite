var dropdown = document.getElementsByClassName("menu-dropdown-btn");
var i;
		
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        this.firstElementChild.style.rotate = "z 90deg";
    } else {
        dropdownContent.style.display = "block";
        this.firstElementChild.style.rotate = "z 270deg";
    }
    });
}