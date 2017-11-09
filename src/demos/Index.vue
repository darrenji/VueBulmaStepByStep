<template>
    <xcontent :classname="'bg-light'">
       <!--标题-->
        <span slot="title">
            <span class="icon is-middle">
                <i class="fa fa-home is-right-5"></i>
            </span>
            首页
        </span>
        <!--菜单-->
        <div slot="menu" class="tabs is-boxed" style="margin:10px 20px 0">
            <ul class="is-left">
                <li :class="{'is-active':index===0}" @click="change(0)"><a>简介</a></li>
                <li :class="{'is-active':index===1}" @click="change(1)"><a>布局</a></li>
                <li :class="{'is-active':index===2}" @click="change(2)"><a>组件</a></li>
                <li :class="{'is-active':index===3}" @click="change(3)"><a>其它</a></li>
            </ul>
        </div>
        <div class="tabs-content-container">
            <!--简介-->
            <div class="fade" v-show="index===0">
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-normal">
                            <div class="content">
                                <p class="title">这里是标题</p>
                                <p class="subtitle">这里是副标题</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quam nam voluptatem ut repellendus quo harum dicta voluptas, quod sit sed hic suscipit corporis blanditiis! Repudiandae accusamus unde atque, optio.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sequi atque id unde vitae dicta quidem sunt libero, reprehenderit iste eveniet accusantium. Dolore, fugit in ut ipsa, rerum neque voluptate?</p>
                                <div class="content">
                                    
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            
            <!--布局-->
            <div class="fade" v-show="index===1">
               <!--最上面的一块tile, 层次结构：tile is-ancestor, tile is-parent, tile is-child, content, title+subtitle-->
               <!--横向占满-->
                <div class="tile is-ancestor">
                  <div class="tile is-parent">
                    <article class="tile is-child notification is-normal">
                      <div class="content">
                        <p class="title">Flex Layout</p>
                        <p class="subtitle">弹性盒内滚动布局</p>
                        <p>支持所有新一代浏览器，为获得最优的效果优先推荐使用最新版Chrome，本项目设计为PC端的管理后台使用。</p>
                        <div class="content">
                          <!-- Content -->
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                
                <!--横向占满-->
                <div class="tile is-ancestor">
                   <!--垂直排列，横向占了8格-->
                    <div class="tile is-vertical is-8">
                       <!--横向占了8格-->
                        <div class="tile">
                            <!--横向占了4格-->
                            <div class="tile is-parent is-vertical">
                               <!--上面-->
                                <article class="tile is-child notification is-primary">
                                    <p class="title">Verticle</p>
                                    <p class="subtitle">Top tile</p>
                                </article>
                                <!--下面-->
                                <article class="tile is-child notification is-warning">
                                    <p class="title">...tiles</p>
                                    <p class="subtitle">Bottom tile</p>
                                </article>
                            </div>
                            <!--横向占了4格-->
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-info">
                                    <p class="title">Middle tile</p>
                                    <p class="subtitle">With an image</p>
                                    <figure class="image is-4by3">
                                        <img src="http://placehold.it/640x480" alt="">
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <!--横向占了8格-->
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-danger">
                                <p class="title">Wide title</p>
                                <p class="subtitle">Aligned with rhe right tile</p>
                                <div class="content">
                                    
                                </div>
                            </article>
                        </div>
                    </div>
                    <!--填充横向剩下的4格-->
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-success">
                            <div class="content">
                                <p class="title">Tall tile</p>
                                <p class="subtitle">With even more content</p>
                                <div class="content">
                                    
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            
            <!--组件-->
            <div class="fade" v-show="index===2">
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-normal">
                            <div class="content">
                                <p class="title">全局组件</p>
                                <p class="subtitle">Modal, Toast, Preloader</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nostrum necessitatibus, ut id eum maiores dolores porro eius numquam quasi iure commodi, possimus vel corporis, enim, odit perspiciatis minima sapiente.</p>
                                <div class="content">
                                    
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            
            <!--其它-->
            <div class="fade" v-show="index===3">
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-normal">
                            <div class="content">
                                <p class="title">其它</p>
                                <p class="subtitle">其它副标题</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, excepturi, quae! Ut iusto corporis et porro, laudantium aspernatur velit. Voluptatem obcaecati dolores aperiam. Odio reprehenderit quas, ratione eum consequatur atque.</p>
                                <div class="content">
                                    
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </xcontent>
</template>


<script>
    import { Xcontent } from '../components/page'
    export default {
      components: {
        Xcontent
      },
      data () {
        return {
          index: 0
        }
      },
      methods: {
          change(index){
              if(this.index===index) return
              this.$nextTick(() => {this.index = index})
          }
      }
    }
</script>


<style lang="less" scoped>
 .tabs-content-container .fade-leave-active {
    display:none;
 }
 .tabs-content-container .fade-enter {
    opacity: 0.5 !important;
 }
</style>