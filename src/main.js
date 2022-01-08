import {visualizeProject, closeAddList, visualizeAddList} from './dom.js'

if (localStorage.getItem("myList") !== null) {
    var myList = JSON.parse(localStorage.getItem("myList"));
    console.log("myList loaded");
} else {
    var myList = {};
    console.log("myList created");
    console.log(visualizeAddList);
}

function addProject(project){
    myList[project] = project;
    localStorage.setItem(myList, JSON.stringify(myList));
}

function deleteProject(){
    var parent = this.parentElement;
    delete myList[parent.children[0].textContent];
    localStorage.setItem(myList, JSON.stringify(myList));
}

document.getElementById("ADD_LIST").addEventListener('click', visualizeAddList);
document.getElementById("deleteProject").addEventListener('click', deleteProject);
document.getElementById("closeAddList").addEventListener('click', closeAddList);

