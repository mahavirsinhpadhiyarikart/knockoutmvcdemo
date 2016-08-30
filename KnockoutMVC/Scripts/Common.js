$.ajaxSetup({
    beforeSend: function () {
        $.blockUI({
            css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .38,
                color: '#fff'
            }
        });
    },
    complete: function () {
        setTimeout($.unblockUI, 100);
    }
});