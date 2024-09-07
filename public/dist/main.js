"use strict";
const toggleButtons = document.querySelectorAll('.toggle-button');
const toggleContent = (event) => {
    const target = event.currentTarget;
    const targetId = target.getAttribute('data-target');
    if (targetId) {
        const content = document.querySelector(`section#${targetId} .content`);
        if (content) {
            content.classList.toggle('show');
        }
        else {
            console.error(`Content section with ID '${targetId}' not found.`);
        }
    }
    else {
        console.error(`Button missing 'data-target' attribute.`);
    }
};
toggleButtons.forEach(button => {
    button.addEventListener('click', toggleContent);
});
