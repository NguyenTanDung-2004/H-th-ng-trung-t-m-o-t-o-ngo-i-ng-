import React, { useState } from "react"
import { Text, View } from "react-native"
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from "../Styles/globaStyles";
import CustomButton from "../Components/CustomButton";

const data = [
    { label: 'Loại 1', value: '1' },
    { label: 'Loại 2', value: '2' },

]; // example data


const RoleScreen: React.FC = () => {
    const [value, setValue] = useState<string>();
    const renderItem = (item: any) => {
        return (
            <View style={{
                marginLeft: 10,
                marginVertical: 10,
            }}>
                <Text style={{ fontSize: 15 }}>{item.label}</Text>

            </View>
        );
    };

    return (

        <View style={styles.container}>
            <Dropdown
                style={[styles.input, {}]}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Chọn học viên"
                containerStyle={{ borderRadius: 10 }}
                itemContainerStyle={{ borderRadius: 10 }}

                onChange={item => {
                    setValue(item.value);
                }}
                renderItem={renderItem}

            />

            <View style={styles.loginButton}>
                <CustomButton
                    title="Tiếp tục"
                    onPress={() => alert('chon hoc vien thanh cong')}
                    primary
                />
            </View>



        </View>
    )
}

export default RoleScreen