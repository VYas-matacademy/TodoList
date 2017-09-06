import { Todo } from './todo';

export class TaskDataService {

    private TaskData: Todo[] = JSON.parse(localStorage.getItem("spotData"));

    getTasksData(): Todo[] {
        return this.TaskData;
    }

    addTaskData(task: string) {

        if(task==null || task==undefined || task.trim()=="")
            return;
        this.tasks.push(new Todo(task));        
        localStorage.serialTasks = JSON.stringify(this.tasks);
        
        localStorage.setItem("spotData", localStorage.serialTasks);
    }
}