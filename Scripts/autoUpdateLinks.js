$(document).ready(function() {
	$('a[actionURI]').each(function() {
		savedHREF = $(this).attr('href');
		$(this).attr('savedHREF', savedHREF);
	})

	// Update links to add urls, where possible, when input box is edited:
	$('input#checkThisSite').keyup(updateLinks);
	$('input#checkThisSite').trigger('keyup');

	// Add target="_blank" to all links once page has loaded:
	$('a').each(function() {
		$(this).attr('target', '_blank');
	})
})

function updateLinks(event) {
	$('a[actionURI]').each(function() {
		inputFieldContents = $('input#checkThisSite').attr('value');
		if (inputFieldContents != "") {
			if (inputFieldContents.substring(0,7) != 'http://'
				&& inputFieldContents.substring(0,8) != 'https://') {
				inputFieldContents = 'http://' + inputFieldContents;
			}
			newHREF = $(this).attr('actionURI');
			$(this).attr('href', newHREF.replace('%s', inputFieldContents));
		} else {
			savedHREF = $(this).attr('savedHREF');
			$(this).attr('href', savedHREF);
		}
	})
}