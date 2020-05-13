import React from "react";
import axios from "axios";
// import Link from "next/link";
import { Link } from "../routes";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/basePage";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
      posts = res.data;
    } catch (error) {
      console.error(error);
    }
    return {
      posts: posts.slice(0, 10),
    };
  }

  renderPosts(posts) {
    return posts.map((p) => (
      <li key={p.id} style={{ fontSize: "20px" }}>
        {/* <Link href={`/portfolios/[id]`} as={`/portfolios/${p.id}`}>
          <a>{p.title}</a>
        </Link> */}

        <Link route={`/portfolios/${p.id}`}>
          <a>{p.title}</a>
        </Link>
      </li>
    ));
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am Portfolios Page</h1>
          <ul>{this.renderPosts(posts)}</ul>
        </BasePage>
      </BaseLayout>
    );
  }
}

// export const getServerSideProps = async () => {
//   let posts = [];
//   try {
//     const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
//     posts = res.data;
//   } catch (error) {
//     console.error(error);
//   }
//   return {
//     props: {
//       posts: posts.slice(0, 10),
//     },
//   };
// };

export default Portfolios;
