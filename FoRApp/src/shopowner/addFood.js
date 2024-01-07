import React, {useEffect, useState} from 'react';
import { useTheme, Stack } from '@react-native-material/core';
import { Avatar, View, Modal, Button, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from "react-native-vector-icons/Ionicons"
import FIcon from "react-native-vector-icons/Feather"


export default function AddFood({ modalVisible, setModalVisible }) {
    const {colors} = useTheme()

    const [inputData, setInputData] = useState({
        name: "",
        description: "",
        price: 0
    });
    
    // const [listImages, setListImages] = useState([]);
    // const [image, setImage] = useState(initialImage);
    // const [images, setImages] = useState([]);

    const addBtnPress = () => {
        setModalVisible(!modalVisible)
        console.log(inputData)
        fetch ('http://localhost:3000/foods', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputData)
        })
        .then(res => res.json()).then(
          data => {
            if (!data.error) {
                alert("Food created successfully!")
            } else {
              alert(data.error)
            }
          }
        )
    };

    // const upload = () => {
    //     try {
    //       listImages.map(async (imageItem) => {
    //         if (!imageItem) return alert("File not exist");
    
    //         if (imageItem.size > 1024 * 1024) return alert("Size too large!");
    
    //         if (imageItem.type !== "image/jpeg" && imageItem.type !== "image/png")
    //           return alert("File format is incorrect!");
    
    //         let formData = new FormData();
    //         formData.append("file", imageItem);
    
    //         const res = await axios.post("/api/upload", formData, {
    //           headers: {
    //             "content-type": "multipart/form-data",
    //           },
    //         });
    //         const newImage = {
    //           public_id: res.data.public_id,
    //           url: res.data.url,
    //         };
    
    //         setImage(newImage);
    //         images.push(newImage);
    //       });
    //       setImages(images);
    //       setListImages([]);
    //     } catch (err) {
    //       alert(err.response.data.msg);
    //     }
    //   };

    // const handleUpload = (e) => {
    //     e.preventDefault();
    //     for (let index = 0; index < e.target.files.length; index++) {
    //       listImages.push(e.target.files[index]);
    //     }
    
    //     setListImages(listImages);
    //     upload();
    //   };

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
                        <Stack spacing={8}>
                            <Text style={styles.modalHeader}>Add Food</Text>
                            <TouchableOpacity backgroundColor="white">
                            <FIcon
							name="upload"
							size={29}
                            style={styles.uploadPhoto}
						    />
                            </TouchableOpacity>
                            <Text style={styles.modalText}>Food's Name</Text>
                            <TextInput
                            style={styles.textInput}
                            color='#B4BABC'
                            onChangeText={text => setInputData({...inputData, name: text})}></TextInput>
                            <Text style={styles.modalText}>Price</Text>
                            <TextInput
                            style={styles.textInput}
                            color='#B4BABC'
                            onChangeText={text => setInputData({...inputData, price: text})}></TextInput>
                            <Text style={styles.modalText}>Description</Text>
                            <TextInput
                            style={styles.descriptionInput}
                            color='#B4BABC'
                            inputMode='text'
                            multiline={true}
                            onChangeText={text => setInputData({...inputData, description: text})}
                            />
                            
                        </Stack>
                        <Stack direction='row' spacing={15} style={styles.buttonForm}>
                            <Button title="Add"  style={{marginRight:10}}
                                onPress={() => addBtnPress()}/>
                            <Button title="Cancel" color="#C51605" style={{marginLeft:10}}
                                onPress={() => setModalVisible(!modalVisible)}/>
                        </Stack>
                    </View>
                </View>
            </Modal>
       </View>
    );
}
