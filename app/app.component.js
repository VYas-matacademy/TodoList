"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var todo_1 = require("./todo");
var AppComponent = (function () {
    function AppComponent() {
        this.tasks = JSON.parse(localStorage.getItem("spotData"));
    }
    AppComponent.prototype.addTodo = function (task) {
        if (task == null)
            return;
        if (this.tasks == null)
            this.tasks = [];
        this.tasks.push(new todo_1.Todo(task));
        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("spotData", serialObj);
    };
    AppComponent.prototype.deleteTodo = function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("spotData", serialObj);
    };
    AppComponent.prototype.completeTodo = function (task) {
        var t = this.tasks[this.tasks.indexOf(task)];
        if (t.complete == true)
            t.complete = false;
        else
            t.complete = true;
        //t.done==false?t.done=true:t.done=false;
        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("spotData", serialObj);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'todo-app',
        templateUrl: '/app/app.component2.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map