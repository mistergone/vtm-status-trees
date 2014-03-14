$(document).ready(function() {
    $('select').change(function() {
        var value = $(this).find('option:selected').val();
        //!!!!! code to determine id and set select default
        if ( true ) {
            $('.chart-boxer:visible').hide();
            $('#' + value).show();
        }
    });
    $('a.redraw').click(function(event) {
        var href = $(this).attr('href');
        $('select').each(function(i, val) {
            $(this).prop('selectedIndex',0);
        });
        //!!!!! code to determine id and set select default
        $('.chart-boxer:visible').hide();
        $(href).show();
    });
});