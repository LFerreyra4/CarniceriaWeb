# 🥩 Gui-Eli-Fer — Carnicería Boutique

> **Proyecto Full-Stack** de una carnicería premium con web pública de catálogo, carrito de compras y una **Progressive Web App (PWA)** de gestión de precios en tiempo real para el carnicero.

[![Live Demo](https://img.shields.io/badge/🌐_Demo_en_Vivo-GitHub_Pages-black?style=for-the-badge)](https://lferreyra4.github.io/CarniceriaWeb/)
[![PWA Admin](https://img.shields.io/badge/📱_Panel_Admin-PWA-red?style=for-the-badge)](https://lferreyra4.github.io/CarniceriaWeb/admin/admin.html)

---

## ✨ ¿Qué es este proyecto?

**Carnicería Boutique** es una solución web completa para un negocio de carnicería artesanal, compuesta por dos interfaces independientes:

| 🌍 Web Pública | 📱 App del Carnicero |
|---|---|
| Catálogo de productos con filtros por categoría | Panel de administración protegido por PIN |
| Carrito de compras con resumen de pedido | Gestión de precios y stock en tiempo real |
| Formulario de datos de envío | Sincronización instantánea con Firebase Cloud |
| Diseño responsive y premium (dark mode) | Instalable como app en iPhone/Android (PWA) |

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **HTML5 + CSS3** | Estructura y estilos base |
| **JavaScript (Vanilla)** | Lógica del cliente, carrito, formularios |
| **Tailwind CSS** | Sistema de diseño y componentes UI |
| **Firebase Firestore** | Base de datos en tiempo real (cloud) |
| **Service Worker** | Soporte offline y experiencia PWA |
| **Web App Manifest** | Instalación como app nativa |
| **GitHub Pages** | Deploy y hosting gratuito |

---

## 🏗️ Estructura del Proyecto

```
CarniceriaWeb/
├── index.html          # 🌍 Web pública — Catálogo y vitrina
├── checkout.html       # 🛒 Carrito de compras
├── datos.html          # 📋 Formulario de datos de envío
├── productos.json      # 📦 Catálogo local (fallback offline)
│
├── admin/
│   ├── admin.html      # 📱 PWA — Panel del carnicero
│   ├── sw.js           # ⚙️  Service Worker (soporte offline)
│   └── manifest.json   # 📲 Manifiesto PWA (instalación)
│
└── assets/
    └── images/         # 🖼️  Imágenes de productos y logos
```

---

## 🚀 Funcionalidades Destacadas

### Web Pública (`index.html`)
- 🔍 **Filtro por categoría** (Vaca, Cerdo, Pollo, Conejo)
- 🛒 **Carrito persistente** usando `localStorage`
- 💬 **Pedido por WhatsApp** con resumen automático del carrito
- 📱 **100% responsive** — adaptado para móvil y desktop

### Panel Admin (`admin/admin.html`)
- 🔐 **Acceso por PIN** — sección protegida para el negocio
- ☁️ **Sincronización en vivo** con Firebase Firestore
- 💰 **Edición de precios** con formato Argentino (`$8.500`)
- ✅ **Toggle de stock** — Activo / Pausado por producto
- 📲 **Instalable como app** en el escritorio del celular (PWA)
- ⚡ **Funciona offline** gracias al Service Worker

---

## 📸 Screenshots

### 🌍 Web Pública — Catálogo
> _Pantalla principal con filtros de categoría y cards de productos._

### 📱 Panel Admin — Gestión de Precios
> _Vista del carnicero para actualizar precios y publicar cambios a la nube._

---

## 🔌 Configuración de Firebase

Este proyecto usa **Firebase Firestore** como base de datos. Para conectar tu propia instancia:

1. Creá un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilitá **Firestore Database** en modo producción
3. Reemplazá el objeto `firebaseConfig` en `admin/admin.html` con tus credenciales
4. Actualizá las reglas de Firestore para permitir acceso de lectura pública

---

## 🧑‍💻 Sobre el Desarrollo

Este proyecto fue desarrollado de manera **iterativa y progresiva**, incorporando funcionalidades reales de negocio:

- **v1**: Web estática con catálogo de productos y carrito
- **v2**: Integración con Firebase para precios dinámicos
- **v3**: Panel de administración con PWA e instalación en celular
- **v4 (actual)**: Reorganización profesional del proyecto con arquitectura escalable

> El objetivo principal fue crear una solución **real y funcional** para un negocio, no un proyecto de práctica genérico.

---

## 👤 Autor

**Lorenzo Ferreyra**
- 🐙 GitHub: [@LFerreyra4](https://github.com/LFerreyra4)

---

*Proyecto en desarrollo activo — Se siguen incorporando mejoras continuamente.*
