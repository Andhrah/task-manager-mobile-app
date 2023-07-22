import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = '@tasks';

export const getTasksFromLocalStorage = async (): Promise<string[]> => {
  try {
    const tasksJson = await AsyncStorage.getItem(TASKS_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
  } catch (error) {
    console.error('Error getting tasks from local storage:', error);
    return [];
  }
};

export const saveTasksToLocalStorage = async (tasks: string[]): Promise<void> => {
  try {
    const tasksJson = JSON.stringify(tasks);
    await AsyncStorage.setItem(TASKS_KEY, tasksJson);
  } catch (error) {
    console.error('Error saving tasks to local storage:', error);
  }
};
