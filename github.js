class Github {
  constructor() {
    // Move to .env in real project
    // this.client_id = ' id';
    // this.client_secret = 'secret';
    this.repos_counts = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`
      // Deprecated
      // Please use Basic Authentication instead as using OAuth credentials in query parameters has been deprecated.
      // We should genegate a new token https://github.com/settings/tokens/new
      // ?client_id=${this.client_id}&client_secret=${this.client_secret}
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_counts}&sort=${this.repos_sort}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos: repos,
    };
  }
}
