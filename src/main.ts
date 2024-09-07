// Select all toggle buttons
const toggleButtons = document.querySelectorAll<HTMLButtonElement>('.toggle-button');

// Function to toggle the visibility of the content sections
const toggleContent = (event: Event) => {
  const target = event.currentTarget as HTMLButtonElement;
  const targetId = target.getAttribute('data-target');
  
  if (targetId) {
    // Find the content section associated with the button
    const content = document.querySelector<HTMLElement>(`section#${targetId} .content`);
    
    if (content) {
      // Toggle the visibility of the content section
      content.classList.toggle('show');
    } else {
      console.error(`Content section with ID '${targetId}' not found.`);
    }
  } else {
    console.error(`Button missing 'data-target' attribute.`);
  }
};

// Add event listeners to all toggle buttons
toggleButtons.forEach(button => {
  button.addEventListener('click', toggleContent);
});
