<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Message</span>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-4">
                <article class="tile is-child box">
                    <article class="message">
                        <div class="message-header">
                            <p>Lorem ipsum dolo.</p>
<!--                            <button class="delete"></button>-->
                        </div>
                        <div class="message-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quibusdam hic, nesciunt libero distinctio ullam vitae et a porro odit suscipit, officiis neque consequuntur at optio qui cumque odio unde.
                        </div>
                    </article>
                </article>
            </div>
            
            <div class="tile is-parent is-4">
                <article class="tile is-child box">
                    <div class="message is-primary">
                        <div class="message-header">
                            <p>primary</p>
                        </div>
                        <div class="message-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum labore corporis eos, adipisci vero expedita minus amet aliquam voluptates quisquam ut velit voluptas culpa, mollitia quaerat esse aperiam quae delectus!
                        </div>
                    </div>
                </article>
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