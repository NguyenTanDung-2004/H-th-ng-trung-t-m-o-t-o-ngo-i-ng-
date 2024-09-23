import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../Components/CustomButton';
import { styles } from '../Styles/globaStyles';

const LoginScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email hoặc tên tài khoản"
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                secureTextEntry
            />
            <TouchableOpacity style={styles.checkbox}>
                <Text>Nhớ mật khẩu</Text>
            </TouchableOpacity>
            <CustomButton
                title="Đăng nhập"
                onPress={() => {/* Xử lý đăng nhập */ }}
                primary
            />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.socialButtons}>
                {/* Thêm nút đăng nhập mạng xã hội ở đây */}
            </View>
            <TouchableOpacity>
                <Text style={styles.registerLink}>Không có tài khoản? Đăng ký</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;