CKEDITOR.plugins.add( 'sliders', {
    init: function( editor ) {
        editor.ui.addButton( 'Sliders', {
            label: 'Слайдер',
            command: 'slidersDialog'
        });

        CKEDITOR.dialog.add( 'slidersDialog', this.path + 'dialogs/sliders.js' );
        editor.addCommand( 'slidersDialog', new CKEDITOR.dialogCommand( 'slidersDialog' ) );
    }
});