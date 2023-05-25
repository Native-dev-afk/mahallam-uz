import {
  Title,
  Text,
  Divider,
  Group,
  SimpleGrid,
  useMantineTheme,
  Stack,
  Center,
  Box,
} from '@mantine/core';
import { FormEvent } from 'react';
import { AddStepperProps } from '..';
import { AvatarImg } from '../../../../components/assets';
import DatePicker from '../../../../components/date-picker';
import Select from '../../../../components/select';
import TextInput from '../../../../components/text-input';

const FirstStep = ({ active, setActive }: AddStepperProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActive(1);
  };
  return (
    <form id="user-data" style={{ width: '100%' }} onSubmit={handleSubmit}>
      <Text weight={500} size="xl">
        Umumiy savollar
      </Text>
      <Divider color={'gray'} my={27} size={0.5} />
      <h5>1-savol</h5>
      <p>O'zbekiston Respublikasi konstitutsiyasi qachon qabul qilingan?</p>
      <Select style={{ marginBottom: '20px' }} data={['A: 1991-yil 10-dekabr', 'B: 1992-yil 8-dekabr']}></Select>
      <h5>2-savol</h5>
      <p>O'zbekiston Respublikasi davlat bayrog'i qachon qabul qilingan?</p>
      <Select style={{ marginBottom: '20px' }} data={['A: 1991-yil 18-dekabr', 'B: 1992-yil 8-dekabr']}></Select>
      <h5>3-savol</h5>
      <p>O'zbekiston Respublikasi davlat madhiyasi qachon qabul qilingan?</p>
      <Select style={{ marginBottom: '20px' }} data={['A: 1992-yil 10-dekabr', 'B: 1992-yil 8-dekabr']}></Select>
      <h5>4-savol</h5>
      <p>O'zbekiston Respublikasi davlat gerbi qachon qabul qilingan?</p>
      <Select style={{ marginBottom: '20px' }} data={['A: 1992-yil 2-iyul', 'B: 1992-yil 8-dekabr']}></Select>
    </form>
  );
};

export default FirstStep;
