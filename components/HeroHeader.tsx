import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconBolt, IconLine, IconBrain } from "@tabler/icons-react";
import SyphonLogo from "@/public/SyphonWithoutBackground.svg";
import Image from "next/image";
import classes from "@/styles/HeroHeader.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HeroHeader() {
  const theme = useMantineTheme();
  const router = useRouter();
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Syphon</span> A general-purpose
            programming language for scripting and all sort of stuff
          </Title>

          <List mt={30} spacing="sm" size="sm">
            <List.Item
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconBolt
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <b>Fast</b> – It is made while performance in mind for those who
              want fast and efficient programming
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconLine
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <b>Simple</b> – It does not require a lot of complexity to make a
              hello world program like others{" "}
              <span style={{ color: theme.colors.gray[6] }}>(Java)</span>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconBrain
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <b>Understandable</b> – The design is very human
            </List.Item>
          </List>

          <Group mt={30}>
            <Link href={"/docs/intro"}>
              <Button radius="xl" size="md" className={classes.control}>
                Get Started
              </Button>
            </Link>
            <Link href={"https://github.com/syphon-lang/syphon"}>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source Code
              </Button>
            </Link>
          </Group>
        </div>
        <Image src={SyphonLogo} alt="Syphon" className={classes.image} />
      </div>
    </Container>
  );
}
