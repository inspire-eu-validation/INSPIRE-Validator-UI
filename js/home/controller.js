// Show/Hide Beta banner
if (betaBanner == true) {
	$("#betaBanner").show();
} else {
	$("#betaBanner").hide();
}

//Show STAGING label
if (labelStaging == true) {
	$(document).prop('title', "[STAGING] " + $(document).prop('title'));
}

//Show version label if exists
if (validatorVersionLabel !== null && validatorVersionLabel !== undefined) {

	// Create a comment with the version label
	var commentNode = document.createComment('Validator version: ' + validatorVersionLabel);

	// Insert the comment node right at the start of the head
	document.head.insertBefore(commentNode, document.head.firstChild);
}


document.addEventListener('DOMContentLoaded', function () {
    // Check if swaggerURL is defined
    if (typeof swaggerURL !== 'undefined' && swaggerURL) {
        // Set the href attribute of the anchor tag
        const apiLink = document.getElementById('api-link');
        if (apiLink) {
            apiLink.href = swaggerURL;
        } else {
            console.warn('API link element not found.');
        }
    } else {
        console.error('swaggerURL is not defined in config.js');
    }
});