// JavaScript Document

function hideOverlay(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("artist-vid").muted = false;

}

function toggleNav(){
	var element = document.getElementById("section");
	element.classList.toggle("toggle-open");
    
    var x = document.getElementById("navLinks");
    if (x.style.display === "inline") {
        x.style.display = "none";
    } else {
        x.style.display = "inline";
  }
    
}



function acemoVid(){
    document.getElementById("artist-vid").setAttribute('src', "https://storage.googleapis.com/eking_homework8/acemo_sound.mov");
    

}

function namasendaVid(){
    document.getElementById("artist-vid").setAttribute('src', "vids/namasenda_wanted.mov");
}

function momareadyVid(){
    document.getElementById("artist-vid").setAttribute('src', "vids/moma-ready_43.mov");
}

function moireVid(){
    document.getElementById("artist-vid").setAttribute('src', "vids/moire_attitude.mov");
}

function kushJonesVid(){
    document.getElementById("artist-vid").setAttribute('src', "vids/kush-jones_live.mov");
}

function pattenVid(){
    document.getElementById("artist-vid").setAttribute('src', "vids/patten_horror.mov");
}