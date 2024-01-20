import React from 'react';
import { TableView, Section, Cell } from 'react-native-tableview-simple';
import {StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";

const data = [
    { name: 'John Doe',phone: '974897',email: 'john@example.com', role: 'User', status: 'Active' },
    { name: 'John Doe',phone: '974897',email: 'john@example.com', role: 'User', status: 'Active' },
    { name: 'John Doe',phone: '974897',email: 'john@example.com', role: 'User', status: 'Active' },
  ];

export default function Dashbroad({ navigation }) {
    const movingBack = () => {
        navigation.navigate('LoginPage'); 
    };
    const movingRestaurantList = () => {
        navigation.navigate('RestaurantList');
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.adminBar}>
                <Image 
                    source={require("../../assets/sorrento.jpg")}
                    style={styles.logoImage} />
                <TouchableOpacity style={styles.customerList}>
                    <Text style={styles.listText}>Customer List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.restaurantList} onPress={movingRestaurantList}>
                    <Text style={[styles.listText, styles.listTextInRestaurantList]}>Restaurant List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutBtn} onPress={movingBack}>
                    <Text style={styles.logoutBtnText}>Log out</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <Text style={styles.clContent}>Customer List</Text>
                <View style={styles.tableView}> 
                    <TableView>
                        <Section>
                            <View style={styles.tableRow}> 
                                <View style={styles.tableCell}>
                                    <Text style={styles.cellText}>Name</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.cellText}>Email</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.cellText}>Phone</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.cellText}>Role</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.cellText}>Status</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    {/* <TouchableOpacity style={styles.addBtn} onPress={addingCustom}> */}
                                        <Text style={styles.addText} numberOfLines={1}></Text>
                                    {/* </TouchableOpacity> */}
                                </View>
                            </View>

                            {data.map((item, index) => (
                                <View key={index} style={styles.tableRow}>                                
                                    <View style={styles.tableCell}>
                                        <Text style={styles.cellText} numberOfLines={1}>{item.name}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={styles.cellText} numberOfLines={1}>{item.email}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={styles.cellText} numberOfLines={1}>{item.phone}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={styles.cellText} numberOfLines={1}>{item.role}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={styles.cellText} numberOfLines={1}>{item.status}</Text>
                                    </View>
                                    <View style={[styles.tableCell, styles.btnTableCell]}>
                                        <TouchableOpacity style={styles.deleteBtn} onPress={''}>
                                            <Text style={styles.deleteText} numberOfLines={1}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </Section>
                    </TableView>
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
    listTextInRestaurantList:{
        backgroundColor:"white",
    },
    logoutBtnText: {
        fontSize: 24,
        color: "#61481C",
        fontWeight: 'bold',
    },
    logoutBtn: {
        marginTop: 550,
    },
    clContent: {
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
        width: '95%',
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
        fontSize: 18,
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