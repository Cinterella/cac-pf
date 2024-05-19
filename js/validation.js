document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('admission-form');
    const name = document.getElementById('text-name');
    const email = document.getElementById('text-email');
    const house = document.getElementById('dropdown');
    const pic = document.getElementById('profile');
    const gender = document.querySelectorAll('input[name="gender"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        let isValid = true;
        let messages = [];

        if (name.value.trim() === '') {
            isValid = false;
            messages.push('Name is required.');
        }

        if (email.value.trim() === '') {
            isValid = false;
            messages.push('Email is required.');
        } else if (!validateEmail(email.value)) {
            isValid = false;
            messages.push('Email is not valid.');
        }

        if (house.value.trim() === '') {
            isValid = false;
            messages.push('House selection is required.');
        }

        if (pic.value.trim() === '') {
            isValid = false;
            messages.push('Profile picture is required.');
        }

        let genderSelected = false;
        gender.forEach(input => {
            if (input.checked) {
                genderSelected = true;
            }
        });

        if (!genderSelected) {
            isValid = false;
            messages.push('Gender selection is required.');
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.submit();
        } else {
            alert('Form validation failed:\n' + messages.join('\n'));
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
