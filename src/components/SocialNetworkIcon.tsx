import { Link } from "@chakra-ui/react";
import {
  mdiFacebook,
  mdiGithub,
  mdiGooglePlus,
  mdiInstagram,
  mdiLinkedin,
  mdiTwitter,
  mdiYoutube,
} from "@mdi/js";
import { MdIcon, MdIconProps } from "./MdIcon";

enum SocialNetworkEnum {
  LinkedIn = "linkedin",
  Facebook = "facebook",
  GitHub = "github",
  Twitter = "twitter",
  Instagram = "instagram",
  Telegram = "telegram",
  YouTube = "youtube",
  GooglePlus = "google plus",
}

export type SocialNetworkType = {
  [key in SocialNetworkEnum]?: any;
};

const SOCIAL_NETWORK_TYPES_TO_ICON: SocialNetworkType = {
  [SocialNetworkEnum.LinkedIn]: mdiLinkedin,
  [SocialNetworkEnum.Facebook]: mdiFacebook,
  [SocialNetworkEnum.GitHub]: mdiGithub,
  [SocialNetworkEnum.Twitter]: mdiTwitter,
  [SocialNetworkEnum.Instagram]: mdiInstagram,
  [SocialNetworkEnum.YouTube]: mdiYoutube,
  [SocialNetworkEnum.GooglePlus]: mdiGooglePlus,
};

export const SocialNetworkIcon = ({
  url,
  type,
  ...props
}: Partial<MdIconProps> & { url: string; type: SocialNetworkType }) => {
  const icon = SOCIAL_NETWORK_TYPES_TO_ICON[type as keyof SocialNetworkType];
  return (
    <Link rel="noreferrer nofollow" href={url} target="_blank">
      <MdIcon
        _hover={{ color: "brand.600" }}
        icon={icon}
        boxSize={6}
        {...props}
      />
    </Link>
  );
};
