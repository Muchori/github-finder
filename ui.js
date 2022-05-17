class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  /**
   * Show user details
   * @param user
   */
  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gist: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>

            <br>
            <br>
            <ul class="list-group">
              <li class="list-group-item">Comapny: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
              <li class="list-group-item"></li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos">
      </div>
      `;
  }

  /**
   * Show alert when user not found => 404 error
   */
  showAlert(message, className) {
    //create a div
    const div = document.createElement("div");
    //assign div
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //insert
    const container = document.querySelector(".searchContainer");
    //get search box
    const search = document.querySelector(".search");
    //insert
    container.insertBefore(div, search);
  }

  /**
   * Claer the profile if input text is empty
   */
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
