<template>
  <button 
  class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
      <span v-if="isloading">
          Loading...
      </span>
      <span v-else-if="text">
          {{ text }}
      </span>
      <slot v-else />
  </button>
</template>

<script>
export default {
    name:'Buton',
    props:{
        text:{ type: String, default: '' },
        isloading:{ type: Boolean, default: false },
        color:{ type: String, default:'blue' }
    }
};
</script>

<style>

</style>