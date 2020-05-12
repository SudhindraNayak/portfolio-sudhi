import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/basePage";

class About extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage className="about-page">
          <h1>I am About Page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
