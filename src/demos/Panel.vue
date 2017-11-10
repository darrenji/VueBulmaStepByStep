<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Panel</span>
        <nav class="panel">
          <p class="panel-heading">
            Repositories
          </p>
          <p class="panel-tabs">
            <a class="is-active" href="#">All</a>
            <a href="#">Public</a>
            <a href="#">Private</a>
            <a href="#">Sources</a>
            <a href="#">Forks</a>
          </p>
          <a class="panel-block is-active" href="#">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            bulma-website
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            bulma
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            marksheet
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-code-fork"></i>
            </span>
            daniellowtw/infBoard
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            jgthms.github.io
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-code-fork"></i>
            </span>
            mojs
          </a>
          <a class="panel-block" href="#">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            grumpy-cat
          </a>
          <label class="panel-block">
            <input type="checkbox">
            Remember me
          </label>
          <div class="panel-block">
            <button class="button is-primary is-outlined is-fullwidth">
              Reset all filters
            </button>
          </div>
        </nav>
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