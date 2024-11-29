import React from "react";
import { Container, TipoText, Tipo, IconView, ValorText } from "./styles";

import Icon from 'react-native-vector-icons/Feather'

export default function HistoricoList() {
  return (
    <Container>
      <Tipo>
        <IconView>
          <Icon name='arrow-down' size={20} color='#fff'/>
          <TipoText>Receita</TipoText>
        </IconView>
      </Tipo>

<ValorText>
  R$ 950
</ValorText>

    </Container>
  )
}