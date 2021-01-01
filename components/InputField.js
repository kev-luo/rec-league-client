import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  Input,
  FormControl,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
import { useField } from "formik";

export default function InputField({ label, textarea, isCheckBox, ...props }) {
  let InputOrTextarea;
  if (textarea) {
    InputOrTextarea = Textarea;
  } else {
    InputOrTextarea = Input;
  }

  const [field, { error }] = useField(props);
  console.log(field);

  return (
    <FormControl isInvalid={!!error}>
      {isCheckBox ? (
        <Checkbox>{label}</Checkbox>
      ) : (
        <>
          <FormLabel htmlFor={field.name}>{label}</FormLabel>
          <InputOrTextarea {...field} {...props} id={field.name} />
        </>
      )}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}
