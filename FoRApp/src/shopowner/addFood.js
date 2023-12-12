import React, {useEffect} from 'react';
import { useTheme } from '@react-native-material/core';
import { View, Modal, Button, Text, Alert } from 'react-native';
import styles from './style';

export default function AddFood({ modalVisible, setModalVisible }) {
    const {colors} = useTheme()

    useEffect(() => {
        if (!modalVisible) {
          setModalVisible(false);
        }
      }, [modalVisible, setModalVisible]);
    return (
       <View>
            <Modal animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Are you sure?");
                        setModalVisible(!modalVisible)
                    }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView} >
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Button title="Close" 
                            onPress={() => setModalVisible(!modalVisible)}/>
                    </View>
                </View>
            </Modal>
       </View>
    );
}
