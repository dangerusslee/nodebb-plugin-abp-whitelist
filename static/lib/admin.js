'use strict';
/* globals $, app, socket */

define('admin/plugins/abp-whitelist', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('abp-whitelist', $('.abp-whitelist-settings'));

		$('#save').on('click', function() {
			Settings.save('abp-whitelist', $('.abp-whitelist-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'abp-whitelist-saved',
					title: 'Settings Saved',
					message: 'Your Settings have been saved'
				});
			});
		});
	};

	return ACP;
});