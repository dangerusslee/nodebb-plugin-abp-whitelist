'use strict';

let Controllers = {};
let meta = require.main.require('./src/meta');


Controllers.renderAdminPage = function (req, res, next) {
	/*
		Make sure the route matches your path to template exactly.

		If your route was:
			myforum.com/some/complex/route/
		your template should be:
			templates/some/complex/route.tpl
		and you would render it like so:
			res.render('some/complex/route');
	*/

	res.render('admin/plugins/abp-whitelist', {});
};
Controllers.renderWhiteList = function (req, res, next) {
	var mySettings = meta.settings.get('abp-whitelist', function(err, settings) {
		var whitelist=settings["whitelist"];
		res.set({ 
				  'Content-Type':'text/plain',
				  'cache-control':'max-age=2592000'
				});
		res.send(whitelist);
	});
};
module.exports = Controllers;