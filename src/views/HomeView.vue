<template lang="">
    <div className='home-page'>
      <Header />
      <Form />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";
export default {
  components: {
    Header,
    Form,
  },
}
</script>
