console.log("lets write some javascript")

async function getsongs(){

    let a = await fetch("http://127.0.0.1:5500/songss")
    let response  = await a.text();
    
    let div=document.createElement("div")
    div.innerHTML=response;
    let as = div.getElementsByTagName("a")
    let songs=[]
    
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songss/")[1])
        }
        
    }
    return songs
}
    
async function main(){
    //get the list of all the songs
    let songs= await getsongs();
     console.log(songs);

     let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML +  `<li> ${song}</li>`;
        
    }
    //play the first song
    var audio = new Audio(songs[0]);
    //audio.play();  
  
    audio.addEventListener("loadeddata",()=> {
        let duration = audio.duration;
        console.log(audio.duration,audio.currentSrc,audio.currentTime)
        //the duration variable now holds the duration (in seconds) of the audio clip
 
    }); 
}  
 
   

main()
 
