 // Get the modal
 var modal = document.getElementById("fullscreenImageWindow");
 // Get the images and insert it inside the modal - use its "alt" text as a caption
 var imgs = document.getElementsByClassName("enlargeImage");
 var modalImg = document.getElementById("fullscreenImageWindowImage");
 var captionText = document.getElementById("fullscreenImageWindowCaption");
 var i;
 for(i =0; i< imgs.length; i++)
 {
     imgs[i].onclick = function(){
         modal.style.display = "block";
         modalImg.src = this.src;
         captionText.innerHTML = this.alt;
     }
 }
 // Get the <span> element that closes the modal
 var closeBtn = document.getElementsByClassName("fullscreenImageWindowClose")[0];
 
 // When the user clicks on <span> (x), close the modal
 closeBtn.onclick = function() { 
   modal.style.display = "none";
 }