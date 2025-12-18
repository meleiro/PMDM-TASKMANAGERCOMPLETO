// components/TaskItem.js

// Importamos React y varios componentes nativos:
// - View: contenedor básico
// - Text: texto nativo
// - StyleSheet: para definir estilos
// - TouchableOpacity: zona táctil con efecto de opacidad
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Este componente recibe dos props:
// - item: objeto que representa una tarea (id, text, done)
// - onToggle: función que se ejecuta al pulsar para marcar o desmarcar la tarea
export default function TaskItem({ item, onToggle }) {
  return (
    // Hacemos toda la tarjeta táctil usando TouchableOpacity
    // onPress: cuando el usuario toca la tarea
    // Se llama a onToggle pasando la id de la tarea pulsada
    <TouchableOpacity onPress={() => onToggle(item.id)}>

      {/* View que representa el contenedor visual de la tarea */}
      {/* style recibe un array: estilos base + estilos condicionales */}
      {/* Si item.done es true, se añade styles.itemDone */}
      <View style={[styles.item, item.done && styles.itemDone]}>

        {/* Texto de la tarea */}
        {/* Igual: estilos base + estilos condicionales si está completada */}
        <Text style={[styles.text, item.done && styles.textDone]}>
          {item.text}
        </Text>

      </View>
    </TouchableOpacity>
  );
}

// Definimos los estilos
const styles = StyleSheet.create({
  // Estilo base de la tarjeta de tarea
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,

    // Sombra ligera en Android
    elevation: 1,

    // Sombra ligera en iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },

  // Estilo aplicado a tareas completadas
  itemDone: {
    backgroundColor: '#e0ffe0', // verde claro
  },

  // Estilo base para el texto
  text: {
    fontSize: 16,
  },

  // Estilo para texto tachado (tareas completadas)
  textDone: {
    textDecorationLine: 'line-through', // tachado
    color: '#888', // gris apagado
  },
});
