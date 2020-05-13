import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/_main.scss";
import auth0 from "../services/auth0";

class App extends React.Component {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const user = process.browser
      ? await auth0.clientAuth()
      : await auth0.serverAuth(ctx.req, ctx.res);

    const auth = { user, isAuthenticated: !!user };

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps();
    }
    return { pageProps, auth };
  }

  render() {
    const { Component, pageProps, auth } = this.props;
    return <Component {...pageProps} auth={auth} />;
  }
}

export default App;
