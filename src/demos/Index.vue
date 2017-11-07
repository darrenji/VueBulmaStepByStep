<template>
    <xcontent :classname="'bg-light'"></xcontent>
</template>


<script>
    import { Xcontent } from '../components/page'
    export default {
      components: {
        Xcontent
      },
      data () {
        return {
          index: 0
        }
      }
    }
</script>