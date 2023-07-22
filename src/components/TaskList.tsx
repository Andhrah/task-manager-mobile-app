import React from 'react';
import { View, FlatList } from 'react-native';
import TaskItem from './TaskItem';

type TaskListProps = {
  tasks: string[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default TaskList;
