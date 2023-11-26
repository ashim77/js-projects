// You are tasked with creating a basic task tracker application in JavaScript. The application should allow
// users to add and remove tasks, as well as mark tasks as completed. You have started working on the
// code but encountered some issues. 

const taskTracker = {
    tasks: [],
    addTask: function(task) {
      this.tasks.push(task); // Use "this" to access the tasks property of the object.
    },
    removeTask: function(taskIndex) {
      if (taskIndex >= 0 && taskIndex < this.tasks.length) { // Use "this" to access the tasks property.
        this.tasks.splice(taskIndex, 1);
      } else {
        throw new Error("Invalid task index.");
      }
    },
    completeTask: function(taskIndex) {
      if (taskIndex >= 0 && taskIndex < this.tasks.length) { // Use "this" to access the tasks property.
        this.tasks[taskIndex].completed = true;
      } else {
        throw new Error("Invalid task index.");
      }
    },
    getTasks: function() {
      return this.tasks; // Use "this" to access the tasks property.
    }
  };
  
  taskTracker.addTask({ title: "Finish project", completed: false });
  taskTracker.addTask({ title: "Buy groceries", completed: false });
  taskTracker.completeTask(0);
  console.log(taskTracker.getTasks());
  