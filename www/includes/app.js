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
	    choosenTask:null,
	    moveTaskDialog:'',
	    dates: {
	      today: date.toLocaleDateString(),
	      tomorrow: dateTomorrow.toLocaleDateString(),
	      later: 'later',
	    },
      type: 'today',
	    tasks: [],
	    taskToRemove:null,
	    task_entry: ''
	  }
	},
	 mounted() {

      this.UI = new UbuntuUI();
      this.UI.init()
      this.moveTaskDialog = this.UI.dialog('taskMoveDialog')

      if (localStorage.tasks) {
         let task_list = JSON.parse(localStorage.tasks)
         task_list.forEach((item, i) => {
           if (item.date == this.dates.today) {
             console.log('update')
             item.type = 'today'
           }
           if (item.date == this.dates.tomorrow) {
             item.type = 'tomorrow'
           }
           if (item.date == this.dates.later) {
             item.type = 'later'
           }
         });
         localStorage.tasks = JSON.stringify(task_list)
         this.tasks = task_list

      }
  },
	methods: {
    setType(event) {
      if (event.target.getAttribute('data-page')) {
        this.type = event.target.getAttribute('data-page')
      }
    },
	  closeDialog() {
	    this.moveTaskDialog.hide();
	  },
	  moveTaskShowDialog(event) {
	    this.choosenTask = event.target.getAttribute('data-item-id')
      console.log(this.choosenTask)
	    this.taskToRemove = event.currentTarget
	    this.moveTaskDialog.show()
	  },
	  moveTask(type)  {
	    this.tasks[this.choosenTask].date = this.dates[type];
      this.tasks[this.choosenTask].type = type;
	    localStorage.tasks = JSON.stringify(this.tasks)
	    this.choosenTask = null
	    this.moveTaskDialog.hide()
	  },
	  addTask() {
      const type = this.type
	    const date = this.dates[type]
	    if (this.task_entry !== '') {
	        this.tasks.push({
	    	    'description':this.task_entry,
	    	    'date': date,
	    	    'type':type
	    	  })
		    localStorage.tasks = JSON.stringify(this.tasks)
		    this.task_entry = ''
	    }
	  },
	  removeTask() {
	    if(this.tasks[this.choosenTask]) {
	      const countBefore = this.tasks.length
	      this.tasks.splice(this.choosenTask,1)

	      if (this.tasks.length < countBefore) {
	        this.taskToRemove.remove()
	      }
	    }

	    if (this.moveTaskDialog) {
	    	this.moveTaskDialog.hide()
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
