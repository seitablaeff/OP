import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Header } from '@react-navigation/elements';
import HeaderButtons from '@/app/headerbuttons';

export default function MyFilesScreen() {
  const [files, setFiles] = useState([]); // Состояние для хранения добавленных файлов

  // Функция для добавления нового файла
  const handleAddFile = () => {
    const newFile = `Новый файл ${files.length + 1}.doc`; // Генерируем название нового файла
    setFiles(prevFiles => [...prevFiles, newFile]); // Добавляем новый файл в состояние
  };

  return (
    <>
      <Header
        title="Мои файлы"
        headerStyle={styles.header}
        headerTitleStyle={styles.headerTitle}
        headerShadowVisible={true}
        headerRight={() => <HeaderButtons />}
        accessibilityLabel="Шапка страницы Мои файлы"
      />
      <ThemedView style={styles.container}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddFile} accessibilityRole="button" accessibilityLabel="Добавить файл">
          <Text style={styles.addButtonText}>Добавить файл</Text>
        </TouchableOpacity>
        {/* Отображение добавленных файлов */}
        <View style={styles.filesContainer} accessibilityRole="list">
          {files.map((file, index) => (
            <View key={index} style={styles.fileItem} accessibilityRole="listitem">
              <Text style={styles.fileFormat}>{file.split('.').pop()}</Text>
              <Text style={styles.fileName}>{file}</Text>
            </View>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#F1FEF9',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  headerTitle: {
    color: '#0a7ea4',
  },
  addButton: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  filesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    marginRight: 10, // Отступ между элементами
  },
  fileFormat: {
    fontWeight: 'bold', // Жирный шрифт для формата файла
    marginBottom: 5,
  },
  fileName: {
    fontSize: 14,
  },
});
