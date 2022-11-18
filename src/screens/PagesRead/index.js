import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Background} from '../../components/Background';
import IconArrow from '../../assets/icons/nav-arrow-left.svg';

import {styles} from './styles';

export function PagesRead() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.iconBack}>
              <TouchableOpacity onPress={handleGoBack}>
                <IconArrow fill="black" width={30} height={30} />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>
              Proident non aliquip sit est ea incididunt occaecat. Fugiat dolor
              exercitation labore ex fugiat proident. Magna irure consectetur
              minim eiusmod ex culpa. Laborum labore tempor dolore sint.
              Excepteur proident nostrud do quis aliqua velit sunt occaecat ea
              aute excepteur ipsum. Laboris minim do magna Lorem. Non ex
              consectetur Lorem eiusmod cillum anim sunt eu Lorem elit do quis.
              Id mollit dolor incididunt in laborum reprehenderit irure est
              occaecat anim aliquip irure. Voluptate et amet sit sunt deserunt
              non excepteur ad excepteur velit eu magna sunt officia. Cupidatat
              voluptate aliqua elit officia adipisicing eu laboris in ad anim
              officia Lorem. Anim elit tempor pariatur sint aliqua adipisicing
              adipisicing excepteur nisi excepteur eu exercitation eu. Et aute
              reprehenderit cillum nisi nulla est aliquip ut sint sint nostrud.
              Consectetur non minim culpa nostrud qui qui qui et. Ut eu amet
              consectetur est. Nostrud cillum ut pariatur quis eiusmod veniam
              magna et voluptate.
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>
              Proident non aliquip sit est ea incididunt occaecat. Fugiat dolor
              exercitation labore ex fugiat proident. Magna irure consectetur
              minim eiusmod ex culpa. Laborum labore tempor dolore sint.
              Excepteur proident nostrud do quis aliqua velit sunt occaecat ea
              aute excepteur ipsum. Laboris minim do magna Lorem. Non ex
              consectetur Lorem eiusmod cillum anim sunt eu Lorem elit do quis.
              Id mollit dolor incididunt in laborum reprehenderit irure est
              occaecat anim aliquip irure. Voluptate et amet sit sunt deserunt
              non excepteur ad excepteur velit eu magna sunt officia. Cupidatat
              voluptate aliqua elit officia adipisicing eu laboris in ad anim
              officia Lorem. Anim elit tempor pariatur sint aliqua adipisicing
              adipisicing excepteur nisi excepteur eu exercitation eu. Et aute
              reprehenderit cillum nisi nulla est aliquip ut sint sint nostrud.
              Consectetur non minim culpa nostrud qui qui qui et. Ut eu amet
              consectetur est. Nostrud cillum ut pariatur quis eiusmod veniam
              magna et voluptate.
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>
              Proident non aliquip sit est ea incididunt occaecat. Fugiat dolor
              exercitation labore ex fugiat proident. Magna irure consectetur
              minim eiusmod ex culpa. Laborum labore tempor dolore sint.
              Excepteur proident nostrud do quis aliqua velit sunt occaecat ea
              aute excepteur ipsum. Laboris minim do magna Lorem. Non ex
              consectetur Lorem eiusmod cillum anim sunt eu Lorem elit do quis.
              Id mollit dolor incididunt in laborum reprehenderit irure est
              occaecat anim aliquip irure. Voluptate et amet sit sunt deserunt
              non excepteur ad excepteur velit eu magna sunt officia. Cupidatat
              voluptate aliqua elit officia adipisicing eu laboris in ad anim
              officia Lorem. Anim elit tempor pariatur sint aliqua adipisicing
              adipisicing excepteur nisi excepteur eu exercitation eu. Et aute
              reprehenderit cillum nisi nulla est aliquip ut sint sint nostrud.
              Consectetur non minim culpa nostrud qui qui qui et. Ut eu amet
              consectetur est. Nostrud cillum ut pariatur quis eiusmod veniam
              magna et voluptate.
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>
              Ut nostrud reprehenderit deserunt elit elit magna nostrud
              cupidatat qui ex do ex enim elit. Quis voluptate cillum commodo
              reprehenderit duis duis incididunt. Consequat excepteur tempor
              esse quis sunt consequat tempor cillum culpa duis culpa in. Culpa
              cillum exercitation laboris sit consequat labore culpa occaecat
              anim sunt cupidatat sit culpa. Sit aute culpa ipsum id laboris
              dolor mollit labore mollit. Pariatur ipsum ex et irure voluptate
              minim officia sunt nostrud. Minim adipisicing esse exercitation
              anim dolore ad elit qui ea duis veniam aliqua et. In laboris amet
              velit nisi aute excepteur Lorem. Esse irure mollit magna est. Esse
              id ex reprehenderit non reprehenderit commodo esse tempor aliqua.
              Voluptate occaecat proident enim mollit incididunt ad do mollit.
              Cupidatat aliqua fugiat sint exercitation eu. Magna aliqua duis
              sint in est.
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>
              Proident non aliquip sit est ea incididunt occaecat. Fugiat dolor
              exercitation labore ex fugiat proident. Magna irure consectetur
              minim eiusmod ex culpa. Laborum labore tempor dolore sint.
              Excepteur proident nostrud do quis aliqua velit sunt occaecat ea
              aute excepteur ipsum. Laboris minim do magna Lorem. Non ex
              consectetur Lorem eiusmod cillum anim sunt eu Lorem elit do quis.
              Id mollit dolor incididunt in laborum reprehenderit irure est
              occaecat anim aliquip irure. Voluptate et amet sit sunt deserunt
              non excepteur ad excepteur velit eu magna sunt officia. Cupidatat
              voluptate aliqua elit officia adipisicing eu laboris in ad anim
              officia Lorem. Anim elit tempor pariatur sint aliqua adipisicing
              adipisicing excepteur nisi excepteur eu exercitation eu. Et aute
              reprehenderit cillum nisi nulla est aliquip ut sint sint nostrud.
              Consectetur non minim culpa nostrud qui qui qui et. Ut eu amet
              consectetur est. Nostrud cillum ut pariatur quis eiusmod veniam
              magna et voluptate.
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>
              Proident non aliquip sit est ea incididunt occaecat. Fugiat dolor
              exercitation labore ex fugiat proident. Magna irure consectetur
              minim eiusmod ex culpa. Laborum labore tempor dolore sint.
              Excepteur proident nostrud do quis aliqua velit sunt occaecat ea
              aute excepteur ipsum. Laboris minim do magna Lorem. Non ex
              consectetur Lorem eiusmod cillum anim sunt eu Lorem elit do quis.
              Id mollit dolor incididunt in laborum reprehenderit irure est
              occaecat anim aliquip irure. Voluptate et amet sit sunt deserunt
              non excepteur ad excepteur velit eu magna sunt officia. Cupidatat
              voluptate aliqua elit officia adipisicing eu laboris in ad anim
              officia Lorem. Anim elit tempor pariatur sint aliqua adipisicing
              adipisicing excepteur nisi excepteur eu exercitation eu. Et aute
              reprehenderit cillum nisi nulla est aliquip ut sint sint nostrud.
              Consectetur non minim culpa nostrud qui qui qui et. Ut eu amet
              consectetur est. Nostrud cillum ut pariatur quis eiusmod veniam
              magna et voluptate.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
