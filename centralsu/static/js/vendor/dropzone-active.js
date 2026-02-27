(function () {
    'use strict'

    /* dropzone */
    // let myDropzone = new Dropzone(".dropzone");
    // myDropzone.on("addedfile", file => {
    // });

    let myDropzone = new Dropzone(".dropzone");

    myDropzone.on("addedfile", file => {
        // Create the remove button
        let removeButton = Dropzone.createElement("<button class='dz-remove btn btn-danger mt-10'>Remove file</button>");

        // Attach click handler
        removeButton.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            myDropzone.removeFile(file); // Remove the file from Dropzone
        });

        // Add the button to the file preview element
        file.previewElement.appendChild(removeButton);
    });



})();