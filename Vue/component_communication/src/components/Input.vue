<template>
   <div>
       <input type="text" @input="ChangeMessage">
       <p>{{message}}</p>
   </div>
</template>

<script>
export default {
    props: [],
    data(){
        return{
            message: ''
        }
    },
    methods: {
        ChangeMessage(event) {
            this.message=event.target.value;
            this.$emit('messageChanged',this.message);
        }
    }
}
</script>

<style>

</style>