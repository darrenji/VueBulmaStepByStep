<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Media Object</span>
        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="http://placehold.it/128x128" alt="">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias tempore accusamus architecto.</p>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nobis aperiam molestias harum voluptate optio cumque. Dolorem eaque minima debitis at ipsam. Soluta id, repellat autem quam unde minima itaque.
                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                        <a href="" class="level-item">
                            <span class="icon is-small"><i class="fa fa-reply"></i></span>
                        </a>
                        <a href="" class="level-item">
                            <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                        </a>
                        <a href="" class="level-item">
                            <span class="icon is-small"><i class="fa fa-heart"></i></span>
                        </a>
                    </div>
                </nav>
            </div>
            <div class="media-right">
                <button class="delete"></button>
            </div>
        </article>
        
        <hr>
        
        
    </xcontent>
</template>


<script>
    import { Xcontent } from '../components/page'
    export default {
        components: {
            Xcontent
        }
    }
</script>