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
	    types: {
	      today: "today",
	      later: "later",
	      tomorrow: "tomorrow"
	    },
	    dates: {
	      today: date.toLocaleDateString(),
	      tomorrow: dateTomorrow.toLocaleDateString()
	    },
	    tasks: [],
	    task_entry: ''
	  }
	},
	mounted() {
	UI = new UbuntuUI()
  UI.init();
    if (localStorage.tasks) {
         this.tasks = JSON.parse(localStorage.tasks)
    }
  },
	methods: {
	  addTask(type) {
	    if (this.task_entry !== '') {
	      if (type == this.types.tomorrow) {
	        this.tasks.push({
	    	    'description':this.task_entry,
	    	    'date': this.dates.tomorrow
	    	  })
	      } else if(type == this.types.today) {
	    	  this.tasks.push({
	    	    'description':this.task_entry,
	    	    'date': this.dates.today
	    	  })
		    } else {
	          this.tasks.push({
	    	    'description':this.task_entry,
	    	    'date': this.types.later
	    	  })
		    }
		    localStorage.tasks = JSON.stringify(this.tasks)
		    this.task_entry = ''
	    }
	
	  },
	  getTodayTasks() {
	    let tasksToday = []
	    this.tasks.forEach( (val) => {
	      if (val.date == this.dates.today) {
	        tasksToday.push(val.description)
	      }
	    })
	    return tasksToday
	  },
	  getTomorrowTasks() {
	    let tasksTomorrow = []
	     this.tasks.forEach( (val) => {
	      if (val.date == this.dates.tomorrow) {
	        tasksTomorrow.push(val.description)
	      }
	    })
	
	    return tasksTomorrow
	  },
	  getLaterTasks() {
	    let tasksLater = []
	     this.tasks.forEach( (val) => {
	      if (val.date == this.types.later) {
	        tasksLater.push(val.description)
	      }
	    })

	    return tasksLater
	  },
	  finishTask(event){
	    //Verwijder
	    if(event.target.getAttribute('class') == 'positive') {
	      event.currentTarget.remove()
	      this.tasks.forEach((val,idx) => {
	        if (event.currentTarget.textContent == val.description) {
	          this.tasks.splice(idx,1)
	        }
	      })
	    } else {
	      event.target.setAttribute('class','positive')
	    }
	    
	    localStorage.tasks = JSON.stringify(this.tasks)
	  }
	}
}).mount('#app')
