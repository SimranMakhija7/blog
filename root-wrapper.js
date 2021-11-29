import React from "react"
import { ChakraProvider } from "@chakra-ui/gatsby-plugin"

export const rootWrapperElement = ({ element }) => {
  return <ChakraProvider resetCSS>{element}</ChakraProvider>
}
