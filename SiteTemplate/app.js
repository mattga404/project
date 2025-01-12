


// Content functions
function loadInventory() {
    return `
        <h1>INVENTORY Page</h1>
        <p>Welcome to the Home page!</p>
    `;
}

function loadItems() {
    return `
        <h1>ITEM Page</h1>
        <p>This is the About section of our SPA.</p>
    `;
}

function loadOrders() {
    return `
        <h1>ORDER Page</h1>
        <p>Feel free to reach out to us via this Contact page!</p>
    `;
}

function loadRecipes() {
    return `
        <h1>RECIPE Page</h1>
        <p>Feel free to reach out to us via this Contact page!</p>
    `;
}




// Dynamically update the content based on the hash
function updateContent() {
    const app = document.getElementById('app');
    const hash = window.location.hash; // Get the current hash (e.g., "#home")

    if (hash === '#inventory') {
        app.innerHTML = loadInventory();
    } else if (hash === '#items') {
        app.innerHTML = loadItems();
    } else if (hash === '#orders') {
        app.innerHTML = loadOrders();
    } else if (hash === '#recipes') {
        app.innerHTML = loadRecipes();
    } else if (hash === '#invoices') {
        app.innerHTML = loadInvoices();
    }
    
    else {
        app.innerHTML = `<h1>404 - Page Not Found</h1>`;
    }
}

// Event listener for when the hash changes
window.addEventListener('hashchange', updateContent);

// Initialize the content on page load
window.addEventListener('load', updateContent);
