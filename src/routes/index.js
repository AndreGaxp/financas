import React from "react";
import { Vie, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.rotes";

function Routes(){
  const loading = false;
  const signed = false;

  return(
    signed ? <View></View> : <AuthRoutes/>
  )
}

export default Routes;