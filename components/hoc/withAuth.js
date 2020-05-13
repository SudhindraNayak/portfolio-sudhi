import BaseLayout from "../layouts/BaseLayout";
import BasePage from "../basePage";

export default function (Component) {
  return class withAuth extends React.Component {
    static async getInitalProps(args) {
      console.log("initial props render in with auth");
      const pageProps =
        (await Component.getInitalProps) &&
        (await Component.getInitalProps(args));
      console.log(pageProps);
      return { ...pageProps };
    }

    renderProtectedPage() {
      const { isAuthenticated } = this.props.auth;

      if (isAuthenticated) {
        return <Component {...this.props} />;
      } else {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>
              <h1>
                You are not Authenticated. Please login to access this page.
              </h1>
            </BasePage>
          </BaseLayout>
        );
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  };
}
