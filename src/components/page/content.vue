/* eslint-disable */

<template>
   <section class="page-content" :class="classname">
       <div>content</div>
    </section>
</template>


<script>
    export default {
      props: {
        classname: {
          type: String,
          default: ''
        }
      }
    }
</script>