import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/basePage";
import withAuth from "../components/hoc/withAuth";

class Secret extends React.Component {
  //   renderSecretPage() {
  //     const { isAuthenticated } = this.props.auth;

  //     if (isAuthenticated) {
  //       return (
  //         <BaseLayout {...this.props.auth}>
  //           <BasePage>
  //             <h1>I am Secret Page</h1>
  //             <p>Secret content here </p>
  //           </BasePage>
  //         </BaseLayout>
  //       );
  //     } else {
  //       return (
  //         <BaseLayout {...this.props.auth}>
  //           <BasePage>
  //             <h1>
  //               You are not Authenticated. Please login to access this page.
  //             </h1>
  //           </BasePage>
  //         </BaseLayout>
  //       );
  //     }
  //   }

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am Secret Page</h1>
          <p>Secret content here </p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
