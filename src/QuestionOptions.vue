<template>
    <ul class="list-none p-0 flex flex-col">
        <li v-for="(option, index) in options" 
        :key="index" 
        class="pl-4 py-3 hover:bg-blue-300 hover:font-bold cursor-pointer" 
        @click="$emit('select', option)" 
        :class="getOptionClass(option)">
            <span >{{ option }}</span>
        </li>
    </ul>
</template>

<script setup>
const { options, currentAnswer } = defineProps({
    options: {
        type: Array,
        required: true
    },
    currentAnswer: {
        type: String
    }
})

const userAnswerStyling = 'bg-blue-100 font-bold'

const getOptionClass = (option) => {
    return currentAnswer === option ? userAnswerStyling : ''
}

defineEmits(['select'])
</script>
