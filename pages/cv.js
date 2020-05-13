import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/basePage";

class CV extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am CV Page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default CV;
