import {visualizeProject, closeAddList, visualizeAddList} from './dom.js'

if (localStorage.getItem("myList") !== null) {
    var myList = JSON.parse(localStorage.getItem("myList"));
    console.log("myList loaded");
} else {
    var myList = {};
    console.log("myList created");
}

function addProject(project){
    myList[project] = project;
    localStorage.setItem(myList, JSON.stringify(myList));
}

function deleteProject(btn){
    var parent = btn.parentElement;
    delete myList[parent.children[0].textContent];
    localStorage.setItem(myList, JSON.stringify(myList));
}



