console.log("Welcome to spotify")

let songIndex=0;
let audio= new Audio("songs/1.mp3");
let myprogressbar=document.getElementById('myprogressbar');
let masterplay=document.getElementById('masterplay');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Warriyo Mortals", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"Cielo-Huma", filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songName:"Deaf Keav", filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songName:"Different Heaven", filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songName:"Jangi heroes", filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songName:"Rhythmic rhyme", filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
    {songName:"Laura east", filepath:"songs/7.mp3", coverpath:"covers/7.jpg"},
    
]
songItem.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        makeAllPlays();
    }
    mastersongname.innerText=songs[songIndex].songName;
})
audio.addEventListener('timeupdate',()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audio.currentTime=myprogressbar.value * audio.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })
}
 Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        if(audio.paused){
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
         audio.src= `songs/${songIndex+1}.mp3`;
         mastersongname.innerText=songs[songIndex].songName;
         gif.style.opacity=1;
         audio.currentTime=0;
         audio.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
        }
        else{
            audio.pause();
            gif.style.opacity=0;
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');

        }
    })
 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>0){
        songIndex-=1;
    }else{
        songIndex=0;
    }
         audio.src= `songs/${songIndex+1}.mp3`;
         mastersongname.innerText=songs[songIndex].songName;
         gif.style.opacity=1;
         audio.currentTime=0;
         audio.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
 }) 

 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
         audio.src= `songs/${songIndex+1}.mp3`;
         mastersongname.innerText=songs[songIndex].songName;
         gif.style.opacity=1;
         audio.currentTime=0;
         audio.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
 }) 

