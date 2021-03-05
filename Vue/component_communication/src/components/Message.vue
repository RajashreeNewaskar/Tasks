<template>
  <div>
     
      <app-input @messageChanged="message=$event"></app-input>
  </div>
</template>

<script>
import Input from './Input.vue'

export default {
    data(){
        return{
            message: 'This is a great message'
        }
    },
    components:{
        'app-input' :Input
    }
}
</script>

<style>

</style>