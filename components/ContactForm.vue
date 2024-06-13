<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  console.info('Form submitted!: ', form.value);
  // form.value.name = '';
  // form.value.email = '';
  // form.value.message = '';
};
</script>

<template>
  <form
    @submit.prevent="submitForm"
    class="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg"
  >
    <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">
      Contact Us
    </h2>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Name:</label
      >
      <input
        type="text"
        id="name"
        v-model="form.name"
        required
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 focus:border-blue-300"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email:</label
      >
      <input
        type="email"
        id="email"
        v-model="form.email"
        required
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 focus:border-blue-300"
      />
    </div>
    <div class="mb-6">
      <label for="message" class="block text-sm font-medium text-gray-700"
        >Message:</label
      >
      <textarea
        id="message"
        v-model="form.message"
        required
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 focus:border-blue-300"
        rows="5"
      ></textarea>
    </div>
    <button
      type="submit"
      class="w-full py-3 px-4 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
    >
      Submit
    </button>
  </form>
</template>
