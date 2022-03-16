// @mui
import { Container, Typography } from '@mui/material';

// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import FileManagerUploader from '../../components/UploadManager/FileManager'

// ----------------------------------------------------------------------

UploadApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function UploadApp() {

  return (
    <Page title="Upload">
      <Container maxWidth='xl'>
        <Typography variant="h5" paragraph>
          Upload Page
        </Typography>
        <FileManagerUploader />
      </Container>
    </Page>
  );
}
