<template>
   <form :class="mode">
      <slot><slot>
   </form>   
</template>

<script>
export default {
   props: {
      mode: {
         type: String,
         required: false
      }
   }
}
</script>

<style scoped>
.form-group {
   position: relative;
}

input {
   display: block;
   width: 100%;
}
</style>