function updateColspan() {
    const emptyCol = document.getElementById("emptyCol");
    const tableCol = document.getElementById("tableCol");
    
    // Check if elements exist before trying to modify them
    if (!emptyCol || !tableCol) return;
    
    if (window.innerWidth <= 575) {
        emptyCol.style.display = "none"; // Hide the first empty td
        tableCol.setAttribute("colspan", "6");
    } else {
        emptyCol.style.display = "";
        emptyCol.setAttribute("colspan", "3");
        tableCol.setAttribute("colspan", "3");
    }
}

// Run on load and resize
window.addEventListener("DOMContentLoaded", updateColspan);
window.addEventListener("resize", updateColspan);