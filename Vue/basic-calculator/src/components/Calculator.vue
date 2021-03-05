<template>
  <div class="calculator">
    <div class="row" style="justify-content: center">
      <table id="displayuser">
        <tr>
          <th>User Name</th>
        </tr>
        <tr>
          <th>Email Id</th>
        </tr>
        <tr v-for="(index,user) in userData" :key="index">
           <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </table>
    </div>
    <br /><br /><br />
    <div class="basic-calculator">
      <div class="display">{{ number || "0" }}</div>
      <div @click="clear" class="btn clear">C</div>
      <div @click="remove" class="btn">⬅</div>
      <div @click="sign" class="btn">+/-</div>
      <div @click="percent" class="btn operator">%</div>
      <div @click="append('7')" class="btn">7</div>
      <div @click="append('8')" class="btn">8</div>
      <div @click="append('9')" class="btn">9</div>
      <div @click="multiplication" class="btn operator">X</div>
      <div @click="append('4')" class="btn">4</div>
      <div @click="append('5')" class="btn">5</div>
      <div @click="append('6')" class="btn">6</div>
      <div @click="substraction" class="btn operator">-</div>
      <div @click="append('1')" class="btn">1</div>
      <div @click="append('2')" class="btn">2</div>
      <div @click="append('3')" class="btn">3</div>
      <div @click="addition" class="btn operator">+</div>
      <div @click="append('7')" class="btn">0</div>
      <div @click="dot" class="btn">.</div>
      <div @click="equal" class="btn operator equal">=</div>
      <div @click="division" class="btn operator">/</div>
    </div> <br><br>
    <component v-bind:is="component"></component>
    <br><button id="btn-history" v-on:click="component = 'History'">History</button>
  </div>
</template>

<script>
import History from "./History";
import { mapGetters } from "vuex";
export default {
  name: "Calculator",
  components: {
    History: History
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(["getHistory"])
  },
  data() {
    //state manage
    return {
      userData:[],
      preNum: null,
      number: "",
      operator: null,
      operatorClicked: false,
    };
  },
  watch: {
    msg: function() {
      this.userData.push(this.username,this.email);
    }
  },
  created() {
    this.username = this.$route.params.username;
    this.email=this.$route.params.email;
  },
  methods: {
    clear() {
      this.number = "";
    },
    append(num) {
      if (this.operatorClicked) {
        (this.number = ""), (this.operatorClicked = false);
      }
      this.number = `${this.number}${num}`;
    },
    remove() {
      this.number = this.number.slice(0, -1);
    },
    dot() {
      //check if only one dot is add
      if (this.number.indexOf(".") === -1) {
        this.append(".");
      }
    },
    sign() {
      this.number =
        this.number.charAt(0) === "-"
          ? this.number.slice(1)
          : `-${this.number}`;
      this.setPrevNum();
    },
    percent() {
      this.number = `${parseFloat(this.number) / 100}`;
      this.setPrevNum();
    },
    addition() {
      this.operator = (a, b) => a + b;
      this.setPrevNum();
    },
    substraction() {
      this.operator = (a, b) => a - b;
      this.setPrevNum();
    },
    multiplication() {
      this.operator = (a, b) => a * b;
      this.setPrevNum();
    },
    division() {
      this.operator = (a, b) => a / b;
      this.setPrevNum();
    },
    setPrevNum() {
      this.preNum = this.number;
      this.operatorClicked = true;
    },
    equal() {
      this.number = `${this.operator(
        parseFloat(this.preNum),
        parseFloat(this.number)
      )}`;
      this.preNum = "";
      this.$store.commit("addToHistory", { number: this.number });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  width: 10vw;
  height: 10vh;
  font-size: 1.5em;
  justify-content: center;
  align-items: center;
  display: flex;
}
.calculator {
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
}
.basic-calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 30%;
  font-size: 25px;
}
.display {
  text-align: right;
  grid-column: 1/5;
  background-color: #999898 !important;
  color: #fff;
  padding: 0.5em;
  font-size: 1.5em;
}
.clear {
  color: red;
}
.equal {
  background-color: rgb(47, 196, 47) !important;
}
.btn {
  background-color: #ebe8e8;
  border: 0.5px solid grey;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
}
.btn:hover {
  background-color: rgb(141, 138, 138);
}
.operator {
  background-color: rgb(240, 139, 93);
  color: #fff;
}
#displayuser {
  margin: auto;
  text-align: center;
  border: 1px solid #000;
}
th {
  font-family: "Roboto" sans-serif;
  font-family: 22px;
  padding: 5px;
  border-bottom: 1px solid #000;
}
td {
  font-family: "Sen", sans-serif;
}

#btn-history {
    color: #fff;
    background-color:#999898;
    border-color: #999898;
    font-size: 20px;
}

#btn-history:hover {
  background-color: rgb(240, 139, 93);
}
</style>
