import React,{useContext, useEffect} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderCustomMood } from '../components/HeaderCustomMood'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/StadictisTheme';
import { Circle, VictoryBar, VictoryChart, VictoryPie } from 'victory-native';
import Svg from 'react-native-svg';
import { StackScreenProps } from '@react-navigation/stack';
import { MoodContext } from '../context/myMoodContext/MoodContext';



interface Props extends StackScreenProps<any, any> {};

export const StadicticsMoodScreen = ({navigation}:Props) => {
  
  const {top}=useSafeAreaInsets()

  const {dataMood,getData}=useContext(MoodContext)

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <View
      style={{top:top,justifyContent:'center',alignItems:'center'}}
    >
        <HeaderCustomMood/>

        <Text style={styles.Text}>
          Tu comentario se ha enviado con éxito
        </Text>

        <View
          style={styles.containerGraphics}
        >
          <Text
            style={{...styles.SubText,fontWeight:'400',marginTop:20}}
          >
            Estos son los
          </Text>

          <Text
            style={{...styles.SubText,fontWeight:'700'}}
          >
            estados del día
          </Text>

          <View
          style={styles.graphicsContainer}
          >   
            <View style={{marginLeft:-60, marginTop:-30}}>
                <VictoryPie
                  colorScale={["#367EEA","#42DBBE","#9C54E5", "#FEC104","#FB337B"]}
                  data={[
                    { y: dataMood?.result[0].Motivados, },
                    { y: dataMood?.result[0].Productivos },
                    { y: dataMood?.result[0].Aburridos },
                    { y: dataMood?.result[0].Presionados },
                    { y: dataMood?.result[0].Enfadados }
                   ]}
                  
                  width={300}
                  innerRadius={85}
                  style={{labels: {
                    fill: "white"
                  }}}
                />
                <Text
                  style={{
                    ...styles.graficText,
                    fontSize:40,
                    lineHeight:47,
                    fontWeight:'700'
                  }}
                >
                  {dataMood?.result[0].Totales}
                </Text>
                <Text
                  style={{
                    ...styles.graficText,
                    fontSize:16,
                    fontWeight:'400',
                    lineHeight:47,
                    marginTop:-16
                  }}
                >
                  Respuestas
                </Text>
            </View>


            <View style={{marginLeft:-50}}>
              <View
                style={{...styles.moodButton,marginTop:15}}
              >
                <View
                  style={{...styles.moodColor,backgroundColor:'#367EEA'}}
                >

                </View>

                <Text
                  style={styles.moddText}
                >
                  Motivado
                </Text>

                <Text
                  style={styles.moodNumber}
                >
                  {dataMood?.result[0].Motivados}
                </Text>

              </View>

              <View
                style={styles.moodButton}              
              >

                <View
                  style={{...styles.moodColor,backgroundColor:'#42DBBE'}}
                >

                </View>

                <Text
                  style={styles.moddText}
                >
                  Productivo
                </Text> 

                <Text
                  style={styles.moodNumber}
                >
                  {dataMood?.result[0].Productivos}
                </Text>

              </View>

              <View
                style={styles.moodButton}
              >

                <View
                  style={{...styles.moodColor,backgroundColor:'#9C54E5'}}
                >

                </View>

                <Text
                  style={styles.moddText}
                >
                  Aburrido
                </Text>

                <Text
                  style={styles.moodNumber}
                >
                  {dataMood?.result[0].Aburridos}
                </Text>

              </View>

              <View
                style={styles.moodButton}
              >
                <View
                  style={{...styles.moodColor,backgroundColor:'#FEC104'}}
                >

                </View>
                
                <Text
                  style={styles.moddText}
                >
                  Precionado
                </Text>

                <Text
                  style={styles.moodNumber}
                >
                  {dataMood?.result[0].Presionados}
                </Text>

              </View>

              <View
                style={styles.moodButton}
              >
                <View
                  style={{...styles.moodColor,backgroundColor:'#FB337B'}}
                >

                </View>
                <Text
                  style={styles.moddText}
                >
                  Enfadado
                </Text>

                <Text
                  style={styles.moodNumber}
                >
                  {dataMood?.result[0].Enfadados}
                </Text>

              </View>

            </View>
          </View>


          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.popToTop()}
          >
            <Text
              style={styles.buttonText}
            >
              Cerrar
            </Text>
          </TouchableOpacity>

        </View>

        

        

    </View>
  )
}
