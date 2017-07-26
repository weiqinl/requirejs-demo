require(['config'], function() {
	require(['jquery','script/desc','script/alertdesc'], function($, desc, alertdesc) {
        alert('我是在哪里')
		$(document).on('click', '#contentBtn', function() {
        $('#messagebox').html('You have access Jquery by using require()');
        // require(['script/desc'], function(desc) {
            alert(JSON.stringify(desc));
            // require(['script/alertdesc'], function(alertdesc) {
            	alertdesc();
            // })
        // })
    });
	})
})