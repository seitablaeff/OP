import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ReactReader } from 'react-reader';

interface EpubViewerProps {
  route?: {
    params?: {
      filePath: string;
    };
  };
}

const EpubViewer: React.FC<EpubViewerProps> = ({ route }) => {
  const filePath = route?.params?.filePath || ''; // Обработка сценария без пропсов
  const [location, setLocation] = useState<string | number>(0);

  return (
    <View style={styles.container}>
      {filePath && (
        <ReactReader
          url={filePath}
          location={location}
          locationChanged={(epubcfi: string) => setLocation(epubcfi)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});

export default EpubViewer;
