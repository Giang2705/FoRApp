import React, { useState, useEffect, useCallback } from 'react';
import { TableView, Section, Cell } from 'react-native-tableview-simple';
import {StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import AddRestaurant from './addRestaurant';
import axios from 'axios';

export default function Dashbroad({ navigation, route }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [res, setRes] = useState([])

    const logingOut = () => {
        navigation.navigate('LoginPage'); // Just for testing
    };

    const addingRestaurant = () => {
        setModalVisible(true);
    };

    const deleteRes = useCallback (async (id) => {
        const url = `http://127.0.0.1:3000/api/restaurants/${id}`
        await axios.delete(url).then((response) => {
            alert("Delete restaurant successfully!")
        })
        .catch((err) =>{
          alert(err);
        })
    }, [])

    const getAllRes = useCallback (async () => {
        const url = "http://127.0.0.1:3000/api/restaurants/"
        await axios.get(url).then((response) => {
            const result = response.data;
            setRes(result)
        })
        .catch((err) =>{
          alert(err);
        })
    }, [])
    
    useEffect(() => {
        getAllRes()
    }, [getAllRes]);

    
    return (
        <View style={styles.container}>
            <View style={styles.adminBar}>
                <Image 
                    source={require("../../assets/sorrento.jpg")}
                    style={styles.logoImage} />
                <TouchableOpacity style={styles.customerList} onPress={() => {navigation.navigate('Dashbroad', {...route.params})}}>
                    <Text style={[styles.listText, styles.listTextInCustomerList]}>Customer List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.restaurantList}>
                    <Text style={styles.listText}>Restaurant List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutBtn} onPress={logingOut}>
                    <Text style={styles.logoutBtnText}>Log out</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <Text style={styles.rlContent}>Restaurant List</Text>
                <View style={styles.tableView}> 
                    <TableView>
                        <Section>
                            <View style={styles.tableRow}> 
                                <View style={styles.tableCell}>
                                    <Text style={styles.cellText}>Name</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.cellText}>Description</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.cellText}>Email</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.cellText}>Phone number</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <TouchableOpacity style={styles.addBtn} onPress={addingRestaurant}>
                                        <Text style={styles.addText} numberOfLines={1}>Add +</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {res.map((item, index) => (
                                <View key={index} style={styles.tableRow}>                                
                                    <View style={styles.tableCell}>
                                        <Text style={styles.cellText} numberOfLines={1}>{item.name}</Text>
                                    </View>

                                    <View style={styles.tableCell}>
                                        <Text style={styles.cellText} numberOfLines={1}>{item.description}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={styles.cellText} numberOfLines={1}>email</Text>
                                    </View>
                                    
                                    <View style={styles.tableCell}>
                                        <Text style={styles.cellText} numberOfLines={1}>phone number</Text>
                                    </View>
                                    <View style={[styles.tableCell, styles.btnTableCell]}>
                                        <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteRes(item._id)}>
                                            <Text style={styles.deleteText} numberOfLines={1}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </Section>
                    </TableView>
                <AddRestaurant navigation={navigation} route={route} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F9F9C6",
        flexDirection: 'row',
    },
    adminBar: {
        flex: 0.22,
        alignItems: "center",
        borderRightColor: "#61481C",
        borderRightWidth: 1,
    },
    main: {
        flex: 1,
        padding:5,
        alignItems: "center",
        marginHorizontal: "auto",
    },
    logoImage: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    customerList:{
        width: '100%',
        padding:10,
    },
    restaurantList:{
        width: '100%',
        padding:10,
    },
    listText: {
        flex: 1,
        fontSize:20,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
    },
    listTextInCustomerList:{
        backgroundColor:"white",
    },
    logoutBtnText: {
        fontSize: 24,
        color: "#61481C",
        fontWeight: 'bold',
    },
    logoutBtn: {
        marginTop: 50,
    },
    rlContent: {
        fontSize: 30,
        color: "#61481C",
        fontWeight: 'bold',
        padding:10,
    },
    text: {
        margin: 6,
        fontSize: 18,
        textAlign: 'center',
      },
    tableView: {
        width: '100%',
    },
    tableRow: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    tableCell: {
        flex:1,
        alignItems:'center',
        padding: 10,
        paddingHorizontal:50,
    },
    cellText: {
        fontSize: 14,
    },
    addBtn: {
        backgroundColor: 'gray',
        width: 60,
        alignItems:'center',
        borderRadius: 8,
    },
    addText: {
        fontSize: 18,
    },
    btnTableCell: {
        flexDirection:'row',
    },
    editBtn: {
        backgroundColor: 'gray',
        width: 60,
        alignItems:'center',
        borderRadius: 8,
    },
    editText: {
        fontSize: 18,
    },
    deleteBtn: {
        backgroundColor: '#C51605',
        width: 60,
        alignItems:'center',
        borderRadius: 8,
    },
    deleteText:{
        fontSize: 18,
        color: 'white',
    },
});