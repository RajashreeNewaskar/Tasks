<template>
    <div>
        <h1> User Page</h1>
        <h2>User ID is {{userId}} </h2>
    </div>
</template>

<script>
export default {
    name: 'User',
    data(){
        return {
            userId:this.$route.params.id
        }
    }
}
</script>

<style scoped>

</style>