class Game {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  getUser() {
    return this.user;
  }

  getScore() {
    return this.score;
  }

  setUser(user) {
    this.user = user;
  }

  setScore(score) {
    this.score = score;
  }
}

function defyJSLinter() {
  console.log('Created in order to not only import one thing but also to not have a linter error.');
}

export { Game, defyJSLinter };