import { z } from "zod";

export const nameSchema = z.string({
  error: (issue) =>
    issue.input === undefined ? "Name is required" : "Not a string",
});

export const quantitySchema = z.number().default(0);

export const priceSchema = z.number().default(0);

export const imageSchema = z.string();
