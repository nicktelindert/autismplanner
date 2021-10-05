<template>
  <div data-role="header">
  <button data-role="tabs-btn" id="toggleMenu" @click="toggleMenu" style="display: block;"></button>
  <ul data-role="tabs" id="menu-list" :class="menuClass">
    <li data-role="tabitem" data-page="today" @click="switchTab" class="active">Today</li>
    <li data-role="tabitem" data-page="tomorrow" @click="switchTab">Tomorrow</li>
    <li data-role="tabitem" data-page="later" @click="switchTab">Later</li>
  </ul>
  <div id="tab-title" data-role="tabtitle">Today</div>
</div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    title: String
  },
  data() {
    return {
      menuClass: "closed"
    }
  },
  methods: {
    toggleMenu() {
      let className = "opened"
      if (this.menuClass == className) {
        className = " closed"
      }
      this.menuClass = className
    },
    switchTab(event) {
      this.toggleMenu()
      document.querySelectorAll("#menu-list li").forEach((item) => {
        item.setAttribute("class","")
      })
      event.target.setAttribute("class", "active")
      let title = event.target.getAttribute('data-page')
      document.getElementById("tab-title").innerText = title
      this.$store.commit('updateList', title)

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

[data-role="header"] {
  background: #ededed;
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 10;
}
[data-role="header"]:after {
  background: #c2c2c2;
  content: "";
  border-top: 1px solid #afafaf;
  height: 15px;
  width: 100%;
  display: block;
  position: absolute;
  top: 60px;
}

[data-role="tabs"] {
  background: #ededed;
  -webkit-box-shadow: 0 0px 10px rgba(140, 140, 140, 0.3);
  box-shadow: 0 0px 10px rgba(140, 140, 140, 0.3);
  width: 160px;
  max-height: 250px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  left: 0;
  top: 61px;
  z-index: 9;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;
}
[data-role="tabs"].opened {
  visibility: visible;
  opacity: 1;
}

[data-role="tabitem"] {
  position: relative;
  padding: 16px 16px;
  border-bottom: 1px solid #d9d9d9;
  text-align: left;
  font-size: 0.9rem;
  cursor: pointer;
}
[data-role="tabitem"]:only-child {
  border-bottom: 0;
}
[data-role="tabitem"].active {
  display: none;
}
[data-role="tabitem"].inactive {
  display: block;
}
[data-role="tabitem"]:active {
  background: rgba(0, 0, 0, 0.05);
}

[data-role="back-btn"] {
  background: #ededed;
  width: 40px;
  height: 60px;
  line-height: 60px;
  float: left;
  cursor: pointer;
  border: none;
  position: relative;
}
[data-role="back-btn"]:after {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: transparent url("/usr/share/icons/suru/actions/scalable/back.svg") no-repeat center center;
  background-size: 100%;
  margin: 0 auto;
}
[data-role="back-btn"]:disabled {
  background: transparent;
  width: 0;
}
[data-role="back-btn"]:active {
  background: rgba(0, 0, 0, 0.05);
}

[data-role="tabs-btn"] {
  background: #ededed;
  width: 40px;
  height: 60px;
  line-height: 60px;
  float: left;
  cursor: pointer;
  border: none;
  position: relative;
  z-index: 10;
}
a.menu-button{
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: transparent url("/usr/share/icons/suru/actions/scalable/navigation-menu.svg") no-repeat center center;
  background-size: 100%;
  float: left;
}
[data-role="tabs-btn"]:active {
  background: rgba(0, 0, 0, 0.05);
}

[data-role="back-btn"]:disabled + [data-role="tabtitle"],
[data-role="back-btn"] + [data-role="tabtitle"],
[data-role="tabs-btn"] + [data-role="tabtitle"],
[data-role="tabs"] + [data-role="tabtitle"] {
  width: calc(100% - 140px);
}

[data-role="tabtitle"] {
  font-family: "Ubuntu";
  font-size: x-large;
  font-weight: 300;
  text-decoration: none;
  background: #ededed;
  color: #5d5d5d;
  float: left;
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  z-index: 10;
}

[data-role="tab"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: top;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: none;
}
[data-role="tab"]:first-child {
  display: block;
}

[data-role="actions"] {
  float: right;
  height: 60px;
  display: inline-block;
  padding-right: 8px;
  background: #ededed;
  position: relative;
  z-index: 10;
}
[data-role="actions"] button {
  border: 0;
  padding: 0;
  width: 40px;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
  float: left;
  background: transparent;
}
[data-role="actions"] button img {
  position: relative;
  top: 5px;
}
[data-role="actions"] button:disabled {
  opacity: 0.3;
}
[data-role="actions"] button:after {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: transparent;
  background-size: 100%;
  margin: 0 auto;
}
[data-role="actions"] button:active {
  background: rgba(0, 0, 0, 0.05);
}
[data-role="actions"] [data-role="actions-wrapper"] {
  display: none;
}
[data-role="actions"] [data-role="actions-wrapper"]:first-child {
  display: block;
}

[data-role="actions-overflow-icon"] {
  background: transparent;
}
[data-role="actions-overflow-icon"]:after {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: transparent url("/usr/share/icons/suru/actions/scalable/contextual-menu.svg") no-repeat center center !important;
  background-size: 100% !important;
  margin: 0 auto;
}
[data-role="actions-overflow-icon"]:active {
  background: rgba(0, 0, 0, 0.05);
}

[data-role="actions-overflow-list"] {
  background: #ededed;
  -webkit-box-shadow: 0 0px 10px rgba(140, 140, 140, 0.3);
  box-shadow: 0 0px 10px rgba(140, 140, 140, 0.3);
  width: 160px;
  max-height: 250px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: 61px;
  z-index: 9;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;
}
[data-role="actions-overflow-list"].opened {
  visibility: visible;
  opacity: 1;
}
[data-role="actions-overflow-list"] li {
  position: relative;
  padding: 16px 16px;
  border-bottom: 1px solid #d9d9d9;
  text-align: left;
  font-size: 0.8rem;
  cursor: pointer;
  text-align: left;
  padding-left: 45px;
  cursor: pointer;
  background: transparent no-repeat center left;
  background-size: 20px;
  background-position-x: 10px;
}
[data-role="actions-overflow-list"] li:only-child {
  border-bottom: 0;
}
[data-role="actions-overflow-list"] li:active {
  background-color: rgba(0, 0, 0, 0.05);
}

[data-role="overlay"] {
  position: fixed;
  top: 75px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  background: transparent;
  display: none;
}
[data-role="overlay"].active {
  display: block;
}

#tab-title {
  text-transform: capitalize;
}
</style>
