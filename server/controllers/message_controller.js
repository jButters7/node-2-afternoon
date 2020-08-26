const messages = [];
let id = 0;

// const newId = messages[messages.length - 1].id + 1

module.exports = {
  createPost: (req, res) => {
    const { text, time } = req.body

    const newPost = {
      id: id,
      text,
      time
    }
    messages.push(newPost)
    res.status(200).send(messages)
    id++
  },



  getMessages: (req, res) => {
    res.status(200).send(messages);
  },
  updatePost: (req, res) => {
    const { id } = req.params
    const { text } = req.body

    const postIndex = messages.findIndex(element => element.id === +id)

    console.log('postIndex:', postIndex)

    // console.log('hit 2')
    if (postIndex === -1) {
      return res.status(404).send('Post not found')
    }

    // console.log('hit 3')
    let existingPost = messages[postIndex]

    // console.log(post)
    messages[postIndex] = {
      text: text || existingPost.text,
      time: existingPost.time,
      id: id
    }

    // console.log(existingPost, updatedPost)
    // console.log(messages)
    res.status(200).send(messages)
  },
  deletePost: (req, res) => {
    const { id } = req.params

    const postIndex = messages.findIndex(element => element.id === +id)

    // if (postIndex === -1) {
    //   return res.status(404).send('Post to delete was not found')
    // }
    console.log('first', messages)
    messages.splice(postIndex, 1)
    console.log('second', messages)
    res.status(200).send(messages)

  }
}



