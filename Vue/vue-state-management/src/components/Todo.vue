<template>
    <div style="width:250px; margin: 5px auto;">
        <div style="display:flex; justify-content: space-between">
        <p>{{todo.title}}</p>
        <button @click="deleteToDo">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["todo"],
    methods:{
        deleteToDo() {
            this.$store.dispatch('deleteToDo',this.todo)
        }
    }
}
</script>

<style scoped>

</style>