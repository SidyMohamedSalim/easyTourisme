"use client";
import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import { LoaderIcon, LocateIcon, Map, Users2 } from "lucide-react";

const primary = "#0ea5e9";

const mockdata = [
  {
    title:
      "Explorez le joyau de l'Afrique avec notre guide touristique spécialisé au Sénégal !",
    description:
      "Bienvenue sur notre site de tourisme dédié à l'émerveillement au Sénégal. Découvrez une myriade de sites touristiques captivants, des plages immaculées aux savanes sauvages. Quelle que soit votre nationalité, nous vous accompagnons dans cette aventure inoubliable.",
    icon: Map,
  },
  {
    title:
      "Voyagez au cœur du Sénégal, laissez-vous envoûter par sa richesse culturelle !",
    description:
      " Préparez-vous à vivre une immersion culturelle unique au Sénégal. Notre équipe de guides passionnés vous conduira à travers des sites historiques, des marchés colorés, et des cérémonies traditionnelles. Accompagnement personnalisé pour tous les voyageurs, car nous célébrons la diversité !",
    icon: Users2,
  },
  {
    title: "Le Sénégal plus que jamais proche",
    description:
      "Partez à l'aventure au Sénégal avec des guides locaux qui connaissent chaque recoin du pays. Que vous soyez en quête de sensations fortes dans le désert de Lompoul ou d'une escapade paisible à l'île de Gorée, nous vous offrons une expérience unique, sans barrières linguistiques, ouvert à toutes les nationalités.",
    icon: LocateIcon,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(30),
    fontWeight: 600,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(30),
    },
  },

  description: {
    maxWidth: 600,

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: primary,
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: primary,
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function Services() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} color={primary} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" px={"xs"} py="xl">
      <Group position="left">
        <Badge variant="filled" size="lg">
          Un meilleur accompagnement
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="left" mt="sm">
        Des souvenirs à chaque pas
      </Title>

      <Text c="dimmed" className={classes.description} ta="left" mt="md">
        Explorez le Sénégal avec des guides locaux experts !
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
