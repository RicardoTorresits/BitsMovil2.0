import React,{useContext, useEffect} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderCustomMood } from '../components/HeaderCustomMood'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/StadictisTheme';
import { Circle, VictoryBar, VictoryChart, VictoryPie } from 'victory-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MoodContext } from '../context/myMoodContext/MoodContext';



interface Props extends StackScreenProps<any, any> {};

export const StadicticsMoodScreen = ({navigation,route}:Props) => {
  
  const {top}=useSafeAreaInsets()

  const {dataMood,getData}=useContext(MoodContext)

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <View
      style={{top:top,alignItems:'center',flex:1,width:'100%'}}
    >
        <HeaderCustomMood navigation={navigation} route={route}/>

        <Text style={styles.Text}>
          Tu comentario se ha enviado con éxito
        </Text>

        <View
          style={styles.containerGraphics}
        >
          <Text
            style={{...styles.SubText,fontWeight:'400',marginTop:'5%'}}
          >
            Estos son los
          </Text>

          <Text
            style={{...styles.SubText,fontWeight:'700',marginBottom:'5%'}}
          >
            estados del día
          </Text>

          <View
          style={styles.graphicsContainer}
          >   
            <View style={{marginLeft:-60, marginTop:'-12%'}}>
                <VictoryPie
                  colorScale={["#367EEA","#42DBBE","#9C54E5", "#FEC104","#FB337B"]}
                  data={[
                    { y: dataMood?.result.Motivados, },
                    { y: dataMood?.result.Productivos },
                    { y: dataMood?.result.Aburridos },
                    { y: dataMood?.result.Presionados },
                    { y: dataMood?.result.Enfadados }
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
                  {dataMood?.result.Totales}
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
                style={{...styles.moodButton,marginTop:'8%'}}
              >
                <View
                  style={{...styles.moodColor,backgroundColor:'#367EEA'}}
                >
                </View>
                <Text
                  style={{...styles.moddText}}
                >
                  Motivado
                </Text>

                <View style={{flex:1}}/>


                <Text
                  style={styles.moodNumber}
                >
                  {dataMood?.result.Motivados}
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

                <View style={{flex:1}}/>


                <Text
                  style={styles.moodNumber}
                >
                  {dataMood?.result.Productivos}
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

                <View style={{flex:1}}/>


                <Text
                  style={styles.moodNumber}
                >
                  {dataMood?.result.Aburridos}
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
                  Presionado
                </Text>

                <View style={{flex:1}}/>



                <Text
                  style={styles.moodNumber}
                >
                  {dataMood?.result.Presionados}
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

                <View style={{flex:1}}/>

                <Text
                  style={styles.moodNumber}
                >
                  {dataMood?.result.Enfadados}
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
