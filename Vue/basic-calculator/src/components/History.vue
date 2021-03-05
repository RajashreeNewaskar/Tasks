<template>
   <div id="history">
        <h2 id = "history-heading">History <i>(Last Five Operations)</i></h2>
        <table id = "history-table">
            <tr>
                <th>Operations</th>
            </tr>
            <tr v-for = "(entry,index) in getHistory" :key = "index">
                <td>{{entry.number}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'History',  
    data() {
        return {
        }
    },
    computed: {
       ...mapGetters([
           'getHistory'
       ])
    }  
}
</script>

<style>
#history {
    width: 90%;
    margin: auto;
    text-align: center;
}
#history-heading {
    font-family: 'Sen', sans-serif;
}
#history-table {
    width: 20%;
    margin: auto;
    text-align: center;
    border: 1px solid #000;
}
th {
    font-family: 'Roboto' sans-serif;
    font-family: 22px;
    padding: 5px;
    border-bottom: 1px solid #000;
}
td {
    font-family: 'Sen', sans-serif;
}
</style>