Vue.createApp({
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
      document.querySelectorAll("#menu-list li").forEach((item) => {
        item.setAttribute("class","")
      })
      event.target.setAttribute("class", "active")
      let title = event.target.getAttribute('data-page')
      document.getElementById("tab-title").innerText = title
    }
  }
}).mount("#header")
