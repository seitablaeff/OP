import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Header } from '@react-navigation/elements';
import HeaderButtons from '@/app/headerbuttons';
import FileItem from '@/app/FileItem';

export default function HomeScreen() {
  const files = [
    'Преступление и наказание.fb2',
    'Преступление и наказание.txt',
    'Преступление и наказание.epub',
    'default.doc', // Для неизвестных форматов также будет отображено расширение
  ];

  return (
    <>
      <Header
        title="Библиотека"
        headerStyle={styles.header}
        headerTitleStyle={styles.headerTitle}
        headerShadowVisible={true}
        headerRight={() => <HeaderButtons />}
      />
      <ThemedView style={styles.container}>
        <View style={styles.filesContainer}>
          {files.map((fileName, index) => (
            <FileItem key={index} fileName={fileName}/>
          ))}
        </View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#F1FEF9',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  headerTitle: {
    color: '#0a7ea4', // Цвет заголовка
  },
  filesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
