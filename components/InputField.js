import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  Input,
  FormControl,
  Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";

export default function InputField({ label, textarea, ...props }) {
  let InputOrTextarea;
  if (textarea) {
    InputOrTextarea = Textarea;
  } else {
    InputOrTextarea = Input;
  }

  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextarea {...field} {...props} id={field.name} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}
