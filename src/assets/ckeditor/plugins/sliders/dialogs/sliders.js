CKEDITOR.dialog.add("slidersDialog",function(editor){
    return {
        title:'Добавить слайдер',
        minWidth:390,
        minHeight:230,
        contents:[{
            id: 'slselect',
            elements:[{
                type: 'select',
                id: 'ajax_select',
                label: 'Выберете слайдер',
                items: [''],
                onLoad: function(element) {
                    var self = this;
                    $.post('/article/slider-admin/get-sliders', function(data){

                        $.each($.parseJSON(data), function(key, value){
                            self.add(value, key);
                        });
                    });

                }
            }]
        }],
        onOk: function() {
            editor.insertHtml('{{sliders='+ this.getValueOf('slselect', 'ajax_select') +'}}');
        }
    }
});