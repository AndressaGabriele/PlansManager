import * as yup from 'yup';

const holidaySchema = yup.object().shape({
  title: yup.string().required('Título é obrigatório'),
  description: yup.string().required('Descrição é obrigatória'),
  fromDate: yup.date().required('Data de início é obrigatória'),
  toDate: yup.date().required('Data de término é obrigatória'),
  location: yup.string().required('Localização é obrigatória'),
  participants: yup.string(),
});

export default holidaySchema;
