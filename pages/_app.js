import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/_main.scss";

class App extends React.Component {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {};
  //   const { req, res } = ctx;
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps();
  //   }
  //   return { pageProps };
  // }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default App;
