<template>
  <div>
    <Header />
    <section>
      <h1>About Us</h1>
      <p>Information about the car dealership...</p>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
section {
  padding: 40px 20px;
}
</style>
