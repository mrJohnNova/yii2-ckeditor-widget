CKEDITOR.dialog.add( 'accordionDialog', function ( editor ) {
    return {
        title: 'Вставить аккардион',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'text',
                        id: 'number',
                        label: 'Количество панелей (введите цифру)',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Поле не может быть пустым!" )
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;
            var sections = parseInt(dialog.getValueOf('tab-basic','number')); //Número de seções que serão criadas

            section = "<h3>Введите заголовок</h3><div><p>Введите текст, который будет скрываться</p></div>"
            intern = ""
            for (i=0;i<sections;i++){
                intern = intern + section
            }

            editor.insertHtml('<div class="accordion">'+ intern +'</div>');

        }
    };
});
