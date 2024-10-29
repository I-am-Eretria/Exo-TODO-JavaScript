/* Faire fonctionner le bouton « Add a task » */

// On ajoute un écouteur d’évènement sur le bouton pour appeler une fonction ajout
const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask); // add a task on click

// On crée la fonction d’ajout
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

function addTask(){
    const newTask = taskCard.cloneNode(true) // clone the task card
    const newDelBtn = newTask.querySelector('.delBtn')  // voir ligne 51
    const newTextArea = newTask.querySelector('.task')

    newTextArea.value = "New Task" // set new task text to "New Task"

    // voir ligne 51
    newDelBtn.addEventListener('click', function() {    // add delete event listener to new task
        deleteTask(newTask); // target the new task
    });

    tasksContainer.appendChild(newTask) // append new task to the tasks container
    updateCount();                      // update number of cards (ligne 60)
}

/* 
Ligne 12 : on clone l’élément NewTask (à savoir la card créée en HTML)
Ligne 14/16 : on définit la valeur de la zone de texte afin qu’elle ne soit pas vide
Ligne 23 : on ajoute cette nouvelle carte dans le DOM (afin de l’afficher. Faites le test d’enlever cette ligne et d’en constater le changement)
*/


//---------------------------------------------------------------------------------------------------------------------------------------------


/* Faire fonctionner le bouton de suppression */

// On ajoute un écouteur d’évènement sur le bouton pour appeler une fonction suppression
const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function() {       // delete default task on click
    deleteTask(taskCard);                           // target the right task
});

// On crée la fonction de suppression
function deleteTask(task){
    task.remove();                                  // remove the task
    updateCount();                                  // update number of cards (ligne 60)
}

// On ajoute l’écouteur d’évènement sur l’élément cloné dans la fonction ajout, afin de faire fonctionner le bouton suppression
// sur les nouvelles cards
    // -> voir ligne 13
    // -> voir lignes 19/20/21


//---------------------------------------------------------------------------------------------------------------------------------------------


/* Ajouter un compteur de cards */

updateCount();  // affiche 1 quand on charge la page, une par défaut puis grâce à l'ajout de la fonction ligne 24 et 48 -> s'actualise

function updateCount(){
    let numb = document.getElementById("todoCards").childElementCount;  // compte le nombre d'enfants dans l'élément avec pour id todoCards
    document.getElementById("nbCards").innerHTML = numb;                // ajoute le nombre d'enfants (cards) dans le fichier HTML
}




