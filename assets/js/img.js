document.addEventListener("DOMContentLoaded", () => {
    let thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.className;
    thumbnailElement.addEventListener("click", function() {
	if (thumbnailElement.className === "") {
	    thumbnailElement.className = "small";
	} else {
	    thumbnailElement.className = "";
	}
    });
});
      
