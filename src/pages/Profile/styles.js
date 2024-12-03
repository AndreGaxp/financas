import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #f0f4ff;
align-items: center;
`
export const Message = styled.Text`
font-size: 18px;
font-weight: bold;
margin-top: 24px;
color: #121212;
`

export const Name = styled.Text`
font-size: 24px;
color: #121212;
margin-bottom: 24px;
margin-top: 8px;
padding: 0 14px;
`

export const NewLink = styled.TouchableOpacity`
background-color: #033ca5;
width: 90%;
height: 45px;
border-radius: 8px;
align-items: center;
justify-content: center;
margin-bottom: 15px;
`

export const NewText = styled.Text`
font-size: 18px;
font-weight: bold;
color: #fff;
`

export const LogoutButton = styled.TouchableOpacity`
border-width: 2px;
border-color: #ff3340;
width: 90%;
height: 45px;
border-radius: 8px;
align-items: center;
justify-content: center;`

export const LogoutText = styled.Text`
font-size: 18px;
font-weight: bold;
color: #ff3340;
`