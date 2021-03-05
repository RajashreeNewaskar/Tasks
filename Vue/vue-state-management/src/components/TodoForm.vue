<template>
    <div style="width:250px; margin: 5px auto;">
      <input type="text" v-model="newTodoItem"/>
      <button @click="addNewTodoItem" style="margin-top: 15px;margin-left: 15px;  font-size:20px;">Submit</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ""
        }
    },
    methods:{
        addNewTodoItem() {
            this.$store.dispatch("addNewTodoItem",this.newTodoItem);
            this.newTodoItem= ""
        }
    }
}
</script>

<style>

</style>