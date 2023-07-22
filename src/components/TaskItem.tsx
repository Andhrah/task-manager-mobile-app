import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TaskItemProps = {
  task: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TaskItem;
