import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/basePage";
import withAuth from "../components/hoc/withAuth";

class Secret extends React.Component {
  static getInitalProps() {
    const superSecretValue = "Super Secret value";
    return { superSecretValue };
  }

  render() {
    console.log(this.props);
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am Secret Page</h1>
          <h2>{this.props.superSecretValue}</h2>
          <p>Secret content here </p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
