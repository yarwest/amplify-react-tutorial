import './index.css';
import {
  Box,
  Link
} from '@awsui/components-react';
import logo from "../../logo.png";

function Home() {
  return (
    <div className="pageWrapper">
      <img src={logo} className="App-logo" alt="logo" />
      <Box variant="h2" className="lightText">
        Amplify React example project
      </Box>
      <Box variant="p" className="lightText">
        Largely built based on the <Link href="https://docs.amplify.aws/start/">Amplify quickstart guide</Link>
      </Box>
      <Box variant="p" className="lightText">
        Edit <code>src/views/Home/index.js</code> and save to reload.
      </Box>
      <Link className="App-link" href="/about">
        Additional info
      </Link>
    </div>
  );
}

export default Home;
