import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("name@mail.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Name").required(),
  lastName: Joi.string().example("Surname").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");
  
export const PlacenameSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Dirty old town"),
    location: Joi.string().required().example("Dublin"),
    description: Joi.string().required().example("City centre"),
    categoryid: IdSpec,
  })
  .label("Placename");

export const PlacenameSpecPlus = PlacenameSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacenamePlus");

export const PlacenameArraySpec = Joi.array().items(PlacenameSpecPlus).label("PlacenameArray");
  
export const CategorySpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Mountains"),
    userid: IdSpec,
    placenames: PlacenameArraySpec,
  })
  .label("Category");

export const CategorySpecPlus = CategorySpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("CategoryPlus");

export const CategoryArraySpec = Joi.array().items(CategorySpecPlus).label("CategoryArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");