# 📚 Proyectos Molones

**Proyectos Molones** es una biblioteca virtual para almacenar y mostrar proyectos relacionados con la tecnología.  
Está diseñada como una aplicación moderna y limpia, con una arquitectura basada en componentes de **React** y un estilo cuidado con **SCSS**, ofreciendo una experiencia de usuario fluida y agradable.

---

## 🧠 Descripción General del Proyecto

Esta aplicación nació como un proyecto front-end, desarrollado por un equipo de cinco personas, con el objetivo de proporcionar un espacio donde los usuarios puedan **guardar** y **visualizar** proyectos tecnológicos de forma **organizada** y **atractiva**.

En su primera fase, se trabajó únicamente en la parte visual y la lógica del cliente.  
Actualmente, el proyecto ya cuenta con **backend completo** y conexión a base de datos, ofreciendo así una aplicación **full-stack**.

---

## 🔍 Características Actuales

### 1. Landing Page
- Muestra una colección de tarjetas con todos los proyectos enviados.
- Diseño responsivo que se adapta a diferentes tamaños de pantalla.
- Presentación clara y visualmente agradable de cada proyecto.

### 2. Form Page
- Formulario dinámico para enviar un nuevo proyecto.
- Campos: nombre del proyecto, autor/a, enlaces relevantes, descripción, tecnologías utilizadas, entre otros.
- Vista previa **en tiempo real** de la tarjeta del proyecto mientras se completa el formulario.

### 3. Project Detail Page
- Página individual para cada proyecto.
- Muestra la información completa enviada en el formulario.
- URL única para poder compartir fácilmente el proyecto.

---

## 🛠 Tecnologías Utilizadas

### Frontend
- **React** – Framework principal
- **Vite** – Herramienta de build rápida con Hot Module Replacement
- **SCSS** – Estilos y maquetación
- **Arquitectura basada en componentes** – Mejor organización y escalabilidad

### Backend
- **Node.js + Express** – API REST para la gestión de proyectos
- **MySQL** – Base de datos relacional para almacenar la información
- **MySQL Workbench** – Creación y gestión de la base de datos
- **Aiven** – Conexión a base de datos remota (no local)
- **Render** – Despliegue de la API y conexión con el frontend

---

## 🚀 Flujo del Proyecto Full-Stack
1. **Frontend** recoge la información del usuario.
2. **Backend** recibe la información a través de la API.
3. **Base de datos MySQL** almacena y devuelve los datos.
4. **Frontend** renderiza la información actualizada desde el servidor.

---

## 👥 Equipo de Desarrollo
El proyecto ha sido realizado **íntegramente** (frontend y backend) por:  
**Josune**, **Chiara**, **Joana**, **Sandra** y **Montse**.

---

## 📦 Instalación y Uso

```bash
# Clonar repositorio
git clone https://github.com/usuario/proyectos-molones.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
