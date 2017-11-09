<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Buttons</span>
        <div>
            <div class="tile is-ancestor">
                <div class="tile is-parent is-4">
                    <article class="title is-child box">
                        <h1 class="title">Options</h1>
                        <div class="block">
                            <button class="button">Default Button</button>
                            <button class="button is-white">White Button</button>
                            <button class="button is-light">Light Button</button>
                            <button class="button is-dark">Dark Button</button>
                            <button class="button is-black">Black Button</button>
                            <button class="button is-link">Link Button</button>
                        </div>
                        <div class="block">
                            <button class="button is-primary">primary</button>
                            <button class="button is-info">info</button>
                            <button class="button is-success">success</button>
                            <button class="button is-warning">warning</button>
                            <button class="button is-danger">danger</button>
                        </div>
                    </article>
                </div>
                
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <h1 class="title">Sizes</h1>
                        <a class="button is-small">small</a>
                        <a class="button">normal</a>
                        <a class="button is-medium">medium</a>
                        <a class="button is-large">large</a>
                    </article>
                </div>
                
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <h1 class="title">Styles</h1>
                        <div class="block">
                            <a class="button is-primary is-outlined">Outlined</a>
                        </div>
                    </article>
                </div>
            </div>
            
            <div class="tile is-ancestor">
               <!--没有定义多少列，默认就是12列-->
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <h1 class="title">States</h1>
                        <div class="columns">
                            <div class="column">
                                <h2 class="subtitle">Loading</h2>
                                <a class="button is-loading">loading</a>
                                <a class="button is-primary is-loading">loading</a>
                                <a class="button is-info is-loading">loading</a>
                                <a class="button is-success is-loading">loading</a>
                                <a class="button is-warning is-loading">loading</a>
                                <a class="button is-danger">loading</a>
                            </div>
                            <div class="column">
                                <h2 class="subtitle">Active</h2>
                                <a class="button is-active">default</a>
                                <a class="button is-primary is-active">primary</a>
                                <a class="button is-info is-active">info</a>
                                <a class="button is-success is-active">success</a>
                                <a class="button is-warning is-active">warning</a>
                                <a class="button is-danger is-active">danger</a>
                            </div>
                            <div class="column">
                                <h2 class="subtitle">Disabled</h2>
                                <a class="button is-disabled">Default</a>
                                <a class="button is-primary is-disabled">Default</a>
                                <a class="button is-info is-disabled">info</a>
                                <a class="button is-success is-disabled">success</a>
                                <a class="button is-warning is-disabled">warning</a>
                                <a class="button is-danger is-disabled">danger</a>
                            </div>
                            <div class="column">
                                <h2 class="subtitle">Button with font awesome icons</h2>
                                <a class="button">
                                    <span class="icon">
                                        <i class="fa fa-github"></i>
                                    </span>
                                    <span>按钮</span>
                                </a>
                                <a class="button is-primary">
                                    <span class="icon">
                                        <i class="fa fa-twitter"></i>
                                    </span>
                                    <span>按钮</span>
                                </a>
                                <a class="button is-success">
                                    <span class="icon">
                                        <i class="fa fa-check"></i>
                                    </span>
                                    <span>按钮</span>
                                </a>
                                <a class="button is-danger">
                                    <span class="icon">
                                        <i class="fa fa-times"></i>
                                    </span>
                                    <span>按钮</span>
                                </a>
                                <a class="button is-danger is-outlined">
                                    <span class="icon">
                                        <i class="fa fa-times"></i>
                                    </span>
                                    <span>按钮</span>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <h1 class="title">Button Group</h1>
                        <h2 class="subtitle">group buttons together</h2>
                        <div class="control is-grouped">
                            <p class="control">
                                <a class="button is-primary">Save changes</a>
                            </p>
                            <p class="control">
                                <a class="button">Cancel</a>
                            </p>
                            <p class="control">
                                <a class="button is-danger">Delete post</a>
                            </p>
                        </div>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <h1>Button addons</h1>
                        <h2 class="subtitle">button as addons</h2>
                        <p class="control has-addons">
                            <a class="button">
                                <span class="icon is-small">
                                    <i class="fa fa-align-left"></i>
                                </span>
                                <span>Left</span>
                            </a>
                            <a class="button">
                                <span class="icon is-small">
                                    <i class="fa fa-align-center"></i>
                                </span>
                                <span>Center</span>
                            </a>
                            <a class="button">
                                <span class="icon is-small">
                                    <i class="fa fa-align-right"></i>
                                </span>
                                <span>Right</span>
                            </a>
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </xcontent>
</template>


<script>
    import {Xcontent} from '../components/page'
    export default {
        components: {
            Xcontent
        }
    }
</script>


<style  scoped>
    .button {
        margin:  5px 0 0;
    }
</style>