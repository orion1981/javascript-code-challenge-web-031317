class CommentList{

  constructor(comments) {
  this.comments = []
  }

  render() {
    return `<ul>${comments.map(comment)}</ul>`
  }

  addComment(string) {
    comments.push(Comment.new(string))
  }
}
