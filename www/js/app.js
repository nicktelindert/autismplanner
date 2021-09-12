Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
 return date;
}

const date = new Date()
const dateTomorrow = new Date().addDays(1)

Vue.createApp({
	data() {
	  return {
	    UI: null,
	    tabTitleToday: 'Today',
	    tabTitleTomorrow: 'Tomorrow',
	    tabTitleLater: 'Later',
	    countertoday:0,
	    countertomorrow:0,
	    counterlater:0,
	    choosenTask:0,
	    moveTaskDialog:'',
	    dates: {
	      today: date.toLocaleDateString(),
	      tomorrow: dateTomorrow.toLocaleDateString(),
	      later: 'later',
	    },
	    tasks: [],
	    taskToRemove:'',
	    task_entry: ''
	  }
	},
	watch: {
	  countertoday() {
	    this.tabTitleToday = `${this.tabTitleToday}(${this.countertoday})`;
	  },
	   countertomorrow() {
	    this.tabTitleTomorrow = `${this.tabTitleTomorrow}(${this.countertomorrow})`;
	  },
	  counterlater() {
	    this.tabTitleLater = `${this.tabTitleLater}(${this.counterlater})`;
	  }
	 },
	 mounted() {
	  this.UI = new UbuntuUI();
    this.UI.init()
    this.moveTaskDialog = this.UI.dialog('taskMoveDialog')
    if (localStorage.tasks) {
         this.tasks = JSON.parse(localStorage.tasks)
    }

    this.$nextTick(function () {
        UI.tabs.selectedTabIndex(0)

     })
  },
	methods: {
	  getTasks(type) {
	    let counterProp = `counter${type}`
	    console.log(counterProp)
	  	let filterTasks = []
	     this.tasks.forEach( (val, index) => {
	      if (val.date == this.dates[type]) {
	        let done = false;
	        if (val.done) {
	          done = val.done
	        }
	        filterTasks.push({ description: val.description, idx: index, done: done})
	      }
	    })

	    this[counterProp] = filterTasks.length;

	    return filterTasks
	  },
	  closeDialog() {
	    this.moveTaskDialog.hide();
	  },
	  moveTask(event) {
	    this.choosenTask = event.target.getAttribute('data-item-id')
	    this.taskToRemove = event.currentTarget
	    this.moveTaskDialog.show()
	  },
	  moveTaskToToday() {
	    const description = this.tasks[this.choosenTask].description
	    this.tasks.push({
	      'description':description,
	      'date': this.dates.today
	    })
	    this.removeTask(this.choosenTask)
	    this.moveTaskDialog.hide()
	  },
	  moveTaskToTomorrow() {
	  	const description = this.tasks[this.choosenTask].description
	    this.tasks.push({
	      'description':description,
	      'date': this.dates.tomorrow
	    })
	    this.removeTask(this.choosenTask)
	    this.moveTaskDialog.hide()
	  },
	  addTask(type) {
	    const date = this.dates[type]
	    if (this.task_entry !== '') {
	        this.tasks.push({
	    	    'description':this.task_entry,
	    	    'date': date
	    	  })

		    localStorage.tasks = JSON.stringify(this.tasks)
		    this.task_entry = ''
	    }

	  },
	  removeTask(idx) {
  	  this.tasks.splice(idx,1)
	    this.taskToRemove.remove()
	  },
	  finishTask(event){
	    //Remove&nbsp;
	    if(event.target.getAttribute('class') == 'positive') {
	      this.taskToRemove = event.currentTarget
	      this.removeTask(event.target.getAttribute('data-item-id'))

	    } else {
	      event.target.setAttribute('class','positive')
	      this.tasks[event.target.getAttribute('data-item-id')].done = true
	    }
	    
	    localStorage.tasks = JSON.stringify(this.tasks)
	  }
	}
}).mount('#app')
