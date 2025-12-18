// App.js

// Importamos React y el hook useState para manejar estado en componentes funcionales
import React, { useState } from 'react';

// Importamos componentes nativos desde React Native
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// Importamos nuestros componentes propios
import Header from './components/Header';
import TaskItem from './components/TaskItem';

// Componente principal de la aplicación
export default function App() {
  // Estado para el texto del input (lo que el usuario está escribiendo)
  const [taskText, setTaskText] = useState('');
  // Estado para la lista de tareas, inicialmente un array vacío
  const [tasks, setTasks] = useState([]);

  // Función que añade una nueva tarea a la lista
  const handleAddTask = () => {
    // Evita añadir tareas vacías o solo con espacios
    if (!taskText.trim()) return;

    // Creamos un objeto tarea con id, texto y si está hecha o no
    const newTask = {
      id: Date.now().toString(), // id basada en la marca de tiempo actual
      text: taskText.trim(),
      done: false,
    };

    // Actualizamos el estado de tareas:
    // - colocamos la nueva tarea al principio
    // - dejamos el resto de tareas después
    setTasks([newTask, ...tasks]);

    // Limpiamos el input después de añadir
    setTaskText('');
  };

  // Función que alterna (marca/desmarca) una tarea como completada
  const handleToggleTask = (id) => {
    // Usamos la versión funcional de setTasks, recibiendo el estado anterior (prev)
    setTasks((prev) =>
      // Recorremos todas las tareas
      prev.map((t) =>
        // Si la id coincide, devolvemos una copia con done invertido
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  // JSX que describe la interfaz de la aplicación
  return (
    // SafeAreaView respeta las zonas seguras de la pantalla (notch, barras, etc.)
    <SafeAreaView style={styles.safe}>
      {/* Configuramos el estilo de la barra de estado (iconos oscuros) */}
      <StatusBar barStyle="dark-content" />

      {/* Contenedor principal de la app */}
      <View style={styles.container}>
        {/* Cabecera con logo y títulos */}
        <Header />

        {/* Contenedor para el input de texto y el botón de añadir */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe una tarea..."
            // El valor del input está vinculado al estado taskText
            value={taskText}
            // Cada vez que el usuario escribe, actualizamos taskText
            onChangeText={setTaskText}
            // Al pulsar Enter/OK en el teclado, se añade la tarea
            onSubmitEditing={handleAddTask}
          />
          {/* Botón que también llama a handleAddTask al pulsarse */}
          <Button title="Añadir" onPress={handleAddTask} />
        </View>

        {/* Texto que muestra estadísticas de tareas */}
        <Text style={styles.counter}>
          Tareas totales: {tasks.length} · Completadas:{' '}
          {tasks.filter((t) => t.done).length}
        </Text>

        {/* Lista de tareas optimizada */}
        <FlatList
          // Array de datos que se van a mostrar
          data={tasks}
          // Función que indica qué usar como key única de cada ítem
          keyExtractor={(item) => item.id}
          // Cómo renderizar cada ítem de la lista
          renderItem={({ item }) => (
            // Para cada tarea, usamos el componente TaskItem
            <TaskItem item={item} onToggle={handleToggleTask} />
          )}
          // Componente a mostrar cuando no hay tareas en la lista
          ListEmptyComponent={
            <Text style={styles.empty}>
              Todavía no hay tareas. ¡Añade la primera!
            </Text>
          }
          // Estilo para el contenedor interno de la lista.
          // Si no hay tareas, centramos el contenido verticalmente.
          contentContainerStyle={
            tasks.length === 0 && styles.emptyContainer
          }
        />
      </View>
    </SafeAreaView>
  );
}

// Definición de estilos usando StyleSheet
const styles = StyleSheet.create({
  // Estilo del contenedor general (SafeAreaView)
  safe: {
    flex: 1, // ocupa toda la pantalla
    backgroundColor: '#f2f2f2', // gris claro de fondo
  },
  // Estilo del contenedor principal interno
  container: {
    flex: 1,
    paddingHorizontal: 16, // margen lateral
  },
  // Contenedor del input y del botón
  inputContainer: {
    flexDirection: 'row', // colocamos los elementos en fila (horizontal)
    gap: 8, // separación entre input y botón
    marginBottom: 8, // espacio bajo el bloque
  },
  // Estilo del campo de texto
  input: {
    flex: 1, // ocupa todo el espacio disponible antes del botón
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  // Estilo del texto del contador
  counter: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  // Estilo aplicado al contenedor de FlatList cuando está vacío
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center', // centrado vertical
  },
  // Estilo del texto de "no hay tareas"
  empty: {
    textAlign: 'center',
    color: '#777',
  },
});
