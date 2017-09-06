import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-app',
    templateUrl: '/app/app.component2.html'
})
export class AppComponent {

    tasks: Todo[] = JSON.parse(localStorage.getItem("spotData"));
    temp_task:Todo;
    addTodo(task: string): void {
        
       if(task==null)
           return;

       if(this.tasks==null)
        this.tasks = [];
       this.tasks.push(new Todo(task));

       var serialObj = JSON.stringify(this.tasks);
       localStorage.setItem("spotData", serialObj);
    }

    deleteTodo(task:Todo): void{
        
        this.tasks.splice(this.tasks.indexOf(task),1);

        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("spotData", serialObj);
        
    }

    completeTodo(task:Todo): void{
        
        var t = this.tasks[this.tasks.indexOf(task)];
        
        if(t.complete==true)
            t.complete=false;
        else t.complete = true;
       //t.done==false?t.done=true:t.done=false;

       var serialObj = JSON.stringify(this.tasks);
       localStorage.setItem("spotData", serialObj);
    }

}