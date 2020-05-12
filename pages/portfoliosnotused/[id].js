import axios from "axios";
import BaseLayout from "../../components/layouts/BaseLayout";

import { withRouter } from "next/router";

class PortFolio extends React.Component {
  render() {
    const { portfolio } = this.props;
    return (
      <BaseLayout>
        <h1>I portfolio page</h1>
        <h2>{portfolio.title}</h2>
        <p>{portfolio.body}</p>
        <p>{portfolio.id}</p>
      </BaseLayout>
    );
  }
}

export const getServerSideProps = async ({ query }) => {
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
    props: {
      portfolio,
    },
  };
};

export default withRouter(PortFolio);
