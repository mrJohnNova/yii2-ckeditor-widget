CKEDITOR.dialog.add("exerciseDialog",function(editor){
    return {
        title:'Добавить задачу',
        minWidth:390,
        minHeight:230,
        contents:[{
            id: 'exselect',
            elements:[{
                type: 'select',
                id: 'ajax_select',
                label: 'Выберете задачу',
                items: [''],
                onLoad: function(element) {
                    var self = this;
                    $.post('/article/article-admin/get-exercise', function(data){

                        $.each($.parseJSON(data), function(key, value){
                            self.add(value, key);
                        });
                    });

                }
            }]
        }],
        onOk: function() {
            editor.insertHtml('{{exercise='+ this.getValueOf('exselect', 'ajax_select') +'}}');
        }
    }
});