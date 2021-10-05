import { createStore } from 'vuex'
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
 return date;
}

const dateToday = new Date()
const dateTomorrow = new Date().addDays(1)

export default createStore({
  state: {
    currentList: 'today',
    tasks: JSON.parse(localStorage.tasks),
    date: dateToday.toLocaleString()
  },
  mutations: {
    updateList (state, payload) {
      state.currentList = payload
      if (payload == 'today') {
        state.date = dateToday
      } else if (payload == 'tomorrow') {
        state.date = dateTomorrow
      } else {
        state.date = 'later'
      }
    },
    addTask(state, payload) {
      state.tasks.push({'description': payload, 'type': state.currentList, date: state.date})
      localStorage.tasks = JSON.stringify(state.tasks)
    }
  },
  getters: {
    selectedList: state => {
      return state.currentList;
    }
  }
})
