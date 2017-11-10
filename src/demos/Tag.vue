<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Tag</span>
        <div class="block">
            <span class="tag is-black">Black</span>
            <span class="tag is-dark">Dark</span>
            <span class="tag is-light">Light</span>
            <span class="tag is-white">White</span>
            <span class="tag is-primary">Primary</span>
            <span class="tag is-link">Link</span>
            <span class="tag is-info">Info</span>
            <span class="tag is-success">Success</span>
            <span class="tag is-warning">Warning</span>
            <span class="tag is-danger">Danger</span>
        </div>
        <hr>
        <div class="block">
            <span class="tag is-success">
              Bar
              <button class="delete is-small"></button>
            </span>
            <span class="tag is-warning is-medium">
              Hello
              <button class="delete is-small"></button>
            </span>
            <span class="tag is-danger is-large">
              World
              <button class="delete"></button>
            </span> 
        </div>
        <hr>
        <div class="block">
            <div class="tags">
              <span class="tag">One</span>
              <span class="tag">Two</span>
              <span class="tag">Three</span>
            </div>
        </div>
        <hr>
        <div class="block">
            <div class="tags">
              <span class="tag">One</span>
              <span class="tag">Two</span>
              <span class="tag">Three</span>
              <span class="tag">Four</span>
              <span class="tag">Five</span>
              <span class="tag">Six</span>
              <span class="tag">Seven</span>
              <span class="tag">Eight</span>
              <span class="tag">Nine</span>
              <span class="tag">Ten</span>
              <span class="tag">Eleven</span>
              <span class="tag">Twelve</span>
              <span class="tag">Thirteen</span>
              <span class="tag">Fourteen</span>
              <span class="tag">Fifteen</span>
              <span class="tag">Sixteen</span>
              <span class="tag">Seventeen</span>
              <span class="tag">Eighteen</span>
              <span class="tag">Nineteen</span>
              <span class="tag">Twenty</span>
            </div>
        </div>
        <hr>
        <div class="block">
            <div class="tags has-addons">
              <span class="tag">Package</span>
              <span class="tag is-primary">Bulma</span>
            </div>
        </div>
        <hr>

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