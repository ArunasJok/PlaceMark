import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };
  
  export const PlacenameSpec = {
    title: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
  };
  
  export const CategorySpec = {
    title: Joi.string().required(),
  };