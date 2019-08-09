function getParameterByName(name, url) {
	if (!url)
		url = window.location.href

	name = name.replace(/[\[\]]/g, '\\$&')
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	results = regex.exec(url)

	if (!results)
		return null

	if (!results[2])
		return ''

	return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

function toMinutesSeconds(s) {
	return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
}

$(function() {
	$('.edit_text').click(function (e, evt) {
		var p = prompt("Enter text content", $(this).text())
		if (p === '')
			$(this).html('&nbsp;')
		else if (p !== null)
			$(this).text(p)
	})
})
