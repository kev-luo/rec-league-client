import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function NavItem({ children, href = "/" }) {
  return (
    <Link href={href}>
      <ChakraLink>{children}</ChakraLink>
    </Link>
  );
}
