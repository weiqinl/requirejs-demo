define(function() {
	require.config({
		baseUrl: './js/',
		paths: {
			"jquery": 'lib/jquery-1.11.1.min',
			 "datatables.net": "lib/jquery.dataTables.min",
		},
  urlArgs: "v=" + Math.random()
	})
})