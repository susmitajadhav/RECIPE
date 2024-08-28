function generatePrepFields() {
    const container = document.getElementById('prepFieldsContainer');
    container.innerHTML = '';  // Clear existing fields

    function changeDropdownColor(color) {
        const dropdown = document.getElementById('prepProcess');
    
        // Remove any existing color classes
        dropdown.classList.remove('custom-color-red', 'custom-color-blue');
    
        // Add the new color class
        if (color === 'red') {
          dropdown.classList.add('custom-color-red');
        } else if (color === 'blue') {
          dropdown.classList.add('custom-color-blue');
        }
      }

      document.getElementById('prepProcess').addEventListener('change', function() {
        const selectedValue = this.value;
        // Change color based on selected value (example logic)
        if (selectedValue === '1') {
          changeDropdownColor('red');
        } else if (selectedValue === '2') {
          changeDropdownColor('blue');
        }
      });


    const numberOfSteps = document.getElementById('prepProcess').value;

    for (let i = 1; i <= numberOfSteps; i++) {
        const fieldSet = document.createElement('div');
        fieldSet.className = 'form-group';

        const imageLabel = document.createElement('label');
        // Use backticks for template literals
        imageLabel.innerText =` Step ${i} - Recipe Image:`;
        fieldSet.appendChild(imageLabel);

        const imageInput = document.createElement('input');
        imageInput.type = 'file';
        imageInput.name = `recipeImage${i}`;
        imageInput.accept = 'image/*';
        fieldSet.appendChild(imageInput);

        const processLabel = document.createElement('label');
        // Use backticks for template literals
        processLabel.innerText = `Step ${i} - Recipe Process:`;
        fieldSet.appendChild(processLabel);

        const processTextarea = document.createElement('textarea');
        processTextarea.name = `recipeProcess${i}`;
        processTextarea.rows = '3';
        // Use backticks for template literals
        processTextarea.placeholder = `Enter the process for step ${i}`;
        fieldSet.appendChild(processTextarea);

        container.appendChild(fieldSet);
    }
}