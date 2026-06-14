import { PropsWithChildren, ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/theme';
export function Screen({children}:PropsWithChildren){return <View style={styles.screen}>{children}</View>}
export function Card({children}:PropsWithChildren){return <View style={styles.card}>{children}</View>}
export function Title({children}:PropsWithChildren){return <Text style={styles.title}>{children}</Text>}
export function Button({children,onPress,disabled}:{children:ReactNode;onPress?:()=>void;disabled?:boolean}){return <Pressable onPress={onPress} disabled={disabled} style={[styles.button,disabled&&styles.disabled]}><Text style={styles.buttonText}>{children}</Text></Pressable>}
export function ProgressBar({value}:{value:number}){return <View style={styles.track}><View style={[styles.fill,{width:`${Math.min(100,Math.round(value*100))}%`}]}/></View>}
const styles=StyleSheet.create({screen:{flex:1,backgroundColor:colors.soil,padding:16,gap:12},card:{backgroundColor:colors.parchment,borderRadius:18,padding:14,gap:8},title:{fontSize:28,fontWeight:'800',color:colors.white,marginVertical:6},button:{backgroundColor:colors.moss,padding:14,borderRadius:14,alignItems:'center',marginVertical:4},disabled:{backgroundColor:colors.disabled},buttonText:{color:colors.white,fontWeight:'800',fontSize:16},track:{height:12,backgroundColor:'#cab189',borderRadius:8,overflow:'hidden'},fill:{height:12,backgroundColor:colors.moss}});
