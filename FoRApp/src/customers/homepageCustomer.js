import React from 'react';
import { Text, Stack } from 'react-native';
import { useTheme } from '@react-navigation/native';

const HomepageCustomer = () => {
    const {colors} = useTheme();
    return (
        <Stack
            backgroundColor={colors.background}
            h="100%"
            w="100%"
            items="center"
            paddingTop={45}
            spacing={20}
        >

        </Stack>
    );
}

export default HomepageCustomer;
