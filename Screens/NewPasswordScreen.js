import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form'
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';

export function NewPasswordScreen({}) {

    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const onVerifcationPressed = async (data) => {
    const { email, code, new_password } = data;

  Auth.forgotPasswordSubmit(email, code, new_password)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};


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
                }}
            />
    <CustomInput
                name="code"
                placeholder={"Code"}
                control={control}
                rules={{
                    required: 'Code is required',
                    pattern: {
                        value: /^[0-9]{1,6}$/,
                        message: 'Invalid Code'
                    }
                }}
            />
    <CustomInput
                name="new_password"
                placeholder={"Enter a new password"}
                control={control}
                secureTextEntry
                rules={{
                    required: 'Password is required',
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        message: 'Password must: \
                                    \nContain at least one uppercase\
                                    \nContain at least one lowercase\
                                    \nContain at least one positive integer\
                                    \nContain at least one special character\
                                    \nBe at least 8 characters long'
                    },
                }}
            />
    <CustomButton
                text="Send"
                onPress={handleSubmit(onVerifcationPressed)} />
        
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
