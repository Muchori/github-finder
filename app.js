/**
 * Init Github, UI
 */
const github = new Github();
const ui = new UI();

/**
 * Search input
 */
const searchUser = document.getElementById("searchUser");

/**
 * Search input event listener
 */
searchUser.addEventListener("keyup", (e) => {
  /**
   * get input text
   */
  const userText = e.target.value;
  if (userText !== "") {
    /**
     * make http call
     */
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        /**
         * show an alert
         */
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        /**
         * show profile
         */
        ui.showProfile(data.profile);
      }
    });
  } else {
    /**
     * clear profile
     */
    ui.clearProfile();
  }
});
