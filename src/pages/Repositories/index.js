import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';

import Header from '~/components/Header';

import styles from './styles.js';

const TabIcon = ({tintColor}) => (
  <Icon name="list-alt" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const {data} = await api.get(`/users/${username}/repos`);

    this.setState({data, loading: false});
  }

  henderList = () => <Text>List</Text>;

  render() {
    const {loading} = this.state;
    return (
      <View>
        <Header title="Repositórios" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.henderList()
        )}
      </View>
    );
  }
}
