import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        zIndex: 1,
        backgroundColor: '#19196f',
        paddingBottom: 20
    },
    inputStyle: {
        backgroundColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
        justifyContent: 'center',
    },
    inputBox: {
        flex: 1
    },
    addBox: {
        // width: 50,
        // height: 50,
        // backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 50,
        
        // marginLeft: 20,
    },
    addIcon: {
        fontSize: 25,
        color: "#19196f",
        fontWeight: '900',
    },
    btn: {
        // display: 'flex',
        width: 50,
        minWidth: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#fff',
        marginLeft: 20,
        borderWidth:7,
        borderColor: "#19196f",
    },

})

export default styles