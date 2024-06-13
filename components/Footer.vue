<template>
  <footer class="footer">
    <div class="left">
      <span>Avabauto</span>
      <a href="https://facebook.com" target="_blank">Facebook</a>
      <a href="https://twitter.com" target="_blank">Twitter</a>
    </div>
    <div class="right">
      <p>Address: 123 Car St, City, Country</p>
      <p>Phone: +123 456 7890</p>
      <p>Email: contact@avabauto.com</p>
    </div>
  </footer>
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

.right p {
  margin: 5px 0;
}
</style>
