<template>
    
    <xcontent :classname="'bg-light'">
        <span slot="title">Image</span>
        <div class="content">
            <figure class="image is-128x128">
                <img src="http://placehold.it/128x128" alt="">
            </figure>
            
            <hr>
            
             <figure class="image is-128x128">
                <img src="http://placehold.it/256x256">
              </figure>
             <hr>
             <figure class="image is-square"><img src="http://placehold.it/480x480"></figure>
             <hr>
             <div class="tile ancestor">
                 <div class="tile is-parent is-6">
                     <article class="tile is-child box">
                         <figure class="image is-1by1"><img src="http://placehold.it/480x480"></figure>
                     </article>
                 </div>
                 <div class="tile is-parent is-6">
                     <article class="tile is-child box">
                         <figure class="image is-4by3"><img src="http://placehold.it/640x480"></figure>
                     </article>
                 </div>
             </div>
             <hr>
              <div class="tile ancestor">
                 <div class="tile is-parent is-6">
                     <article class="tile is-child box">
                         <figure class="image is-3by2"><img src="http://placehold.it/480x320"></figure>
                     </article>
                 </div>
                 <div class="tile is-parent is-6">
                     <article class="tile is-child box">
                         <figure class="image is-16by9"><img src="http://placehold.it/640x360"></figure>
                     </article>
                 </div>
             </div>
             <hr>
              <div class="tile ancestor">
                 <div class="tile is-parent is-4">
                     <article class="tile is-child box">
                         <figure class="image is-2by1"><img src="http://placehold.it/640x320"></figure>
                     </article>
                 </div>
             </div>
        </div>
    </xcontent>
</template>


<script>
    import {Xcontent} from '../components/page'
    export default {
        components:  {
            Xcontent
        }
    }
</script>