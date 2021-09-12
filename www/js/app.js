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
	    choosenTask:null,
	    moveTaskDialog:'',
	    dates: {
	      today: date.toLocaleDateString(),
	      tomorrow: dateTomorrow.toLocaleDateString(),
	      later: 'later',
	    },
	    tasks: [],
	    taskToRemove:null,
	    task_entry: ''
	  }
	},
	watch: {
	  countertoday() {
	    this.tabTitleToday = `Today(${this.countertoday})`;
	  },
	   countertomorrow() {
	    this.tabTitleTomorrow = `Tomorrow(${this.countertomorrow})`
	  },
	  counterlater() {
	    this.tabTitleLater = `Later(${this.counterlater})`
	  }
	 },
	 mounted() {
	  try {
	    this.UI = new UbuntuUI();
      this.UI.init()
      this.moveTaskDialog = this.UI.dialog('taskMoveDialog')
	  } catch(e) {
	  }

    if (localStorage.tasks) {
         this.tasks = JSON.parse(localStorage.tasks)
    }

  },
	methods: {
	  getTasks(type) {
	    let counterProp = `counter${type}`
	  	let filterTasks = []
	     this.tasks.forEach( (val, index) => {
	      //Fix old format
	      if (!this.tasks[index].type) {
	        this.tasks[index].type = type
	        val.type = type
	        localStorage.tasks = JSON.stringify(this.tasks)
	      }

	      if (val.type == type) {
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
	  moveTaskShowDialog(event) {
	    this.choosenTask = event.target.getAttribute('data-item-id')
	    this.taskToRemove = event.currentTarget
	    this.moveTaskDialog.show()
	  },
	  moveTask(type)  {
	    this.tasks[this.choosenTask].date = this.dates[type];
	    localStorage.tasks = JSON.stringify(this.tasks)
	    this.choosenTask = null
	    this.moveTaskDialog.hide()
	  },
	  addTask(type) {
	    const date = this.dates[type]
	    if (this.task_entry !== '') {
	        this.tasks.push({
	    	    'description':this.task_entry,
	    	    'date': date,
	    	    'type':type
	    	  })
	      this.updateCounter(type)
		    localStorage.tasks = JSON.stringify(this.tasks)
		    this.task_entry = ''
	    }

	  },
	  removeTask() {
	    if(this.tasks[this.choosenTask]) {
	      const countBefore = this.tasks.length
        const type = this.tasks[this.choosenTask].type
	      this.tasks.splice(this.choosenTask,1)

	      if (this.tasks.length < countBefore) {
	        this.updateCounter(type,true)
	        this.taskToRemove.remove()
	      }
	    }

	    if (this.moveTaskDialog) {
	    	this.moveTaskDialog.hide()
	    }

	  },
	  updateCounter(type, subtract) {
	    let prop = `counter${type}`
	    if (subtract) {
	      this[prop]-=1
	    } else {
	      this[prop]+=1
	    }

	  },
	  finishTask(event){
	    if(event.target.getAttribute('class') == 'positive') {
	      this.taskToRemove = event.currentTarget
	      this.choosenTask = event.target.getAttribute('data-item-id');
	      this.removeTask()

	    } else {
	      event.target.setAttribute('class','positive')
	      this.tasks[event.target.getAttribute('data-item-id')].done = true

	    }

	    localStorage.tasks = JSON.stringify(this.tasks)
	    this.choosenTask = null
	  }
	}
}).mount('#app')
