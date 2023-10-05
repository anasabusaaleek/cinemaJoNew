import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  Alert,
  BackHandler,
} from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
//import SvgQRCode from "react-native-qrcode-svg";
const TicketScreen = () => {
  console.log('weeeeeeeeeeeeee')
  const route = useRoute()
  const navigation = useNavigation()
  console.log(route.params)
  const cart = useSelector((state) => state.cart.cart)
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0)
  const ticketPrice = route.params.seats.length * 8
  const fee = 3
  const grandTotal = ticketPrice + fee + total
  useLayoutEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
      gestureDirection: 'horizontal',
    })
  }, [])
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Want to end Session',
        'Go back to main screen',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () =>
              navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] }),
          },
        ],
        { cancelable: false }
      )

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      )

      return () => backHandler.remove()
    }
  }, [])
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          height: '95%',
          margin: 10,
          borderRadius: 6,
        }}
      >
        <View style={{ padding: 10 }}>
          <Text>{route.params.mall}</Text>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: '500' }}>English </Text>
          <Text style={{ color: 'red', fontSize: 15, fontWeight: '400' }}>
            CinemaJo TICKET
          </Text>
        </View>

        <Text
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 0.5,
            borderStyle: 'dashed',
            marginTop: 8,
            marginLeft: 8,
            marginRight: 8,
            height: 1,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>DATE & TIME</Text>
            <Text style={{ marginTop: 6, fontSize: 15 }}>
              {route.params.showtime}
            </Text>
            <Text>{route.params.selectedDate}</Text>
          </View>
        </View>

        <Text
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 0.5,
            borderStyle: 'dashed',
            marginTop: 4,
            marginLeft: 8,
            marginRight: 8,
            height: 1,
          }}
        />

        <View style={{ marginHorizontal: 10, marginTop: 7 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text>AUDI 3</Text>
            <Text style={{ color: 'gray', fontWeight: '500' }}>
              {route.params.seats.length} Tickets
            </Text>
          </View>
        </View>

        <View style={{ marginHorizontal: 10, marginTop: 7 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text>SEATS</Text>
            <Text style={{ color: 'gray', fontWeight: '500', color: 'red' }}>
              {route.params.selectedSeats}
            </Text>
          </View>
        </View>

        <Text
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 0.5,
            borderStyle: 'dashed',
            marginTop: 7,
            marginLeft: 8,
            marginRight: 8,
            height: 1,
          }}
        />

        <View
          style={{
            backgroundColor: '#FF6347',
            borderRadius: 3,
            margin: 10,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }}>
            Price Details
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, color: 'white' }}>TOTAL</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'white' }}>
              {grandTotal} $
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, color: 'white' }}>
              TICKETS {route.params.seats.length}
            </Text>
            <Text style={{ fontSize: 15, color: 'white' }}>
              {route.params.seats.length * 8} $
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, color: 'white' }}>
              Food & Beverages
            </Text>
            <Text style={{ fontSize: 15, color: 'white' }}>{total} $</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }}>
              Convenience Fee
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }}>
              3 $
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 6,
              marginRight: 10,
              justifyContent: 'center',
            }}
            source={{
              uri: 'https://www.techopedia.com/wp-content/uploads/2023/03/aee977ce-f946-4451-8b9e-bba278ba5f13.png',
            }}
          />
        </View>

        <Text style={{ fontSize: 16, fontWeight: '500', textAlign: 'center' }}>
          W33JNK3
        </Text>
        <Text
          style={{
            borderRadius: 1,
            borderStyle: 'dashed',
            borderColor: '#DCDCDC',
            height: 1,
            borderWidth: 0.5,
            margin: 10,
          }}
        />

        <Pressable
          onPress={() =>
            navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] })
          }
          style={{
            backgroundColor: '#FF6347',
            padding: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 4,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text
            style={{ color: 'white', textAlign: 'center', fontWeight: '500' }}
          >
            Return
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default TicketScreen

const styles = StyleSheet.create({})
