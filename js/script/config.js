define(function() {
	require.config({
		baseUrl: './js/',
		paths: {
			jquery: 'lib/jquery-1.11.1.min'
		},
  urlArgs: "v=" + Math.random()
	})
})