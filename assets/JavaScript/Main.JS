//#region Custom Clear Button for Search
// Get references to the elements
const searchInput = document.getElementById('CustomSearch');
const clearBtn = document.getElementById('clear-btn');
const overlayContainer = document.getElementById('overlayContainer');
const srcInput = document.getElementById('src-Input');

// Listen for input changes on the search bar
searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 0) {
        clearBtn.classList.add('show'); // Show the clear button
        overlayContainer.classList.add('active'); // Add class when input has value
    } else {
        clearBtn.classList.remove('show'); // Hide the clear button
        overlayContainer.classList.remove('active'); // Remove class when input is empty
    }
});

// Add functionality to clear the search input when the clear button is clicked
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.remove('show'); // Hide the clear button after clearing
    overlayContainer.classList.remove('active'); // Remove class after clearing
});

// Add/remove 'active' class to src-Input on focus/blur of the search input
searchInput.addEventListener('focus', () => {
    overlayContainer.classList.add('active'); // Add class on focus
    srcInput.classList.add('active'); // Add class to srcInput to expand width
});

searchInput.addEventListener('blur', () => {
    if (searchInput.value.length === 0) {
        overlayContainer.classList.remove('active'); // Remove class on blur if input is empty
    }
    srcInput.classList.remove('active'); // Remove class to reset width
});

//#endregion Custom Clear Button for Search
