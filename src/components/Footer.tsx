// 
import { Box, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      as="footer"
      padding={4}
      backgroundColor="gray.700"
      color="white"
      textAlign="center"
    >
      <Text>&copy; 2025 Game Store. All rights reserved.</Text>
    </Box>
  );
};
