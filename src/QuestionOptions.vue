<template>
    <ul>
        <li v-for="(option, index) in options" 
        :key="index" 
        class="bg-green hover:bg-red" 
        @click="$emit('select', option)">
            <span>{{ option }}</span>
        </li>
    </ul>
</template>

<script setup>
const {options} = defineProps({
    options: Array,
    required: true
})

defineEmits(['select'])
</script>
