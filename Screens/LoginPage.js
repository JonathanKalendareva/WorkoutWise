import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer } from 'react-native';

export function LoginPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>login page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#552583',
        alignItems: 'center',
    },

    title: {
        marginTop: Dimensions.get('window').height / 31,
        color: '#FDB927',
        textAlign: 'center',
        fontSize: 40 / PixelRatio.getFontScale(),
        fontWeight: 'bold',
    },

}
);