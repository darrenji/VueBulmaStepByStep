<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Icons</span>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-6">
                <article class="tile is-child box">
                    <h1 class="title">font awesome</h1>
                    <h3 class="subtitle">
                        <a href="http://fontawesome.io/examples/">参考</a>
                    </h3>
                    <div class="content">
                        <p>
                            <i class="fa fa-camera-retro"></i>
                        </p>
                        <p>
                            <i class="fa fa-camera-retro is-small"></i>small
                        </p>
                        <p>
                            <i class="fa fa-camera-retro  is-medium"></i>medium
                        </p>
                        <p>
                             <i class="fa fa-camera-retro is-large"></i>large
                        </p>

                    </div>
                </article>
            </div>
        </div>
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