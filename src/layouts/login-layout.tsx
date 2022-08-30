import React, { FC /* useState */ } from 'react';
import Image from 'next/image';
import { Box, Flex} from '@chakra-ui/react';

const LoginLayout: FC<LoginLayoutProp> = ({ children }) => {
    return (
        <Box w='100%' h='100%'>
            {children}
        </Box>
)};

export default LoginLayout;