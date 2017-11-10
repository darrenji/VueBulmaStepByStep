<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Collapse</span>
        <div class="columns">
            <div class="column is-6">
                <collapse>
                    <collapse-item title="标题1" :index="0" :selected="index1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                    </collapse-item>
                    <collapse-item title="标题2" :index="1" :selected="index1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                    </collapse-item>
                    <collapse-item title="标题3" :index="2" :selected="index1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                    </collapse-item>
                </collapse>
            </div>
            <div class="column is-6">
                <collapse>
                    <collapse-item :accordion="true" title="标题1" :index="0" :selected="index2" @change="update2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                    </collapse-item>
                    <collapse-item :accordion="true" title="标题2" :index="1" :selected="index2"  @change="update2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                    </collapse-item>
                    <collapse-item :accordion="true" title="标题3" :index="2" :selected="index2"  @change="update2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem.</p>
                    </collapse-item>
                </collapse>
            </div>
        </div>
    </xcontent>
</template>


<script>
    import {Xcontent} from '../components/page'
    import {Collapse, CollapseItem} from '../components/collapse'
    export default {
        components: {
            Xcontent,
            Collapse,
            CollapseItem
        },
        data(){
            return {
                index1: -1,
                index2:-1
            }
        },
        methods: {
            update2(index) {
                this.index2 = Number(index)
            }
        }
        
    }
</script>