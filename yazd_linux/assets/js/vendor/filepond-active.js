(function () {
    'use strict'

    /* filepond */
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageExifOrientation,
        FilePondPluginFileValidateSize,
        FilePondPluginFileEncode,
    );

    /* multiple upload */
    const MultipleElement = document.querySelector('.multiple-filepond');
    FilePond.create(MultipleElement,);

    /* single upload */
    FilePond.create(
        document.querySelector('.single-fileupload'),
        {
            labelIdle: `تصویر خود را بکشید و رها کنید یا <span class="filepond--label-action">مرور</span>`,
            imagePreviewHeight: 170,
            imageCropAspectRatio: '1:1',
            imageResizeTargetWidth: 200,
            imageResizeTargetHeight: 200,
            stylePanelLayout: 'compact circle',
            styleLoadIndicatorPosition: 'center bottom',
            styleButtonRemoveItemPosition: 'center bottom'
        }
    );

})();