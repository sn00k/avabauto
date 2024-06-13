<template>
  <div>
    <Header />
    <section class="hero">
      <div class="hero-text">
        <h1>Welcome to Avabauto</h1>
        <p class="text-red-400">
          Opening Hours: Mon-Fri 9am - 6pm, Sat 10am - 4pm
        </p>
        <p>Address: 123 Car St, City, Country</p>
        <p>Financing options available. Contact us for more details.</p>
      </div>
    </section>
    <section>
      <GoogleMap />
    </section>
    <section>
      <ContactForm />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import GoogleMap from '~/components/GoogleMap.vue';
import ContactForm from '~/components/ContactForm.vue';

export default {
  components: {
    Header,
    Footer,
    GoogleMap,
    ContactForm,
  },
};
</script>

<style scoped>
section {
  padding: 40px 20px;
}
</style>
