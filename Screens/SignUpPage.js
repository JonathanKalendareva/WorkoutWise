import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';

export function SignUpPage() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>sign up page</Text>
        </SafeAreaView>
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