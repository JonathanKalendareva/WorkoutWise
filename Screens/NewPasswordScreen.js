import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';

export function NewPasswordScreen() {

    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const onVerifcationPressed = async data =>
    { 
        Auth.forgotPasswordSubmit(username, code, new_password)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }

  return (
    <SafeAreaView>
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
                name="Code"
                placeholder={"code"}
                control={control}
                rules={{
                    required: 'Code is required',
                    pattern: {
                        value: /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
                        message: 'Invalid Code'
                    }
                }}
            />
    <CustomInput
                name="new_password"
                placeholder={"Enter a new password"}
                control={control}
                rules={{
                    required: 'New Password is required',
                    pattern: {
                        value: /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
                        message: 'Invalid New Password'
                    }
                }}
            />
    <CustomButton
                text="Send"
                onPress={handleSubmit(onVerifcationPressed)} />
        
    </SafeAreaView>
    
)

}
