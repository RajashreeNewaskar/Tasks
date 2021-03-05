<template>
   <div class="container" style="max-width: 500px; text-align: left">
            <div class="alert alert-success" role="alert">
                <h1> Form Validation using Vee Validator library </h1>
            </div>
        <ValidationProvider rules="even" v-slot="{ errors }">
            <input v-model="value" type="number" placeholder="type something">
            <span>{{ errors[0] }}</span>
        </ValidationProvider>
   </div>
</template>

<script>
import { extend } from 'vee-validate';

extend('even', value => {
  return value % 2 === 0;
});

export default {
  data: () => ({
    value: ''
  })
};
</script>

<style scoped>

</style>