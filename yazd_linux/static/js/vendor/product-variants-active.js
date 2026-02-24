
(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {
        // Add variant option
        document.querySelector('.add-variant-btn').addEventListener('click', function () {
            const template = document.querySelector('.variant-option-template').cloneNode(true);
            template.classList.remove('d-none', 'variant-option-template');
            template.classList.add('variant-option-added');

            document.querySelector('.variant-options').appendChild(template);

            // Add remove functionality
            template.querySelector('.remove-option').addEventListener('click', function () {
                template.remove();
                generateVariantCombinations();
            });

            // Add change listeners to generate combinations
            template.querySelector('.option-name').addEventListener('change', generateVariantCombinations);
            template.querySelector('.option-values').addEventListener('change', generateVariantCombinations);
        });

        // Generate variant combinations
        function generateVariantCombinations() {
            const options = [];
            document.querySelectorAll('.variant-option-added').forEach(option => {
                const name = option.querySelector('.option-name').value;
                const values = option.querySelector('.option-values').value.split(',').map(v => v.trim());

                if (name && values.length > 0) {
                    options.push({
                        name: name,
                        values: values
                    });
                }
            });

            const combinationsBody = document.querySelector('.variant-combinations');
            const combinationsWrapper = document.querySelector('.variant-combinations-wrapper');

            if (options.length === 0) {
                combinationsWrapper.classList.add('d-none');
                return;
            }

            combinationsWrapper.classList.remove('d-none');
            combinationsBody.innerHTML = '';

            // Generate all possible combinations
            const allCombinations = generateAllCombinations(options);

            allCombinations.forEach((combination, index) => {
                const row = document.createElement('tr');

                // Variant name cell
                const variantNameCell = document.createElement('td');
                variantNameCell.textContent = Object.values(combination).join(' / ');
                row.appendChild(variantNameCell);

                // SKU cell
                const skuCell = document.createElement('td');
                skuCell.innerHTML = `<input type="text" class="form-control form-control-sm" name="variants[${index}][sku]" placeholder="SKU">`;
                row.appendChild(skuCell);

                // Price cell
                const priceCell = document.createElement('td');
                priceCell.innerHTML = `<input type="number" class="form-control form-control-sm" name="variants[${index}][price]" placeholder="0.00" step="0.01">`;
                row.appendChild(priceCell);

                // Quantity cell
                const qtyCell = document.createElement('td');
                qtyCell.innerHTML = `<input type="number" class="form-control form-control-sm" name="variants[${index}][quantity]" placeholder="0">`;
                row.appendChild(qtyCell);

                // Image cell
                const imgCell = document.createElement('td');
                imgCell.innerHTML = `<input type="file" class="form-control form-control-sm" name="variants[${index}][image]">`;
                row.appendChild(imgCell);

                combinationsBody.appendChild(row);
            });
        }

        // Helper function to generate all combinations
        function generateAllCombinations(options, current = {}, results = []) {
            if (options.length === 0) {
                results.push({ ...current });
                return results;
            }

            const [first, ...rest] = options;
            for (const value of first.values) {
                current[first.name] = value;
                generateAllCombinations(rest, current, results);
            }

            return results;
        }
    });

    /* Basic Tagify */
    // The DOM element you wish to replace with Tagify
    var inputtagify = document.querySelector('input[name=basic]');

    // initialize Tagify on the above input node reference
    new Tagify(inputtagify)

})();