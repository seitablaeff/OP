import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const HeaderButtons = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleFontSelect = (fontName: string) => {
    console.log(`Selected font: ${fontName}`);
    toggleModal();
  };

  const fonts = ['default-font', 'Arial', 'Courier New', 'Times New Roman']; // Пример шрифтов

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} 
      onPress={toggleModal}
      accessibilityLabel="Нажмите, чтобы изменить шрифт из выпадающего списка">
        <Text style={styles.buttonText}>Ш</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          {fonts.map((font, index) => (
            <TouchableOpacity key={index} onPress={() => handleFontSelect(font)}>
              <Text style={styles.modalItem}>{font}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color: '#0A7EA4',
  },
  button: {
    backgroundColor: '#7FFBFF', // Фон кнопок
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center', // Выравнивание текста по центру
  },
  buttonText: {
    color: '#0a7ea4', // Цвет текста кнопок
    fontSize: 16,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalItem: {
    padding: 10,
    fontSize: 18,
  },
});

export default HeaderButtons;
