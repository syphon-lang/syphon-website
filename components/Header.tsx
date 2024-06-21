import { useState } from "react";
import { Container, Group, Burger, Drawer, ScrollArea, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/Header.module.css";
import Image from "next/image";
import SyphonLogo from '@/public/SyphonWithoutBackground.svg'
import Link from "next/link";

interface HeaderProps {
  links: {
    label: string,
    link: string,
  }[]
}

export default function Header({links}: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const linksElements = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <Image src={SyphonLogo} alt={'Syphon'} width={40} height={40} />
          <Group gap={5} visibleFrom="xs">
            {linksElements}
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>

      <Drawer
      opened={opened}
      onClose={toggle}
      size={"100%"}
      padding={"md"}
      title={"Syphon"}
      hiddenFrom={"sm"}
      zIndex={1000000}
      >
        <ScrollArea>
          <Divider my={"sm"} />

          {linksElements}
          
        </ScrollArea>
      </Drawer>
    </>
  );
}
