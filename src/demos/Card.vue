<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Card</span>
        <div>
            <div class="tile is-ancestor">
               <!--第一个card-->
                <div class="tile is-parent is-6">
                    <article class="tile is-child box">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="http://placehold.it/1280x960" alt="">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48*48">
                                            <img src="http://placehold.it/96x96" alt="">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">John Smith</p>
                                        <p class="subtitle is-6">@johnsmith</p>
                                    </div>
                                </div>
                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus illo harum ullam ad, ducimus nemo neque quis ipsa reiciendis fuga natus asperiores repellat magnam nulla minima vero alias, quaerat vel!
                                    <a href="#" class="">css</a>
                                    <a href="#">responseve</a>
                                    <br>
                                    <time datetime="2017.11.10">11:08 AM -1 Jan 2017</time>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <!--第二个card-->
                <div class="tile is-parent is-6">
                    <article class="tile is-child box">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component
                                </p>
                                <!--aria-label为当前元素加上标签默描述-->
                                <a href="#" class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                        <!--aria-hidden为屏幕识读设备而设-->
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta perspiciatis nobis facilis voluptates corporis, praesentium sapiente eligendi id blanditiis inventore iste fuga alias perferendis autem repellat ut optio, beatae, suscipit.
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Save</a>
                                <a href="#" class="card-footer-item">Edit</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                    </article>
                </div>
            </div>
            
            <!--第二行-->
            <div class="tile ancestor">
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <div class="card">
                            <div class="card-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni asperiores debitis veniam aliquam ullam itaque doloribus nobis exercitationem nam rem adipisci cupiditate, dolor eius, fugiat facere nostrum nulla doloremque ipsam.
                            </div>
                            <footer class="card-footer">
                                <p class="card-footer-item">
                                    <span>
                                        View on <a href="#">Twitter</a>
                                    </span>
                                </p>
                                <p class="card-footer-item">
                                    <span>
                                        Share on <a href="#">Facebook</a>
                                    </span>
                                </p>
                            </footer>
                        </div>
                    </article>
                </div>
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