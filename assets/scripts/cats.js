

/**
 * @param {string} lightboxID 
 */
function unhideLightbox(lightboxID) {
	
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	
	document.getElementById(lightboxID).classList.remove('hidden');
}



document.getElementById("pictures").onclick = unhideLightbox;


function unhideLightbox1() {
	
	unhideLightbox("leila1");
}


document.getElementById("picture-1").onclick = unhideLightbox1;


function unhideLightbox2() {
	unhideLightbox("jackie2");
}

document.getElementById("picture-2").onclick = unhideLightbox2;





function unhideLightbox3() {
	unhideLightbox("kat3");
}

document.getElementById("picture-3").onclick = unhideLightbox3;





function closeLightbox(lightboxID) {
	
	document.getElementById('lightbox-overlay').classList.add('hidden');

	
	document.getElementById(lightboxID).classList.add('hidden');

}



function closeAllLightboxes() {
	
	var lightboxElements = document.getElementsByClassName('lightbox');

	
	for (var i = 0; i < lightboxElements.length; i++) {
		
		var id = lightboxElements[i].id;
		
		closeLightbox(id);
	}
}


document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;
