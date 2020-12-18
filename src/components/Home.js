import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={Pokeball} alt="Pokeball" />
                  </figure>
                </div>
                <header className="media-content">
                  <p className="title">
                    <Link to={"/" + post.id}>{post.title}</Link>
                  </p>
                </header>
              </div>
              <div className="content">
                
                <p>{post.body}</p>
                
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="">No post yet</div>
    );
    return (
      <div className="container">
        <h4 className="is-size-1 has-text-centered">Hello World</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
