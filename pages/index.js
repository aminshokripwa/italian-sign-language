import React from "react";
import Metatags from "../components/metatags"
import Link from 'next/link'

import {
  Text,
  Heading,
  Button,
  Image,
  Stack,
  Container,
  Box,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react"

export default function Home() {

  return (
    <ChakraProvider>
      <Metatags />
      <Box bgColor="#333333">
        <Container centerContent maxW="100%" height="100vh">
        <ul className="ulformainpage">
      <li>
      <Image
      src="united_state_flag.gif"
      alt="Sign language for English"
      width={200}
      height={200}
      textAlign="center"
    />
        <Link href="/english">English</Link>
      </li>
      <li>
      <Image
      src="italy_flag.gif"
      alt="Lingua dei segni per l'italiano"
      width={200}
      height={200}
      textAlign="center"
    />
        <Link href="/italian">Italien</Link>
      </li>
      <li>
      <Image
      src="france_flag.gif"
      alt="Langue des signes pour le français"
      width={200}
      height={200}
      textAlign="center"
    />
        <Link href="/french">Français</Link>
      </li>
    </ul>
        </Container>
      </Box>
    </ChakraProvider>
  )
}