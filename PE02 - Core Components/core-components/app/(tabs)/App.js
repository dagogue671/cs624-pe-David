import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TextInput, StyleSheet }  from 'react-native'
import iconImage from '../../assets/images/icon.png'


const mscs = {
    core: {
        header: 'Core Requirements (24 credits)',
        classes: [
            "CS 504 Software Engineering",
            "CS 506 Programming for Computing",
            "CS 519 Cloud Computing Overview",
            "CS 533 Computer Architecture",
            "CS 547 Secure Systems and Programs",
            "CS 622 Discrete Math and Algorithms for Computing",
            "DS 510 Artificial Intelligence for Data science",
            "DS 620 Machine Learning & Deep Learning"
        ]
    },
    depthOfStudy: {
        header: 'Depth of Study (6 Credits)',
        classes: [
            "CS 624 Full-Stack Development I",
            "CS 628 Full-Stack Development II"
        ]
    },
    capstone: {
        header: 'Capstone (3 Credits)',
        classes: [
            "CS 687 Computer Science Capstone *"
        ]
    }
}

const ClassSections = ({header, classlist}) => {
    return (
        <>
            {/* List Core requirements */}
            <Text style={styles.headers}>
                    {header}
            </Text>
            {classlist.map( x =>
                <Text style={styles.classtext}>{x}</Text>
            )}
        </>
    );
}


const App = () => {
    return (
   
        <View style={styles.container}>
            <ScrollView>
            <Image 
                source={iconImage}
                style={styles.imagestyle}
            />
            <Text></Text>
            <Text>Which course did you like?</Text>
            <TextInput 
                style={styles.textinput}
                defaultValue='ex. CS624'
            />
            <Text></Text>
            <ClassSections header={mscs.core.header} classlist={mscs.core.classes} />
            <ClassSections header={mscs.depthOfStudy.header} classlist={mscs.depthOfStudy.classes} />
            <ClassSections header={mscs.capstone.header} classlist={mscs.capstone.classes} />
            </ScrollView>
       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headers: {
        fontSize: 40,
        fontWeight: 'bold',
        backgroundColor: 'yellow'
    },
    classtext:{
        fontSize: 25
    },
    textinput: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1
    },
    imagestyle:{
        width:150,
        height:150,
        alignSelf:'center'
     
    }

})

export default App;