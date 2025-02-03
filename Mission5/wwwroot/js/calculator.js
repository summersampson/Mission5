$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val());

        // Validation: Ensure a positive number is entered
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number of hours.");
            return;
        }

        let total = hours * rate;
        $("#total").val(total.toFixed(2)); // Display total with 2 decimal places
    });
});
