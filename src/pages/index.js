
// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home Page">
      <RootStyle>
      <h1>Home Page</h1>>
      </RootStyle>
    </Page>
  );
}
 
