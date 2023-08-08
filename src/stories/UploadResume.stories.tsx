import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UploadResume } from "@querateam/qui-react";
import { useForm } from "react-hook-form";

export default {
  title: "Components/UploadResume",
  component: UploadResume,
  argTypes: {
    isMobile: {
      type: "boolean",
      defaultValue: "false",
    },
    showFileSize: {
      type: "boolean",
      defaultValue: "true",
    },
  },
} as ComponentMeta<typeof UploadResume>;

export enum ResumeTypeEnum {
  UPLOAD = "CV",
  QCV = "QCV",
}

export const Base: ComponentStory<typeof UploadResume> = (args) => {
  const { control } = useForm();

  return (
    <UploadResume
      field="resume"
      resumeTypes={ResumeTypeEnum}
      control={control}
      minProgressPercent={40}
      previousFile={{ name: "رزومه یک شخص نامشخص", size: 40343 }}
      userProfile={{
        fullName: `آقای هاشمی`,
        avatar: "/images/quera.png",
        progressPercent: 30,
      }}
      {...args}
    />
  );
};
