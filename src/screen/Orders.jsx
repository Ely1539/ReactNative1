import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import OrderData from '../data/orders.json';
import OrderItem from '../components/OrderItem';

const OrdersScreen = () => {
    return (
        <View>
     
            <FlatList
                data={OrderData}
                keyExtractor={orderItem => orderItem.id}
                renderItem={({ item }) => (
                    <OrderItem
                        orderItem={item}
                    />
                )}
            />
        </View>
    );
}

export default OrdersScreen;

const styles = StyleSheet.create({});
