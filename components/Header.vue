<template>
  <header class="sticky-header">
    <div class="left">
      <span>Avabauto</span>
      <a href="https://facebook.com" target="_blank">Facebook</a>
      <a href="https://twitter.com" target="_blank">Twitter</a>
    </div>
    <nav class="right">
      <nuxt-link to="/about">About Us</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
  </header>
</template>

<style scoped>
.left {
  display: flex;
  align-items: center;
}

.left span {
  margin-right: 20px;
  font-size: 24px;
  font-weight: bold;
}

.left a {
  margin-right: 10px;
  color: white;
}

.right a {
  margin-left: 10px;
  color: white;
}
</style>
