document.addEventListener("DOMContentLoaded", function () {
    let lookupButton = document.getElementById("lookup");
    let countryInput = document.getElementById("country");
    let result = document.getElementById("result");

    lookupButton.addEventListener("click", function () {
        fetch("world.php?country=" + encodeURIComponent(countryInput.value))
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                result.innerHTML = data;
            });
    });
});