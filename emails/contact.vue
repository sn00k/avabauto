<script setup lang="ts">
type ContactProps = {
  name: string;
  email: string;
  message: string;
};

defineProps<ContactProps>();
</script>

<template>
  <ehtml lang="en">
    <p>Nytt meddelande skickat ifrån ditt kontaktformulär på avabauto.se!</p>
    <div style="padding: 12px; border-left: 4px solid #d0d0d0">
      <p>
        <strong>
          {{ name }}
        </strong>
        med e-post
        <strong>
          {{ email }}
        </strong>
        skriver:
      </p>
      <p>{{ message }}</p>
    </div>
  </ehtml>
</template>
