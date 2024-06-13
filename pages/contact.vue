<template>
  <div>
    <Header />
    <section>
      <h1>Contact Us</h1>
      <ContactForm />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ContactForm from "~/components/ContactForm.vue";

export default {
  components: {
    Header,
    Footer,
    ContactForm,
  },
};
</script>

<style scoped>
section {
  padding: 40px 20px;
}
</style>
