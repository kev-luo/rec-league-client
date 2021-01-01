import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  Input,
  FormControl,
  Textarea,
  Checkbox,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useField } from "formik";

export default function InputField({
  label,
  textarea,
  numInput,
  isCheckBox,
  ...props
}) {
  let InputOrTextarea;
  if (textarea) {
    InputOrTextarea = Textarea;
  } else {
    InputOrTextarea = Input;
  }

  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      {isCheckBox ? (
        <Checkbox {...field} {...props}>
          {label}
        </Checkbox>
      ) : numInput ? (
        <>
          <FormLabel htmlFor={field.name}>{label}</FormLabel>
          <NumberInput {...field} {...props} min={18} max={70}>
            <NumberInputField {...field} {...props}/>
          </NumberInput>
        </>
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
