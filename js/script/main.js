require.config({
    baseUrl: './js/',
    paths: {
        jquery: 'lib/jquery-1.11.1.min'
    }
});
require(['jquery'], function($) {
    $(document).on('click', '#contentBtn', function() {
        $('#messagebox').html('You have access Jquery by using require()');
        require(['script/desc'], function(desc) {
            alert(JSON.stringify(desc));
            require(['script/alertdesc'], function(alertdesc) {
            	alertdesc();
            })
        })
    });
});