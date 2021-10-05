<template>
  <div data-role="content" style="padding-top: 77px;">
    <div class="space">
      <div id="controls">
        <input type="text" v-model="task" placeholder="Task...">
        <button data-role="button" @click="addTask" class="positive space">Add</button>
      </div>
      <div data-role="tab" id="tab-content" data-title="today" style="display: block;">
        <div data-role="list">
          <ul>
            <li v-for="task in list" :key="task"><a class="secondary" data-role="button">{{ task.description }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    title: String
  },
  data() {
    return {
      task:''
    }
  },
  computed: {
    list(){
      return this.$store.state.tasks.filter(task => task.type == this.$store.state.currentList)
    }
  },
  methods: {
    addTask() {
      const entry = this.task
      this.$store.commit('addTask', entry)
      this.task = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  src: local("Ubuntu Light"), local("Ubuntu-Light"), url(../assets/ubuntu-light.woff) format("woff");
}
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  src: local("Ubuntu Light"), local("Ubuntu-Light"), url(../assets/ubuntu-light.woff) format("woff");
}
[data-role="list"] {
  border-top: 1px solid #f0f0f0;
}
[data-role="list"] header {
  border-bottom: 0.1rem solid #c9c9c9;
  line-height: 1.8rem;
  color: #787878;
  font-size: 0.9rem;
  padding-left: 1rem;
}
[data-role="list"] ul {
  list-style: none;
  overflow: hidden;
}
[data-role="list"] ul li {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 3.1rem;
  border-bottom: solid 0.1rem #c7c7c7;
  color: #787878;
  position: relative;
}
[data-role="list"] ul li > a {
  text-decoration: none;
  color: #787878;
  display: block;
  height: 3rem;
  position: relative;
  border: none;
  line-height: 3rem;
  padding-left: 1rem;
  padding-right: 1.5rem;
  border-top: 1px solid #ebebeb;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
[data-role="list"] ul li > a:after {
  content: "";
  background: transparent url(../assets/img/chevron@27.png) no-repeat 0.5rem 0.5rem;
  background-size: 40% 75%;
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 50%;
  right: 0;
  margin-top: -1.2rem;
  z-index: 0;
}
[data-role="list"] ul li > a:active {
  background: #e6e6e6;
  border-color: #ebebeb;
}
[data-role="list"] ul li p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  display: block;
  color: #787878;
  font-size: 0.9rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  line-height: 1rem;
}
[data-role="list"] ul li p:only-child, [data-role="list"] ul li p:first-of-type:last-of-type {
  line-height: 2.1rem;
}
[data-role="list"] ul li p + p {
  color: rgba(136, 136, 136, 0.8);
  padding-top: 0.1rem;
  font-size: 0.8rem;
}
[data-role="list"] ul li > label {
  z-index: 9;
  width: 4.5rem;
  height: 2.2rem;
  right: 0.5rem;
  margin-top: -1.1rem;
  position: absolute;
  top: 50%;
}
[data-role="list"] aside {
  float: left;
  margin: -1.2em 0 0 0;
  max-width: 100%;
  vertical-align: bottom;
  position: relative;
  top: 50%;
  z-index: 2;
}
[data-role="list"] aside img {
  border-radius: 6px;
  margin-bottom: 0;
  float: left;
}
[data-role="list"] aside:after {
  background: url(../assets/img/ubuntushape_medium_radius_idle@18.png) no-repeat;
  background-size: 100% 100%;
  content: ' ';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
[data-role="list"] > header + ul li {
  padding-left: 20px;
}
input[type="text"] {
  -webkit-box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.1);
  background: #cfcfcf;
  border: 0;
  border-radius: 6px;
  color: #757373;
  font-family: Ubuntu;
  font-size: 0.8rem;
  padding: 8px;
}

input[type="text"]:focus {
  background: #fff;
  color: #757373;
  font-family: Ubuntu;
}
</style>
