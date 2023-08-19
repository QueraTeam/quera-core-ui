import * as React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { useForm, useFormContext } from "react-hook-form";
import { UploadResume } from "./UploadResume";
import { WithRHF } from "../utils/storybook";

const meta: Meta<typeof UploadResume> = {
  component: UploadResume,
  decorators: [WithRHF(false)],
  parameters: {
    controls: {
      exclude: /(_.*)|(as)|(field)|(control)|(previousFile)|(resumeTypes)|(userProfile)/g,
    },
  },
};

export enum ResumeTypeEnum {
  UPLOAD = "CV",
  QCV = "QCV",
}

const CompleteUploadResume = (props) => {
  const { control } = useFormContext();

  return (
    <UploadResume
      field="resume"
      resumeTypes={ResumeTypeEnum}
      control={control}
      previousFile={{ name: "prev_file.pdf", size: 40343 }}
      userProfile={{
        fullName: `آقای هاشمی`,
        avatar: "/quera-core-ui/images/quera.png",
        progressPercent: 30,
      }}
      {...props}
    />
  );
};

export const Primary: StoryObj<typeof UploadResume> = {
  argTypes: {
    isMobile: {
      control: { type: "boolean" },
    },
    showFileSize: {
      control: { type: "boolean" },
    },
    minProgressPercent: {
      control: { type: "number" },
    },
  },
  args: {
    isMobile: false,
    showFileSize: true,
    minProgressPercent: 50,
  },
  render: (args) => <CompleteUploadResume {...args} />,
};

export default meta;
