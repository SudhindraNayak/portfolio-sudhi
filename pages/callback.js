import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/basePage";
import auth0Client from "../services/auth0";
import {withRouter} from "next/router";
class Callback extends React.Component {

    async componentDidMount(){
       await auth0Client.handleAthentication();
       this.props.router.push("/");
    }

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>You are almost ready, verifying your login</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Callback);
