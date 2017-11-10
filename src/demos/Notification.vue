<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Notification</span>
        <div class="notification">
            <button class="delete"></button>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At totam, ad voluptatem nostrum quisquam, corporis molestiae vero maxime dolorum laudantium ducimus beatae molestias earum modi, architecto sit voluptates quo quos!
        </div>
        
        <hr>
        <div class="notification is-primary">
            <button class="delete"></button>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At totam, ad voluptatem nostrum quisquam, corporis molestiae vero maxime dolorum laudantium ducimus beatae molestias earum modi, architecto sit voluptates quo quos!
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