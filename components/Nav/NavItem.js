import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function NavItem({ children, name, href = "/" }) {
  return (
    <Link href={href} as={name ? `/teamHome/${name}` : undefined}>
      <ChakraLink>{children}</ChakraLink>
    </Link>
  );
}
