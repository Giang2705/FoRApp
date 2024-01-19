import React,{ useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function EditFood({ navigation }) {
    
    const [image, setImage] = useState(null);

    const [nameFood, setNameFood] = useState('');
    const [price, setPrice] = useState('');
    const [decription, setDecription] = useState('');

    const updating = () => {
        navigation.navigate('');
    };
    const canceling = () => {
        navigation.navigate('');
    };
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    return (
        <View style={styles.container}>
            <View style={styles.boxForm}>
                <View style={(styles.frameInput, styles.frameSelectImage)}>
                    {image ? (
                        <Image source={{ uri: image  }} style={styles.image}/>
                        ) : ( 
                        <Image source={require('../../assets/sorrento.jpg')} style={styles.image} />
                    )}
                    <TouchableOpacity onPress={pickImage}>
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
                        style={[styles.input, styles.decription]}
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
        width: 270,
        height: 120,
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