<template>
    <button :class="theme">
        {{ text }}
    </button>
</template>


<script>
export default {
    name: 'Button',
    props:{
        theme:{
            type: String,
            default: 'primary'
        },
        text:{
            type: String,
            required: true
        }
    }
    
};
</script>

<style>
.primary {
    background-color: blue;
}

.secondary {
    background-color: red;
}
</style>