const initState = {
  posts: [
    {
      id: "1",
      title: "qui est esse",
      body:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      id: "2",
      title: "eum et est occaecati",
      body:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      id: "3",
      title: "nesciunt quas odio",
      body:
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });
    state = {...state, posts: newPosts};
  }
  return state;
};

export default rootReducer;
