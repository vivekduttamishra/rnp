import {Platform} from 'react-native';

let Colors= { 

    primary2: '#4a148c',
    primary:'red',
    accent: '#ff6f00',
    tab1:'darksalmon',
    tab2:'goldenrod',
    tabTextColor:'black'
    
};

Colors.headerTint= Platform.OS==='android' ?'white': Colors.primary;

export default Colors;