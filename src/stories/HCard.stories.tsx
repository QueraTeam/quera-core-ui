import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Text,
} from "@chakra-ui/react";
import { mdiDomain, mdiMapMarkerOutline } from "@mdi/js";
import { HCard } from "src/components/HCard";
import { HiringCompanyLogo } from "src/components/HiringCompanyLogo";
import { IconPinJob } from "src/components/PinJob";
import { ShareLink } from "src/components/ShareLink";
import { MdIcon } from "src/components/MdIcon";
import { FadedTechnologyLabels } from "src/components/TechnologyLabel";

export default {
  title: "Components/HCard",
  component: HCard,
} as ComponentMeta<typeof HCard>;

export const Small: ComponentStory<typeof HCard> = () => (
  <Box w="21rem">
    <HCard
      image={
        <HiringCompanyLogo
          src={
            "https://quera.org/media/CACHE/images/public/careers" +
            "/logos/53967a6f971c47af9b2ead9fcfcc6d7f/0a84486bca81cce9664755489b1a786b.png"
          }
          name="quera"
          size={50}
          hiring
        />
      }
      title="آموزش برنامه نویسی"
      url="https://quera.ir"
    >
      <Text as="span" color="text.pale" fontSize="sm">
        به راحتی و زیبایی
      </Text>
    </HCard>
  </Box>
);

export const StaticWithImage: ComponentStory<typeof HCard> = () => (
  <Container maxW="container.md">
    <HCard
      title={<span>استخدام Front-End Developer</span>}
      image={
        <HiringCompanyLogo
          src={
            "https://quera.org/media/CACHE/images/public/careers" +
            "/logos/53967a6f971c47af9b2ead9fcfcc6d7f/0a84486bca81cce9664755489b1a786b.png"
          }
          name="quera"
          hiring
        />
      }
      url="https://quera.ir"
      topCorner={
        <HStack
          whiteSpace="nowrap"
          divider={<Divider orientation="vertical" h={6} />}
          ms={3}
          spacing={4}
        >
          <span title="یک روز پیش">یک روز پیش</span>
          <HStack spacing={1}>
            <ShareLink
              url="https://quera.ir"
              size="sm"
              helpText="کپی لینک آگهی"
              successText="لینک آگهی کپی شد"
            />
            <IconPinJob pinned={false} identity="نشان کردن" size="sm" />
          </HStack>
        </HStack>
      }
    >
      <HStack color="text.pale" spacing={[2, null, 4]}>
        <HStack spacing={[1, null, 2]} overflowX="hidden">
          <MdIcon boxSize={[4, null, 6]} icon={mdiDomain} />
          <Text overflowX="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
            کوئرا
          </Text>
        </HStack>

        <HStack spacing={[1, null, 2]}>
          <MdIcon boxSize={[4, null, 6]} icon={mdiMapMarkerOutline} />{" "}
          <span>تهران</span>
        </HStack>
      </HStack>
      <HStack
        color="text.pale"
        divider={<Divider orientation="vertical" h={4} />}
      >
        <span>Senior</span>
        <span>تمام‌وقت</span>
        <span>حقوق ۳,۰۰۰,۰۰۰ تا ۸,۰۰۰,۰۰۰</span>
        <span>دورکاری</span>
      </HStack>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <FadedTechnologyLabels
            oneLine
            technologies={[
              { name: "Laravel", code: "Laravel", is_main: true },
              { name: "Python", code: "Python", is_main: true },
            ]}
          />
        </div>
        <div style={{ height: 0, display: "flex", alignItems: "flex-end" }}>
          <Button variant="outline">ارسال رزومه</Button>
        </div>
      </div>
    </HCard>
  </Container>
);
