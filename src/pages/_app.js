// i18n
import '../locales/i18n';

// highlight
import '../utils/highlight';

// scroll bar
import 'simplebar/src/simplebar.css';

// lightbox
import 'react-image-lightbox/style.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

// fullcalendar
import '@fullcalendar/common/main.min.css';
import '@fullcalendar/daygrid/main.min.css';

import PropTypes from 'prop-types';
import cookie from 'cookie';
// next
import Head from 'next/head';
import App from 'next/app';
//
// @mui
// utils
import { getSettings } from '../utils/settings';
// contexts
import { CollapseDrawerProvider } from '../contexts/CollapseDrawerContext';
// theme
import ThemeProvider from '../theme';
// components
import { ChartStyle } from '../components/chart';
import ProgressBar from '../components/ProgressBar';
import ThemeColorPresets from '../components/ThemeColorPresets';
import NotistackProvider from '../components/NotistackProvider';

// Auth Providers
//import { AuthProvider } from '../contexts/JWTContext';
// import { AuthProvider } from '../contexts/Auth0Context';
// import { AuthProvider } from '../contexts/AwsCognitoContext';
import { AuthProvider } from '../contexts/amplify-context';

// ----------------------------------------------------------------------

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  settings: PropTypes.object,
};

export default function MyApp(props) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AuthProvider>
        <CollapseDrawerProvider>
          <ThemeProvider>
            <NotistackProvider>
              <ThemeColorPresets>
                <ChartStyle />
                <ProgressBar />
                {getLayout(<Component {...pageProps} />)}
              </ThemeColorPresets>
            </NotistackProvider>
          </ThemeProvider>
        </CollapseDrawerProvider>
      </AuthProvider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie);

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
