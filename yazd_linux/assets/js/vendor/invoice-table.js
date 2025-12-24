document.addEventListener('DOMContentLoaded', function () {
    // Get the table body where products will be added
    const productTableBody = document.querySelector('#productTableRepeater tbody:first-of-type');
    const addItemBtn = document.getElementById('addItemBtn');

    // Add click event to the "Add Item" button
    addItemBtn.addEventListener('click', function () {
        addProductRow();
    });

    // Add event delegation for removal buttons (since they're dynamically added)
    productTableBody.addEventListener('click', function (e) {
        if (e.target.closest('#productRemoval')) {
            const row = e.target.closest('tr.product');
            row.remove();
            updateRowNumbers();
        }
    });

    // Function to add a new product row
    function addProductRow() {
        // Clone the first product row
        const newRow = productTableBody.querySelector('tr.product').cloneNode(true);

        // Clear input values in the new row
        const inputs = newRow.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.value = '';
            if (input.classList.contains('total-price')) {
                input.placeholder = '$0.00';
            } else if (input.classList.contains('product-rate')) {
                input.placeholder = '0.00';
            } else if (input.classList.contains('product-quantity')) {
                input.placeholder = '1';
            }
        });

        // Add the new row to the table
        productTableBody.appendChild(newRow);

        // Update row numbers
        updateRowNumbers();

        // Add event listeners for quantity/rate changes to calculate total
        addCalculationListeners(newRow);
    }

    // Function to update row numbers
    function updateRowNumbers() {
        const rows = productTableBody.querySelectorAll('tr.product');
        rows.forEach((row, index) => {
            row.cells[0].textContent = (index + 1).toString().padStart(2, '0');
        });
    }

    // Function to add calculation listeners to a row
    function addCalculationListeners(row) {
        const quantityInput = row.querySelector('.product-quantity');
        const rateInput = row.querySelector('.product-rate');
        const totalInput = row.querySelector('.total-price');

        const calculateTotal = () => {
            const quantity = parseFloat(quantityInput.value) || 0;
            const rate = parseFloat(rateInput.value) || 0;
            const total = quantity * rate;
            totalInput.value = '$' + total.toFixed(2);
        };

        quantityInput.addEventListener('input', calculateTotal);
        rateInput.addEventListener('input', calculateTotal);
    }

    // Initialize calculation listeners for the first row
    const firstRow = productTableBody.querySelector('tr.product');
    if (firstRow) {
        addCalculationListeners(firstRow);
    }

    // Initialize row numbers
    updateRowNumbers();
});