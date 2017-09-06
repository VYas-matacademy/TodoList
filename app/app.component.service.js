"use strict";
var todo_1 = require("./todo");
var TaskDataService = (function () {
    function TaskDataService() {
        this.TaskData = JSON.parse(localStorage.getItem("spotData"));
    }
    TaskDataService.prototype.getTasksData = function () {
        return this.TaskData;
    };
    TaskDataService.prototype.addTaskData = function (task) {
        if (task == null || task == undefined || task.trim() == "")
            return;
        this.tasks.push(new todo_1.Todo(task));
        localStorage.serialTasks = JSON.stringify(this.tasks);
        localStorage.setItem("spotData", localStorage.serialTasks);
    };
    return TaskDataService;
}());
exports.TaskDataService = TaskDataService;
//# sourceMappingURL=app.component.service.js.map