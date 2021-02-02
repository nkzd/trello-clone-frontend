import * as yup from 'yup';

const newCardSchema = yup.object().shape({
  name: yup.string().required().max(255).min(1),
});

const newListSchema = yup.object().shape({
  name: yup.string().required().max(50).min(1),
});

const newDescriptionSchema = yup.object().shape({
  description: yup.string().max(1000),
});

const newLabelSchema = yup.object().shape({
  name: yup.string().max(30),
  color: yup.string().required(),
});

const isNewCardValid = async (card) => {
  return newCardSchema.validate(card);
};

const isNewListValid = async (list) => {
  return newListSchema.validate(list);
};

const isNewDescriptionValid = async (description) => {
  return newDescriptionSchema.validate(description);
};

const isNewLabelValid = async (label) => {
  return newLabelSchema.validate(label);
};

export {
  isNewCardValid,
  isNewListValid,
  isNewDescriptionValid,
  isNewLabelValid,
};
