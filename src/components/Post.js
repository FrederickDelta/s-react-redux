import React from "react";
import { connect } from "react-redux";
import {deletePost} from "../actions/postActions"

class Post extends React.Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  }
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="container">
        <div>
          <h4 className="is-size-1">{this.props.post.title}</h4>
          <p>{this.props.post.body}</p>
        </div>
        <div className="has-text-centered pt-3">
          <button className="button is-danger" onClick={this.handleClick}>Delete Post</button>
        </div>
      </div>
    ) : (
      <div className="container">
        <p>Loading post ...</p>
      </div>
    );

    return (
      <div className="Container">
        <h4>{post}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => {
      return post.id === id;
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // deletePost: (id) => {dispatch({type: "DELETE_POST", id: id})}
    deletePost: (id) => {dispatch(deletePost(id))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
