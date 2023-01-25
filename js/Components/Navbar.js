
const NavBar = () => {
    return `
   <nav class="sidebar">
   <div class="">
   <a href="index.html" class="brand">
    <img src="./images/spotify-1.svg"></img>
</a>
     <ul class="tools">
       <li>
         <a href="#">
           <span class="material-symbols-outlined"> home </span>
           <span >Home</span>
         </a>
       </li>
       <li>
         <a href="#">
           <span class="material-symbols-outlined"> Lyrics </span>
           <span>Lyrics</span>
         </a>
       </li>
       <li>
         <a href="#">
         <span class="material-symbols-outlined">
         playlist_play
         </span>
           <span>Playlist</span>
         </a>
       </li>
       
       </ul></ul>
     <div class="profile">
       <a href="#">
       </a>
      
   </div>
 </nav>
    
   `

}
export default NavBar;