// components/Header.js

// Importamos React para poder crear componentes funcionales
import React from 'react';

// Importamos componentes nativos desde la librería principal de React Native
// - View: contenedor básico (como un <div> en la web)
// - Text: componente específico para mostrar texto
// - Image: componente para mostrar imágenes
// - StyleSheet: utilidad para definir estilos de forma organizada
import { View, Text, Image, StyleSheet } from 'react-native';

// Declaramos un componente funcional llamado "Header"
// "export default" indica que es el componente principal que se exporta desde este archivo
export default function Header() {
  // Todo componente React debe devolver (return) JSX,
  // que describe qué queremos renderizar en pantalla.
  return (
    // View actúa como un contenedor que agrupa el logo y los textos.
    // Le aplicamos el estilo "container" definido más abajo.
    <View style={styles.container}>
      {/* Componente de imagen que muestra el logo de la aplicación */}
      <Image
        // "source" indica de dónde viene la imagen.
        // require(...) le dice a React Native que incluya el archivo en el bundle.
        source={require('../assets/logo.png')}
        // Le aplicamos el estilo "logo" (ancho, alto, margen).
        style={styles.logo}
        // resizeMode define cómo se ajusta la imagen dentro del tamaño asignado.
        // "contain" mantiene la proporción y asegura que se vea completa.
        resizeMode="contain"
      />

      {/* Título principal de la pantalla, con estilo más grande y en negrita */}
      <Text style={styles.title}>Mi Primera App con React Native</Text>

      {/* Subtítulo, con tamaño de letra menor y color gris para indicar menos jerarquía */}
      <Text style={styles.subtitle}>Lista de tareas sencilla</Text>
    </View>
  );
}

// Definimos un conjunto de estilos usando StyleSheet.create.
// Esto nos permite escribir estilos similares a CSS, pero en forma de objeto JS.
const styles = StyleSheet.create({
  // Estilo aplicado al contenedor principal (View)
  container: {
    // Centra horizontalmente los elementos hijos dentro del View
    alignItems: 'center',
    // Añade espacio arriba y abajo del contenedor
    paddingVertical: 24,
    // Espacio entre cada elemento hijo (logo, título, subtítulo)
    gap: 4,
  },

  // Estilo aplicado a la imagen del logo
  logo: {
    // Ancho de la imagen en puntos
    width: 80,
    // Alto de la imagen en puntos
    height: 80,
    // Margen inferior para separar el logo del título
    marginBottom: 8,
  },

  // Estilo para el texto del título principal
  title: {
    // Tamaño de fuente más grande
    fontSize: 20,
    // Peso de la fuente; 700 equivale a negrita
    fontWeight: '700',
  },

  // Estilo para el texto del subtítulo
  subtitle: {
    // Tamaño de fuente más pequeño que el título
    fontSize: 14,
    // Color gris oscuro para diferenciarlo del texto principal
    color: '#555',
  },
});
