/**
 * Theme: Syntra - Bootstrap 4 Web App kit
 * Author:Mannat-themes
 * X editable
 */


$(function(){

    //modify buttons style
    $.fn.editableform.buttons =
        '<button type="submit" class="btn btn-primary editable-submit btn-sm"><i class="ti-check"></i></button>' +
        '<button type="button" class="btn btn-default editable-cancel btn-sm"><i class="ti-close"></i></button>';

    //Inline editables
    $('#inline-firstname').editable({
        type: 'text',
        pk: 1,
        name: 'firstname',
        title: 'Enter firstname',
        mode: 'inline'
    });

    $('#inline-lastname').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });

    $('#inline-dob').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });

    $('#inline-add1').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });
    $('#inline-add2').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });
    $('#inline-add3').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });
    $('#inline-contact').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });
    $('#inline-email').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });
    $('#inline-addinfo').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });

    $('.inline-speciality').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });
    $('.inline-year').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });
    $('.inline-grad').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });
    $('.inline-univ').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });
    $('.inline-place').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });

    $('.inline-title').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });


    

    $('#inline-sex').editable({
        prepend: "not selected",
        mode: 'inline',
        source: [
            {value: 1, text: '1 Year'},
            {value: 2, text: '2 Year'},
            {value: 3, text: '3 Year'},
            {value: 4, text: '4 Year'},
            {value: 5, text: '5 Year'},
        ],
        display: function(value, sourceData) {
            var colors = {"": "gray", 1: "green", 2: "blue"},
                elem = $.grep(sourceData, function(o){return o.value == value;});

            if(elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });


    $('#inline-type').editable({
        prepend: "not selected",
        mode: 'inline',
        source: [
            {value: 1, text: 'Cardiologist'},
            {value: 2, text: 'Heart Specialist'},
            {value: 3, text: 'Rectal Surgeon'},
            {value: 4, text: 'General Physican'},
            {value: 5, text: 'Assistant Doctor'},
        ],
        display: function(value, sourceData) {
            var colors = {"": "gray", 1: "green", 2: "blue"},
                elem = $.grep(sourceData, function(o){return o.value == value;});

            if(elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $('#inline-years').editable({
        prepend: "not selected",
        mode: 'inline',
        source: [
            {value: 1, text: '1 Year'},
            {value: 2, text: '2 Year'},
            {value: 3, text: '3 Year'},
            {value: 4, text: '4 Year'},
            {value: 5, text: '5 Year'},
        ],
        display: function(value, sourceData) {
            var colors = {"": "gray", 1: "green", 2: "blue"},
                elem = $.grep(sourceData, function(o){return o.value == value;});

            if(elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $('#inline-group').editable({
        showbuttons: false,
        mode: 'inline'
    });

    $('#inline-status').editable({
        mode: 'inline'
    });

    $('#inline-dob').editable({
        mode: 'inline'
    });

    $('#inline-event').editable({
        placement: 'right',
        mode: 'inline',
        combodate: {
            firstItem: 'name'
        }
    });

    $('#inline-comments').editable({
        showbuttons: 'bottom',
        mode: 'inline'
    });

    $('#inline-fruits').editable({
        pk: 1,
        limit: 3,
        mode: 'inline',
        source: [
            {value: 1, text: 'Banana'},
            {value: 2, text: 'Peach'},
            {value: 3, text: 'Apple'},
            {value: 4, text: 'Watermelon'},
            {value: 5, text: 'Orange'}
        ]
    });

    $('#inline-tags').editable({
        inputclass: 'input-large',
        mode: 'inline',
        select2: {
            tags: ['html', 'javascript', 'css', 'ajax'],
            tokenSeparators: [",", " "]
        }
    });

});