function visualizeProject(proj){
    var prnt = document.getElementById("projects");
    var chld = document.createElement("div")
}


function visualizeAddList(){
    var elem = document.getElementById('add_list');
    document.getElementById('main').style.display = 'none';
    elem.style.display = 'inline';
}

function closeAddList(){
    var title = document.getElementById("listInput").value
    addProject(title);
    visualizeProject(title);
    var elem = document.getElementById('add_list');
    elem.setAttribute('display', 'none')
    document.getElementById('main').setAttribute('display', 'inline');
}


export {visualizeProject, visualizeAddList, closeAddList }