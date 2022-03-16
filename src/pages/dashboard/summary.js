// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import {
  AppWidgetSummary,
} from '../../components/widget';

// ----------------------------------------------------------------------

SummaryApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function SummaryApp() {
  
  const theme = useTheme();

  return (
    <Page title="Dashboard Summary">
      {/* <Container maxWidth={themeStretch ? false : 'xl'}> */}
      <Container maxWidth='xl'>
        <Grid container spacing={3}>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Active Users"
              percent={2.6}
              total={18765}
              chartColor={theme.palette.primary.main}
              chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Uploads"
              percent={0.2}
              total={4876}
              chartColor={theme.palette.chart.blue[0]}
              chartData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Downloads"
              percent={-0.1}
              total={678}
              chartColor={theme.palette.chart.red[0]}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
