<script setup ts>
import { ref } from 'vue'



</script>


<template>
<h2>Home</h2>
<RouterLink to="/quiz" class="btn">
  Start Quiz
</RouterLink>
</template>



<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}
</style>