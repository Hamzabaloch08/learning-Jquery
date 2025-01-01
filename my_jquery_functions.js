$(document).ready(function () {
    let redHeading = $('.red');
    let blueHeading = $('.blue');
    let greenHeading = $('.green');
    let button = $('button');

    button.click(function (e) {
        e.preventDefault();
        if (button.text() === 'Add Color') {
            redHeading.css('color', 'red');
            blueHeading.css('color', 'blue');
            greenHeading.css('color', 'green');
            button.text('Remove Color');
        } else if (button.text() === 'Remove Color') {
            redHeading.css('color', 'black');
            blueHeading.css('color', 'black');
            greenHeading.css('color', 'black');
            button.text('Add Color');
        }
    });
});
