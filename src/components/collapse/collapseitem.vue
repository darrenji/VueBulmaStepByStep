<template>
    <div class="card collapse-item" :class="{'collapse-open':isOpen}">
        <header class="card-header" @click="toggle">
            <h3 class="card-header-title" v-text="title"></h3>
            <span class="card-header-icon">
                <i class="fa fa-angle-right"></i>
            </span>
        </header>
        <div class="card-content" ref="content" :style="{height: height + 'px'}">
            <div class="card-content-box" ref="contentbox">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            index: {
                type: Number,
                require: true
            },
            selected: {
                type: Number,
                require: true
            },
            title: {
                type: String,
                require: true
            },
            accordion: {
                type: Boolean,
                default:false
            }
        },
        data(){
            return {
                height: 0,
                isOpen: this.index === this.selected
            }
        },
        mounted() {
            this.toggleheight(this.isOpen)
        },
        watch: {
            selected (n, o) {
                let status = (this.index === n)
                this.toggleheight(status)
            }
        },
        methods: {
            toggleheight(status){
                this.$refs.content.classList.remove('height-auto')
                setTimeout(()=>{
                    this.isOpen = status;
                    if(!status) {
                        this.height = 0;
                    } else {
                        this.height = this.$refs.contentbox.clientHeight
                        setTimeout(()=>{
                            this.$refs.content.classList.add('height-auto')
                        },300)
                    }
                },0)
            },
            toggle(){
                if(this.accordion) {
                    let index = this.isOpen ? '-1': this.index
                    this.$emit('change', index)
                } else {
                    let status = !this.isOpen
                    this.isOpen = status
                    this.toggleheight(status)
                }
            }
        }
    }
</script>


<style lang="less">
  .collapse-item .card-header-icon{
    transition: transform 300ms;
  } 
  .collapse-item .card-header{
    cursor:pointer;
    user-select:none;
  } 
  .collapse-item .card-header-icon i{
    font-size:14px !important;
  }
  .collapse-item.collapse-open .card-header-icon{
    transform: rotate(90deg);
  }
  .collapse-item .card-content{
    overflow:hidden;
    padding:0;
    transition: all 300ms;
  }
  .collapse-item.collapse-open .card-content.height-auto{
    height:auto !important;
  }
  .collapse-item .card-content-box{
    padding:15px;
  }
</style>