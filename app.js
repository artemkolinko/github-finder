// Init GitHub object
const github = new Github();
// Init ui object
const ui = new UI();

// Get search input elem
const searchUser = document.getElementById('searchUser');

// Add event listener
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText !== '') {
    // make https call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show alert from ui.js
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        // Rate limiting = 60/hour
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
