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
                <li :class="{'is-active':index===2}" @click="change(2)"><a>全局</a></li>
                <li :class="{'is-active':index===3}" @click="change(3)"><a>缓存</a></li>
            </ul>
        </div>
        <div class="tabs-content-container">
            <div>content</div>
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