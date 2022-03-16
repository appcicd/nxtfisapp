import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import NextLink from 'next/link';
// @mui
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false }, ref) => {
  const logo = (

    <Typography variant="h4" gutterBottom component="div" align="center">
      Fi$Cal
    </Typography>

  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/dashboard">{logo}</NextLink>;
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
