import { z } from "zod";

import {
  nameSchema,
  quantitySchema,
  priceSchema,
  imageSchema,
} from "./schema.js";

export const validateProduct = (product) => {
  const productRules = {
    name: nameSchema,
    quantity: quantitySchema,
    price: priceSchema,
    image: imageSchema,
  };

  const schema = z.object(productRules);
  return schema.safeParse(product);
};
