import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth } from 'aws-amplify';

export function NewPasswordScreen()
{
    const onSendPressed = async data =>
    { 
        await Auth.forgotPassword(data.username)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}
}

return(
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
    <CustomButton
                text="Send"
                onPress={handleSubmit(onSendPressed)} />
        
    </SafeAreaView>
    
)