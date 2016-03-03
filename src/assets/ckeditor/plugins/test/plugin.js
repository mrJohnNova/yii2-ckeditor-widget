CKEDITOR.plugins.add( 'test', {
    init: function( editor ) {
        editor.ui.addButton( 'Test', {
            label: 'Тест',
            command: 'testDialog'
        });

        CKEDITOR.dialog.add( 'testDialog', this.path + 'dialogs/test.js' );
        editor.addCommand( 'testDialog', new CKEDITOR.dialogCommand( 'testDialog' ) );
    }
});