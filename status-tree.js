
$(document).ready(function() {
    $('select').change(function() {
        var value = $(this).find('option:selected').val();
        //!!!!! code to determine id and set select default
        if ( true ) {
            $('.chart-boxer:visible').hide();
            $('#' + value).show();
        }
    });
});