class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Add profile
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img src="${user.avatar_url}" class="img-fluid mb-2">
          <a href="${user.html_url}" class="btn btn-primary btn-block mb-3" target="_blank">View profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Pablic Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Pablic Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span><br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach((element) => {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6"><a href="${element.html_url}" target="_blank">${element.name}</a>
          </div>
        <div class="col-md-6">
          <span class="badge badge-primary">Stars: ${element.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers: ${element.watchers_count}</span>
          <span class="badge badge-success">Forks: ${element.forks_count}</span>
        </div>
      </div>
    </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show Alert
  showAlert(message, className) {
    // Clear previous alert
    this.clearAlert();
    // Create div element
    const div = document.createElement('div');
    // Add class name
    div.className = className;
    // Add text
    div.append(document.createTextNode(message));

    // Select .searchContainer
    const container = document.querySelector('.searchContainer');
    // Insert message
    container.prepend(div);

    // Remove alert after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear Alert
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Remove profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
