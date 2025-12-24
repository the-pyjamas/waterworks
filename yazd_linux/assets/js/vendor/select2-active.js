(function () {
	'use strict'
	$(document).ready(function () {
		$(".select2-assigned-to, .select2-assigned-toTwo").select2({
			templateResult: selectClient,
			templateSelection: selectClient,
			placeholder: "Choose",
			escapeMarkup: function (m) {
				return m;
			},
		});
		/* with images */
		function selectClient(client) {
			if (!client.id) {
				return client.text;
			}
			var $client = $(
				'<span><img src="assets/images/select2/' +
				client.element.value.toLowerCase() +
				'.webp"  alt="img"> ' +
				client.text +
				"</span>"
			);
			return $client;
		}
	});
	/* basic select2 */
	$(".js-example-basic-single").select2({
		dir: "ltr",
	});
	
	$(document).ready(function () {
		$(".employeeList, .employeeListTwo").select2({
			templateResult: selectClient,
			templateSelection: selectClient,
			placeholder: "انتخاب مشتریان",
			escapeMarkup: function (m) {
				return m;
			},
		});
		/* with images */
		function selectClient(client) {
			if (!client.id) {
				return client.text;
			}
			var $client = $(
				'<span><img src="assets/images/select2/' +
				client.element.value.toLowerCase() +
				'.webp"  alt="img"> ' +
				client.text +
				"</span>"
			);
			return $client;
		}
	});
	
	$(".product-status").select2({
		minimumResultsForSearch: Infinity
	});
})();