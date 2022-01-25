const boxAlert = {
    callAlert: (options) => {
        $('#box-alert-title').text((options.title) ? options.title : '')
        $('#box-alert-text').text((options.text) ? options.text : '')
        if (options.showLoading) $('#box-alert-loading').show();
        else $('#box-alert-loading').hide();
        if (options.showConfirm) $('#box-alert-confirm').show();
        else $('#box-alert-confirm').hide();

        if (options.onConfirm) $('#box-alert-confirm').click(() => { options.onConfirm() });

        if (options.icon == 'success') $('#box-alarm-icon-success').show();
        else $('#box-alarm-icon-success').hide();
        if (options.icon == 'error') $('#box-alarm-icon-error').show();
        else $('#box-alarm-icon-error').hide();
        if (options.icon == 'question') $('#box-alarm-icon-question').show();
        else $('#box-alarm-icon-question').hide();
        if (options.icon == 'info') $('#box-alarm-icon-info').show();
        else $('#box-alarm-icon-info').hide();
        if (options.icon == 'warning') $('#box-alarm-icon-warning').show();
        else $('#box-alarm-icon-warning').hide();

        if (options.onOpen) options.onOpen();
    
        $('#box-alert').fadeIn('slow');
    },
    ignoreAlert: () => {
        $('#box-alert').fadeOut('slow');
    }
}

boxAlert.callAlert({
    title: 'Carregando...',
    text: 'Estamos carregando o conteúdo da página...',
    showLoading: true
});

$(document).ready(() => {
    boxAlert.ignoreAlert();
});