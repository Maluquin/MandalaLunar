import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewDay from "../screen/newDay";
import Físico from'../screen/Físico';
import Presença from '../screen/Presença';
import Intuição from '../screen/Intuição';
import Comunicação from '../screen/comunicação'

const Stack = createStackNavigator()



export default function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="NewDay" component={NewDay} />
        <Stack.Screen name="Físico" component={Físico} />
        <Stack.Screen name="Presença" component={Presença} />
        <Stack.Screen name="Intuição" component={Intuição} />
        <Stack.Screen name="Comunicação" component={Comunicação} />
      </Stack.Navigator>
    );
  }