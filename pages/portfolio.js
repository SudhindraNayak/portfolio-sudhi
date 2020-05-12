import axios from "axios";
import BaseLayout from "../components/layouts/BaseLayout";

import { withRouter } from "next/router";
import BasePage from "../components/basePage";

class PortFolio extends React.Component {
  static async getInitialProps() {
    let portfolio = {};
    try {
      const res = await axios.get(
        `http://jsonplaceholder.typicode.com/posts/${query.id}`
      );
      portfolio = res.data;
    } catch (error) {
      console.error(error);
    }
    return {
      portfolio,
    };
  }

  render() {
    const { portfolio } = this.props;
    return (
      <BaseLayout>
        <BasePage>
          <h1>I portfolio page</h1>
          <h2>{portfolio.title}</h2>
          <p>{portfolio.body}</p>
          <p>{portfolio.id}</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

// export const getServerSideProps = async ({ query }) => {
//   let portfolio = {};
//   try {
//     const res = await axios.get(
//       `http://jsonplaceholder.typicode.com/posts/${query.id}`
//     );
//     portfolio = res.data;
//   } catch (error) {
//     console.error(error);
//   }
//   return {
//     props: {
//       portfolio,
//     },
//   };
// };

export default withRouter(PortFolio);
