
import { Button, Stack } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';
import withAuth from '../../components/private-route/private-route';
import Select from '../../components/select';
import ApplicationSteps from '../../routes/profile';

const Profile = () => {

  return (
    <>
      <ApplicationSteps isFirstStepper={false} />
    </>
  );
};

export default withAuth(Profile);
