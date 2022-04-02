import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#f0e7db',
        color: '#555'
      }
    })
  },
})