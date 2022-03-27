import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    body: {
        flex:1
    },
    taskBox: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor:'#fff',
        borderRadius: 12,
        marginBottom: 16
    },
    text: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    task: {
        fontSize: 15,
        color:'#19196f',
        fontWeight: 'bold'
    },
    btnClose: {
        // display: 'flex',
        width: 30,
        minWidth: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#19196f',
        marginRight: 4,
        borderWidth:2,
        borderColor: "#fff",
        // color: '#fff',
        position: 'absolute',
        right: 0
    },
    clearIcon: {
        color: '#fff',
        // width: 50,
        // height:50 ,
        // minWidth: 50,
        // minHeight: 50,
        // borderRadius: 50,
        fontSize: 1,
        fontWeight: '100',
    },
});

export default styles