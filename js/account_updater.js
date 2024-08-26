document.addEventListener('DOMContentLoaded', function() {
    const updateProfileForm = document.getElementById('update-profile-form');
    const fullNameDisplay = document.getElementById('full-name');
    const emailDisplay = document.getElementById('email');
    const passwordDisplay = document.getElementById('password');

    updateProfileForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      const newFullName = document.getElementById('newFullName').value;
      const newEmail = document.getElementById('newEmail').value;
      const newPassword = document.getElementById('newPassword').value;

      fullNameDisplay.textContent = 'Full Name: ' + newFullName;
      emailDisplay.textContent = 'Email: ' + newEmail;
      passwordDisplay.textContent = 'Password: ' + '*'.repeat(newPassword.length);

      updateProfileForm.reset();
    });
  });