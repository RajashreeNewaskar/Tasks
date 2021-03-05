<template>
  <div class="container">
    <h1>Registration Page</h1>
    <br /><br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              class="form-control"
              v-model.trim="$v.username.$model"
              :class="{
                'is-validate': $v.username.$error,
                'is-valid': !$v.username.$invalid,
              }"
            />
            <div class="error" v-if="username.length && !$v.username.required">Name is required</div>
            <div class="error" v-if="!$v.username.alphaNum">
              Special character is not allowed
            </div>
            <div class="error" v-if="!$v.username.minLength">
              Name must have at least
              {{ $v.username.$params.minLength.min }} letters.
            </div>
            <div class="error" v-if="!$v.username.maxLength">
              Name must have at most
              {{ $v.username.$params.maxLength.max }} letters.
            </div>
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model.trim="email"
            />
            <div class="error" v-if="email.length && !$v.email.required">
              Email is required
            </div>
            <div class="error" v-if="!$v.email.email">Email must be valid</div>
          </div>
        
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
  alphaNum
} from "vuelidate/lib/validators";


export default {
  name: "FormValidation",
  data() {
    return {
      username: '',
      email: ''
    };
  },
  methods: {
 
  },
  validations: {
    username: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
      alphaNum
    },
    email: {
      required,
      email,
    }
  }
};
</script>

<style>
</style>