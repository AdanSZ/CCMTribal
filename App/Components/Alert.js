import { Alert } from 'react-native'

export const AlertOkCancel = (title, callback) =>{
    Alert.alert(
      title,
      "...",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => callback()}
      ]
  )}