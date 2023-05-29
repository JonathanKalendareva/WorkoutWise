import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { Auth } from 'aws-amplify';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form'

export function ForgetPassword() {
    const { control, handleSubmit } = useForm();
    
    const onSendPressed = async data =>
    { 
        await Auth.forgotPassword(data.email)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }

    return (
    <SafeAreaView style = {styles.container}>
        <View style={{ marginTop: 40 }} />
        <CustomInput
            name="email"
            placeholder={"Email"}
            control={control}
            rules={{
                required: 'Email is required',
                pattern: {
                    value: /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
                    message: 'Invalid email address'
                }
            }} />
    
    <CustomButton
        text="Send"
        onPress={handleSubmit(onSendPressed)} />
    </SafeAreaView>
    
    )
    

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#552583',
        alignItems: 'center',
    },

    image: {
        height: Dimensions.get('window').height / 31.4159265358979,
        width: Dimensions.get('window').height / 31.4159265358979,
        marginLeft: Dimensions.get('window').width / 5,
        marginRight: 5,
    },

    container_image: {
        backgroundColor: '#FDB927',
        marginLeft: Dimensions.get('window').height / 60,
        marginRight: Dimensions.get('window').height / 60,
        marginBottom: 10,
        borderRadius: 5,

        padding: 5,
        width: Dimensions.get('window').width / 1.22,
        flexDirection: 'row',

        alignItems: 'center',
    },

    container_row: {
        flexDirection: 'column',
        padding: 10,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#552583',
    }
}
);
