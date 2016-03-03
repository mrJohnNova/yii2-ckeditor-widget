CKEDITOR.plugins.add( 'exercise', {
    init: function( editor ) {
        editor.ui.addButton( 'Exercise', {
            label: 'Задача',
            command: 'exerciseDialog'
        });

        CKEDITOR.dialog.add( 'exerciseDialog', this.path + 'dialogs/exercise.js' );
        editor.addCommand( 'exerciseDialog', new CKEDITOR.dialogCommand( 'exerciseDialog' ) );
    }
});