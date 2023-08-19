import * as React from "react";
import { action } from "@storybook/addon-actions";
import { StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";

export const StorybookFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(action("[React Hooks Form] Submit"))}>{children}</form>
    </FormProvider>
  );
};

export const WithRHF =
  (showSubmitButton: boolean) =>
  (Story: React.FC): ReturnType<StoryFn<React.ReactElement>> => (
    <StorybookFormProvider>
      <Story />
      {showSubmitButton && <button type="submit">Submit</button>}
    </StorybookFormProvider>
  );
