(function () {
    'use strict';

    var toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['image', 'video'],
        ['clean']
    ];

    // Initialize only if elements exist
    if (document.getElementById('editor')) {
        var quill1 = new Quill('#editor', {
            modules: { toolbar: toolbarOptions },
            theme: 'snow'
        });
    }

    if (document.getElementById('editor2')) {
        var quill2 = new Quill('#editor2', {
            modules: { toolbar: toolbarOptions },
            theme: 'snow'
        });
    }
    if (document.getElementById('editorBubble')) {
        var editorBubble = new Quill('#editorBubble', {
            modules: {
                toolbar: undefined
            },
            theme: 'bubble'
        });
    }
})();