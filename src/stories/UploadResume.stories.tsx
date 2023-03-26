import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UploadResume } from "src/components/UploadResume";
import { useForm } from "react-hook-form";
import avatar from "../../static/images/quera.png";

export default {
  title: "Components/UploadResume",
  component: UploadResume,
} as ComponentMeta<typeof UploadResume>;

export enum ResumeTypeEnum {
  UPLOAD = "CV",
  QCV = "QCV",
}

export const Base: ComponentStory<typeof UploadResume> = () => {
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
        avatar,
        progressPercent: 30,
      }}
    />
  );
};
