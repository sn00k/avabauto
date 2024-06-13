<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required />
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission, e.g., send data to an API
      alert("Form submitted!");
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

.contact-form div {
  margin-bottom: 10px;
}

.contact-form label {
  display: block;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.contact-form button {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>
