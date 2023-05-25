import { Text, Divider, SimpleGrid, Stack } from '@mantine/core';
import { FormEvent } from 'react';
import { AddStepperProps } from '..';
import DatePicker from '../../../../components/date-picker';
import FileInput from '../../../../components/file-input';
import Select from '../../../../components/select';
import TextInput from '../../../../components/text-input';

interface StepProps extends AddStepperProps {
  title?: string;
}

const SecondStep = ({ title, active, setActive }: StepProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActive(2);
  };
  return (
    <form id="documents" onSubmit={handleSubmit} style={{ width: '100%' }}>
      <Text weight={500} mb={10} size="xl">
        {"Yangi savollar"}
      </Text>
      <Divider color={'gray'} my={27} size={0.5} />
      <Stack spacing={30}>
        <FileInput
          required
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          placeholder="Savollar"
          label="Yangi savollar yuklang"
        />
        {/* <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Maʼlumotnoma-obʼektivka, nomzodning toʼldirilgan soʼrovnomasi va tarjimai holi"
          placeholder="Ma'lumotnoma"
          required
          infoText={`Maʼlumotnoma-obʼektivka, nomzodning toʼldirilgan soʼrovnomasi va tarjimai holi
- axborot-kommunikatsiya texnologiyalaridan qay darajada foydalanishi (masalan: turli ijtimoiy tarmoqlari, veb-sahifalar va h.k.);
- sportning qaysi turi bilan shugʼullanishi 
va erishgan yutuqlari; 
- sportchilarga yozilgan tavsifnomada erishgan yutuqlari bilan birga nomzod Oʼzbekiston milliy terma jamoasi aʼzosi hamda sport unvoniga (sport ustaligiga nomzod, sport ustasi, xalqaro toifadagi sport ustasi) ega boʼlsa, buni qayd etish zarur.`}
          label="Maʼlumotnoma-obʼektivka, nomzodning toʼldirilgan soʼrovnomasi va tarjimai holi"
        /> */}
        <Divider color={'gray'} my={5} size={0.5} />


      </Stack>
    </form>
  );
};

export default SecondStep;
