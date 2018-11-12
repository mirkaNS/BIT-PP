const dataModule = (() => {
    const storage = {
        listOfTask: [],
    }
    class List {
        constructor(task) {
            this.task = task;
        }
        getInfo() {
            return `${this.task}`;
        }
    }

    const creatTask = (task) => new List(task);
    const addTask = (task) => storage.listOfTask.push(task);
    return {

        creatTask,
        addTask,
    }

})();

const uiModule = (() => {
    const $task = document.querySelector(".listOfTask");
    const $button = document.querySelector("#button");
    const $listOfCheck = document.querySelector(".check");





})();