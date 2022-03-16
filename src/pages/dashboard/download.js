// @mui
import { Container, Typography } from '@mui/material';

// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

DownloadApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function DownloadApp() {

  return (
    <Page title="Download">
      <Container maxWidth='xl'>
        <Typography variant="h5" paragraph>
          Download Page
        </Typography>
      </Container>
    </Page>
  );
}
