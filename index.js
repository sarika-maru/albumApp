import React from 'react';
import { AppRegistry,View } from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/component/AlbumList'

const app= () => (
    <View>
        <Header headerText={'Albums'}/>
        <AlbumList/>
    </View>
    );

AppRegistry.registerComponent('album', () => app);
