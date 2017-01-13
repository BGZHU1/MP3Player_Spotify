//1. break statement
//2. while loop


function PlayBox(){

  console.log("box is staring");

    var songName=null;
    var songAudio=null;
    //console.log(track);  
    var songList=[];
   
    var totalNumberOfSongs=-1;

    var audio=null;

    var currentSongNumber=0;

//play song
this.playSong=function(){

    //audio.pause();
  if(currentSongNumber>=0){
    songList[currentSongNumber][1].play();
    currentSong= songList[currentSongNumber][1];


   songList[currentSongNumber][1].addEventListener("ended", function(){
    //e.preventDefault();
    console.log("im here");
    
        songList[currentSongNumber][1].currentTime=0;

        songList[currentSongNumber][1].play();

  })

 }
}


this.pauseSong=function(){
   // audio.pause();

  if(currentSongNumber>=0){

   songList[currentSongNumber][1].pause();

}

}

 
this.fowardSong=function(){
   
  songList[currentSongNumber][1].pause();
  songList[currentSongNumber][1].currentTime=0;

  currentSongNumber+=1;
  currentSongNumber=currentSongNumber%songList.length;

  songList[currentSongNumber][1].play();


  } 
  
 

  



this.backwardSong=function(){
    //audio.pause();
  if(currentSongNumber>=1){
  songList[currentSongNumber][1].pause();
  songList[currentSongNumber][1].currentTime=0;

  currentSongNumber-=1;

  songList[currentSongNumber][1].play();

  } else{
  songList[currentSongNumber][1].pause();
  songList[currentSongNumber][1].currentTime=0;
  songList[currentSongNumber][1].play();

   }

}

this.stopSong=function(){
    //audio.pause();
   songList[currentSongNumber][1].pause();
   songList[currentSongNumber][1].currentTime=0;
   currentSongNumber=0;
 
  
}


this.randomSong=function(){
    //audio.pause();
  songList[currentSongNumber][1].pause();
  songList[currentSongNumber][1].currentTime=0;
  currentSongNumber=Math.floor(Math.random() * (songList.length))
  songList[currentSongNumber][1].play();
  
}

this.addSong=function(track,songAudio){
    //audio.pause();
  audio=songAudio;
  if(totalNumberOfSongs>=0){
    songList[currentSongNumber][1].pause();
    songList[currentSongNumber][1].currentTime=0;
    }

    songName=track;
    songAudio=songAudio;
    $("ul").append("<li>"+songName+"</li>");
    totalNumberOfSongs+=1;
    songList[totalNumberOfSongs]=[songName,songAudio];

  
    currentSongNumber=totalNumberOfSongs;
    songList[currentSongNumber][1].play();

}


}//class


var startPlay=new PlayBox();

document.getElementById("play").addEventListener("click", function(){
  startPlay.playSong();
  
})

document.getElementById("pause").addEventListener("click", function(){

startPlay.pauseSong();

})

document.getElementById("forward").addEventListener("click", function(){
 startPlay.fowardSong();
})


document.getElementById("backward").addEventListener("click", function(){
  startPlay.backwardSong();
})


document.getElementById("stop").addEventListener("click", function(){
  startPlay.stopSong();

 
 
})

document.getElementById("random").addEventListener("click", function(){
 
  startPlay.pauseSong();
  startPlay.randomSong();
  startPlay.playSong();

 
 
})



document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  var track= document.querySelector("input").value

  $.ajax({
    url: "https://api.spotify.com/v1/search",
    data: {
      q: track,
      type: "track"
    },

    success: function(response){
      var url=response.tracks.items[0].preview_url;
      var  songAudio= new Audio(url);
      startPlay.addSong(track,songAudio);
    }
  })

})


function bigImg(x) {
   x.style.height = "120px";
    x.style.width = "120px";
    
}

function normalImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}



function bigImg1(x) {
   x.style.height = "170px";
    x.style.width = "170px";
    
}

function normalImg1(x) {
    x.style.height = "150px";
    x.style.width = "150px";
}

  
$(document).ready(function(){
    
        $("div").animate({left: '250px'});
    
});

$(document).ready(function(){
  
    $(".play").animate({left: '250px'});
    
    
});


