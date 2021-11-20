import {StyleSheet} from 'react-native'

export const ColorScheme = {
    backGroundItemsColor: '#d3d3d3',
    backgroundColor: '#f7f7f7'
}
export const Styles = StyleSheet.create({
    personsCardContainer:{
        width:'100%',
        overflow:'hidden',
        backgroundColor: ColorScheme.backGroundItemsColor,
        alignSelf:'center',
    },
    primaryLabel:{
        fontSize:20,
        fontWeight:'bold'
    }
  });

export const GeneralStyles = StyleSheet.create({
    flexDirectionRow:{
        flexDirection: 'row'
    },
    fontBold:{
        fontWeight:'bold'
    }
  });

export const ContainerStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: ColorScheme.backgroundColor,
      paddingTop:10,
      paddingHorizontal:10   
    }
  });

  export const InputStyles = StyleSheet.create({
    input: { 
      height: 40,
      margin: 12,
      width:250
    },
    error:{
      color:'red'
    }
  });
  