CKEDITOR.dialog.add("testDialog",function(editor){
    return {
        title:'Добавить задачу',
        minWidth:390,
        minHeight:230,
        contents:[{
            id: 'testselect',
            elements:[{
                type: 'select',
                id: 'ajax_select',
                label: 'Выберете задачу',
                items: [''],
                onLoad: function(element) {
                    var self = this;
                    $.post('/article/article-admin/get-test', function(data){

                        $.each($.parseJSON(data), function(key, value){
                            self.add(value, key);
                        });
                    });

                }
            }]
        }],
        onOk: function() {
            editor.insertHtml('{{test='+ this.getValueOf('testselect', 'ajax_select') +'}}');
        }
    }
});