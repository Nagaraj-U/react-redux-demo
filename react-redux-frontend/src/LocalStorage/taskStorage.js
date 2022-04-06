export const addtask = (task) =>{
    let tasks = []
    if(localStorage.getItem("task") !== null){
         tasks = JSON.parse(localStorage.getItem("task"))
    }
    tasks.push(task)
    localStorage.setItem("task",JSON.stringify(tasks))
}

export const getTasks = () =>{
    let tasks = [];
    if(localStorage.getItem('task') === null){
        return tasks;
    }else{
        tasks = JSON.parse(localStorage.getItem('task'))
    }
    return tasks;
}

export const deleteTasks = () =>{
    if(localStorage.getItem("task")){
        localStorage.removeItem("task")
    }
}

export const updateStorageTask = (currentTask) =>{
    let _tasks = getTasks()
    let _updatedTask = {}
    let idx = -1;
    _tasks.map((t,index)=>{
        if(currentTask.id == t.id){
            idx = index   
        }
    })
    let _newTasks = _tasks.splice(idx,1,currentTask)
    localStorage.setItem("task",JSON.stringify(_tasks))
}