import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default function SignUpConfirm() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h4">
        Thank you for signing up!
      </Typography>
      <Typography variant="h6">
        Please check your email to confirm your account.
      </Typography>
    </Grid>
  );
}