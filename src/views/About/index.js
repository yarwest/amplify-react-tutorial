import './index.css';
import {
  Button,
  Box,
  Grid,
  ColumnLayout,
  Container,
  Header,
  Link,
} from '@awsui/components-react';

function About() {
  return (
    <div className="About">
        <Grid
          gridDefinition={[
            { offset: { l: '3', xxs: '1' }, colspan: { l: '6', xxs: '10' } }
          ]}
        >
          <Box className="contentColumn" padding={{ vertical: 'xxl', horizontal: 's' }}>
            <Box>
              <Box fontSize="heading-xl" fontWeight="normal" variant="h2" className="lightText">
                More info
              </Box>
              <Container className="contentContainer" header={<Header variant="h2">Front-end components</Header>}>
                <div>
                  <Box variant="p">This demo is created using front-end components from the <code>@awsui/components-react</code> npm package. This library offers a comprehensive set of pre-built & styled components based on the AWS Design System. Feel free to use these to more easily create web applications that conform to the AWS look and feel.</Box>
                  <Box variant="p">More info:</Box>
                  <Link target="_blank" fontSize="heading-m" href="https://github.com/aws/awsui-documentation">
                    GitHub documentation
                  </Link>
                  <br/>
                  <br/>
                  <Link target="_blank" fontSize="heading-m" href="https://polaris.a2z.com/components/overview/">
                    Design system documentation
                  </Link>
                </div>
              </Container>
            </Box>
            <Box padding={{ vertical: 'xxl'}}>
              <Container className="contentContainer" header={<Header variant="h2">Open data</Header>}>
                <div>
                  <Box variant="p">Here are some useful resources for open data that might help you get started</Box>
                  <Box variant="p">More info:</Box>
                  <Link target="_blank" fontSize="heading-m" href="https://registry.opendata.aws/">
                    Registry of Open Data on AWS
                  </Link>
                  <br/>
                  <br/>
                  <Link target="_blank" fontSize="heading-m" href="https://www.kaggle.com/datasets">
                    Kaggle: repository of community published data
                  </Link>
                </div>
              </Container>
            </Box>
            <Box padding={{ bottom: 'xxl'}}>
              <Container className="contentContainer" header={<Header variant="h2">Examples of Amplify functionalities you can add</Header>}>
                <ColumnLayout columns={2} variant="text-grid">
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                      Setting up an API
                    </Box>
                    <Box variant="p">Use <code>amplify add api</code> to create a REST or GraphQL API.</Box>
                    <Box variant="p">More info:</Box>
                    <Link target="_blank" fontSize="heading-m" href="https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js/">
                      GraphQL API documentation
                    </Link>
                    <br/>
                    <br/>
                    <Link target="_blank" fontSize="heading-m" href="https://docs.amplify.aws/lib/restapi/getting-started/q/platform/js/">
                      REST API documentation
                    </Link>
                    <br/>
                    <br/>
                    <Link target="_blank" fontSize="heading-m" href="https://docs.amplify.aws/start/getting-started/data-model/q/integration/react/">
                      Amplify documentation example
                    </Link>
                    <br/>
                    <br/>
                    <Link target="_blank" fontSize="heading-m" href="https://gerard-sans.medium.com/create-a-cloud-enabled-graphql-api-with-aws-amplify-and-vue-99ec669d3bc5">
                      "Create a cloud-enabled GraphQL API with AWS Amplify and Vue" on Medium
                    </Link>
                  </div>
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                      Hosting your app
                    </Box>
                    <Box variant="p">
                      Use <code>amplify add hosting</code> to add static web app hosting.
                    </Box>
                    <Box variant="p">
                      More info:
                    </Box>
                    <Link target="_blank" fontSize="heading-m" href="https://docs.amplify.aws/start/getting-started/hosting/q/integration/react/">
                      Amplify getting started documentation
                    </Link>
                    <br/>
                    <br/>
                    <Link target="_blank" fontSize="heading-m" href="https://www.youtube.com/watch?v=kxuKS_MIFCE">
                      How to Deploy a React Application From the AWS Amplify CLI
                    </Link>
                  </div>
                </ColumnLayout>
              </Container>
            </Box>
            <Button href="/">Return to Home Page</Button>
          </Box>
        </Grid>
    </div>
  );
}

export default About;
