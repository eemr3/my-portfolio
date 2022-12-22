import * as yup from 'yup';

export const projectSchema = yup.object({
  title: yup.string().required(),
  urlImage: yup.string().required(),
  urlProject: yup.string().required(),
});
