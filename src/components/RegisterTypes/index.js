import React, { useState } from "react";
import { RegisterContainer, RegisterTypeButton, RegisterLabel } from "./styles";
import Feather from 'react-native-vector-icons/Feather'

export default function RegisterTypes({ type, sendTypeChanged }) {
  const [typeChecked, setTypeChecked] = useState(type)

  function changeType(name) {
    if (name === 'receita') {
      setTypeChecked('Receita')
      sendTypeChanged('Receita')
    }else{
      setTypeChecked('Despesa')
      sendTypeChanged('Despesa')
    }
  }


  return (
    <RegisterContainer>
      <RegisterTypeButton checked={typeChecked === 'Receita' ? true : false} onPress={() => changeType('Receita')}>
        <Feather name='arrow-up' size={25} color="#121212" />
        <RegisterLabel>
          Receita
        </RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton checked={typeChecked === 'Despesa' ? true : false} onPress={() => changeType('Despesa')}>
        <Feather name='arrow-down' size={25} color="#121212" />
        <RegisterLabel>
          Despesa
        </RegisterLabel>
      </RegisterTypeButton>


    </RegisterContainer>
  );
}