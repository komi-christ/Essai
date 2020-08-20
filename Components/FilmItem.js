import React from 'react'
import {StyleSheet, View, Text,Image} from 'react-native'

class FilmItem extends React.Component{
    render(){
        const film = this.props.film
        return(
            <View style = {styles.main_container}>
               <Image
                 style={styles.image}
                 source={{uri: "image"}}
               />
                <View style = {styles.view_content}>
                    <View style = {styles.view_header}>
                        <Text style = {styles.title_text}>{film.title}</Text>
                        <Text style = {styles.vote_text}>{film.vote_average}</Text>
                    </View>    
                    <View style = {styles.view_description}>
                        <Text style = {styles.description_text} numberOfLines={6}>{film.overview}</Text> 
                    </View>
                    <View style = {styles.view_data}>
                        <Text style = {styles.text_data}>Sorti le {film.release_date}</Text>
                    </View>

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        height:190,
        flexDirection: 'row',
    },
    title_text:{
        fontWeight:'bold',
        fontSize: 20,
        flex:1,
        flexWrap:'wrap',
        paddingRight:5,
    },
    description_text:{
        fontStyle:'italic',
        color: '#666666',
    },
    text_data:{
        textAlign:'right',
        fontSize:14
    },
    vote_text:{
        fontWeight:'bold',
        fontSize:26,
        color:'#666666',
    },
    view_content:{
        flexDirection: 'column',
        margin:5,
        flex:1
    },
    view_header:{
        flexDirection: 'row',
        flex:3
    },
    view_description:{
        flex:7,
    },
    view_data:{
        flex:1
    },
    image:{
        width:120,
        height:180,
        margin: 5,
        backgroundColor: 'gray'
    }



})

export default FilmItem