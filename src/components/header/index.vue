
  /* eslint-disable */

  <template>
   <section id="nav-section" class="hero is-primary">
       <div class="hero-head">
           <nav class="nav">
               <div class="nav-left">
                   <router-link class="nav-item is-brand" to="/">
                       <img src="../../asserts/headerlogo-white.png">
                   </router-link>
               </div>
               <span id="nav-toggle" class="nav-toggle">
                   <span></span>
                   <span></span>
                   <span></span>
               </span>
               <div id="nav-menu" class="nav-right nav-menu" :class="{'is-active': status}">
                   
               </div>
           </nav>
       </div>
   </section>
</template>


<script>
    export default {
        data () {
            return {
                status: false
            }
        }
    }
</script>