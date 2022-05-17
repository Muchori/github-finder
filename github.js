class Github {
  constructor() {
    this.client_id = "6cc58044739c22567db2";
    this.client_secret = "542cdcfd6432db19fab118d96fa4c00d7ccd2a65";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    return {
      profile,
    };
  }
}
