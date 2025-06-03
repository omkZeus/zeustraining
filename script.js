document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('input[type="button"]');

    submitButton.addEventListener("click", function () {
        const name = document.querySelector('input[type="text"]').value.trim();
        const comments = document.querySelector('textarea').value.trim();
        const genderSelected = document.querySelector('input[name="gender"]:checked');

        if (name === "" || comments === "" || !genderSelected) {
            alert("Please fill name, put a comment and select a gender.");
        } else {
            alert("Form is valid!");
        }
    });
});
