'use strict';


function changeSection() {
    const buttons = document.querySelectorAll('li');
    const sections = document.querySelectorAll('.section');
    
    buttons.forEach( (e, i) => {
        e.addEventListener('click', () => {
            buttons.forEach( button => {
                button.classList.remove('active');
            });
            sections.forEach( section => {
                section.classList.remove('active');
            })
            e.classList.add('active');
            sections[i].classList.add('active');
        });
    })
    
}
function deployPanel() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach( panel => {
        const title = panel.children.item(0);
        const content = panel.children.item(1);
        title.addEventListener('click', () => {
            const caret = title.children.item(1);
            if(!caret.classList.contains('active')) {
                caret.classList.add('active');
                content.classList.add('active');
            }
            else {
                caret.classList.remove('active');
                content.classList.remove('active');
            }
             
        });
    })
}

function app() {
    changeSection();
    deployPanel();
}
window.onload = app();
