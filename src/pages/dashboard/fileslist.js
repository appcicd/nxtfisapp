// @mui
import { Container, Typography } from '@mui/material';

// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

FilesListApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function FilesListApp() {

  return (
    <Page title="Files List">
      <Container maxWidth='xl'>
      <Typography variant="h5" paragraph>
            Files List
          </Typography>
      </Container>
    </Page>
  );
}
