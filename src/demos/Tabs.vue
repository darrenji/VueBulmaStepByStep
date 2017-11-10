<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Tabs</span>
        <div class="tabs">
          <ul>
            <li class="is-active"><a>Pictures</a></li>
            <li><a>Music</a></li>
            <li><a>Videos</a></li>
            <li><a>Documents</a></li>
          </ul>
        </div>
        
        <hr>
        <hr>
        <div class="tabs is-centered">
          <ul>
            <li class="is-active"><a>Pictures</a></li>
            <li><a>Music</a></li>
            <li><a>Videos</a></li>
            <li><a>Documents</a></li>
          </ul>
        </div>
        <hr>
        <hr>
        <div class="tabs is-centered">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fa fa-image"></i></span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="fa fa-music"></i></span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="fa fa-film"></i></span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <hr>
        <hr>
        <div class="tabs is-toggle is-fullwidth is-large">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon"><i class="fa fa-image"></i></span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon"><i class="fa fa-music"></i></span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon"><i class="fa fa-film"></i></span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon"><i class="fa fa-file-text-o"></i></span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
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