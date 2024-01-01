import React,{ useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from "react-native";
import ImagePicker from 'react-native-image-picker';

export default function EditFood({ navigation }) {
    
    const [selectedImage, setSelectedImage] = useState(null);

    const [nameFood, setNameFood] = useState('');
    const [price, setPrice] = useState('');
    const [decription, setDecription] = useState('');

    const updating = () => {
        console.log('../../images', selectedImage);
        navigation.navigate('');
    };
    const canceling = () => {
        navigation.navigate('');
    };
    
    const handleImagePicker = () => {
        let options = {
          title: 'Select Image',
          storageOptions: {
            skipBackup: true,
            path: '../../images',
          },
        };
        
        ImagePicker.showImagePicker(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            setSelectedImage(response.uri);
          }
        });
      };

    return (
        <View style={styles.container}>
            <View style={styles.boxForm}>
                <View style={(styles.frameInput, styles.frameSelectImage)}>
                    <Image source={require("../../images/logo.png")} style={styles.image} />
                    {/* {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />} */}
                    <TouchableOpacity onPress={handleImagePicker}>
                        <Text style={styles.imagePickerText}>Change Image</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.frameInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name Food" // Needing to use the data
                        onChangeText={text => setNameFood(text)}
                        value={nameFood}/>
                </View>
                <View style={styles.frameInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Price"  // Needing the data
                        onChangeText={text => setPrice(text)}
                        value={price}/>
                </View>
                <View style={styles.frameInput}>
                    <TextInput
                        style={(styles.input, styles.decription)}
                        placeholder="Decription"  // Needing the data
                        onChangeText={text => setDecription(text)}
                        value={decription}
                        multiline={true}
                        numberOfLines={5}
                        />
                </View>
            </View>
            <View style={styles.containerBtns}>
                    <TouchableOpacity style={styles.cancelBtn} onPress={canceling}>
                        <Text style={styles.cancalText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.updateBtn} onPress={updating}>
                        <Text style={styles.updateText}>Update</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F9F9C6",
        alignItems: "center",
        padding: 24,
    },
    boxForm:{
        alignItems: "center",
        padding: 40,
        width: 'auto',
        height: 'auto',
        borderRadius: 20,
    },
    frameInput: {
        flexDirection: 'row',
        padding: 20,
    },
    frameSelectImage: {
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    imagePickerText: {
        backgroundColor: 'gray',
        padding: 7,
        borderRadius: 10,


    },
    input: {
        flex: 1, 
        borderColor: '#61481C',
        fontSize:20,
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 20,
        backgroundColor:"#FFFFFF",

    },
    decription: {
        flex: 1, 
        borderColor: '#61481C',
        fontSize:20,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        width: 270,
        backgroundColor:"#FFFFFF",
    },
    textView: {
        width: 180,
        padding: 10,
        fontSize: 20,
    },
    containerBtns: {
        flexDirection: 'row',
        padding:20,
    },
    cancelBtn: {
        paddingHorizontal: 10,
    },
    cancalText: {
        backgroundColor: "#C51605",
        color: "#ffffff",
        fontSize: 24,
        padding: 8,
        borderRadius: 10,
    },
    updateBtn: {
        paddingHorizontal: 10,
    },
    updateText: {
        backgroundColor: "gray",
        color: "#ffffff",
        fontSize: 24,
        padding: 8,
        paddingHorizontal:12,
        borderRadius: 10,
    },

})