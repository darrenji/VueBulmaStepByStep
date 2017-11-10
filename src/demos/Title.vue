<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Title</span>
        <div>
            <h1 class="subtitle is-1">Subtitle 1</h1>
            <h2 class="subtitle is-2">Subtitle 2</h2>
            <h3 class="subtitle is-3">Subtitle 3</h3>
            <h4 class="subtitle is-4">Subtitle 4</h4>
            <h5 class="subtitle is-5">Subtitle 5</h5>
            <h6 class="subtitle is-6">Subtitle 6</h6>
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