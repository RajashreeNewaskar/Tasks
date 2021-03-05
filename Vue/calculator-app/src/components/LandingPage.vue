<template>
  <div class="container">
    <h1>Registration Form</h1>
    <br /><br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form @submit.prevent="handleSubmit">
          <div class="flex justify-center">
            <div class="form-group">
              <label class="mr-2 font-bold text-grey">User Name</label>
              <input
                type="text"
                class="form-control"
                v-model="username"
                :class="{ 'is-invalid': submitted && $v.username.$error }"
              />
              <div
                v-if="submitted && !$v.username.required"
                class="invalid-feedback"
              >
                User Name is required
              </div>
              <span v-if="submitted && !$v.username.minLength"
                >User Name must be at least 3 characters</span
              >
              <div class="error" v-if="submitted && !$v.username.alphaNum">
                Special character is not allowed
              </div>
            </div>

            <div class="form-group">
              <label class="mr-2 font-bold text-grey">Email</label>
              <input
                type="email"
                v-model="email"
                id="email"
                name="email"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.email.$error }"
              />
              <div
                v-if="submitted && $v.email.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.email.required">Email is required</span>
                <span v-if="!$v.email.email">Email is invalid</span>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="button" @click=" setUsername(username), setEmail(email), gotoCalculator()">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, alphaNum } from "vuelidate/lib/validators";
import store from '../store.js';

export default {
  name: "LandingPage",
  computed: {
  },
  components: {
  },
  props: {},
  data() {
    return {
      username: '',
      email: '',
      submitted: false,
    };
  },

  validations: {
    username: {
   
        required,
        minLength: minLength(3),
        alphaNum
    },
    email: { required, email },
  },
  methods: {
    setEmail: (email) => store.commit('setEmail',email),
    setUsername: (username) => store.commit('setUsername',username),
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      //alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    },
    gotoCalculator() {
      if (this.$v.$invalid) {
        return;
      } else {
        this.$router.push("/calculator");
      }
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid gray;
  padding: 50px;
  background-color: antiquewhite;
  width: 50%;
}
</style>
