const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');
const fullNameError = document.getElementById('fullNameError');
const phoneNumberError = document.getElementById('phoneNumberError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', (event) => {
    event.preventDefault(); //

    // Kiểm tra tên
    if (fullName.value.trim() === '') {
        fullNameError.textContent = 'Vui lòng nhập họ và tên.';
    } else {
        fullNameError.textContent = '';
    }

    // Kiểm tra số điện thoại
    const phoneNumberRegex = /^(0|\+84)\d{9,10}$/;
    if (!phoneNumberRegex.test(phoneNumber.value)) {
        phoneNumberError.textContent = 'Số điện thoại không hợp lệ.';
    } else {
        phoneNumberError.textContent = '';
    }

    // Kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Email không hợp lệ.';
    } else {
        emailError.textContent = '';
    }

    // Nếu tất cả các trường hợp đều hợp lệ, gửi form
    if (fullNameError.textContent === '' && phoneNumberError.textContent === '' && emailError.textContent === '') {
        // Ở đây bạn có thể thêm code để gửi dữ liệu lên server
        console.log('Dữ liệu hợp lệ, gửi form');
    }
});