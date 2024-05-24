// components/FileItem.tsx
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface FileItemProps {
  fileName: string;
}

const FileItem: React.FC<FileItemProps> = ({ fileName }) => {
  const extension = fileName.split('.').pop();
  const navigation = useNavigation();

  const handlePress = () => {
    const filePath = `assets/books/${fileName}`;

    switch (extension) {
      case 'epub':
        navigation.navigate('EpubViewer', { filePath: filePath });
        break;
      default:
        alert('Этот формат файла не поддерживается');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.extensionText}>{extension?.toUpperCase()}</Text>
      </View>
      <Text style={styles.fileNameText}>{fileName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  box: {
    width: 100,
    height: 150,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  extensionText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  fileNameText: {
    marginTop: 10,
    fontSize: 15,
    color: '#333',
    width: 100,
    textAlign: 'center',
  },
});

export default FileItem;