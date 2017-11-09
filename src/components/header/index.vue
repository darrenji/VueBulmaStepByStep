
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
               <span id="nav-toggle" class="nav-toggle" :class="{'is-active':status}" @click="status = !status">
                   <span></span>
                   <span></span>
                   <span></span>
               </span>
               <div id="nav-menu" class="nav-right nav-menu" :class="{'is-active': status}">
                   <router-link class="nav-item" to="/">
                       <figure class="image is-24x24 is-right-5">
                           <img src="../../asserts/photo.jpg" alt="" class="is-circle">
                       </figure>
                   </router-link>
                   <a class="nav-item" @click="logout()"><span class="icon is-small"><i class="fa fa-power-off"></i></span>注销</a>
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
        },
        methods: {
            logout () {
                // 广播
                // this.$emit('closemodal');
                this.$parent.showModal('logout', '注销', '您确定要注销吗？', 300)
            },
            toggle () {
                this.status != this.status;
            }
        }
    }
</script>