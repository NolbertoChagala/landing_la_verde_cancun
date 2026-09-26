# 🌿 La Verde Cancún — Landing Page

Landing page moderna, rápida y totalmente adaptable (*responsive*) desarrollada para **La Verde Cancún**. El proyecto implementa una arquitectura orientada a componentes con renderizado ultrarrápido y optimización de recursos visuales.

🔗 **Demo en vivo:** [https://landing-la-verde-cancun.vercel.app](https://landing-la-verde-cancun.vercel.app)

---

## 🚀 Tecnologías

- **[Astro](https://astro.build/)** — Framework web centrado en contenido con enfoque en cero JavaScript por defecto.
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework de utilidades CSS para diseño responsive y estilos consistentes.
- **TypeScript / JavaScript** — Tipado estático y lógica de componentes.
- **Vercel** — Infraestructura de despliegue continuo (CI/CD).

---

## 🛠️ Características Principales

- ⚡ **Carga ultrarrápida:** Arquitectura de islas y mínima carga de scripts.
- 📱 **Diseño 100% responsive:** Experiencia fluida en dispositivos móviles, tablets y escritorio.
- 🧭 **Navegación clara:** Estructura de secciones diseñada para promocionar productos, servicios y enlaces de contacto/redes sociales.

---

## 💻 Instalación y Uso Local

Sigue estos pasos para clonar y ejecutar el entorno de desarrollo en tu máquina:

1. **Clonar el repositorio:**

```bash
   git clone https://github.com/NolbertoChagala/landing_la_verde_cancun.git
   cd landing_la_verde_cancun
```

2. **Instalar dependencias:**

```bash
   npm install --legacy-peer-deps
```

3. **Iniciar el servidor local:**

```bash
   npm run dev
```

   Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver la aplicación.

4. **Compilar para producción:**

```bash
   npm run build
```

5. **Previsualizar la compilación localmente:**

```bash
   npm run preview
```

---

## 📁 Estructura del Proyecto

```text
public/
├── img/
│   ├── Comidas/
│   ├── Ingredientes/
│   ├── Comida.webp
│   └── La_Verde_Cancun.webp
├── favicon.ico
├── favicon.svg
└── La_Verde_Cancun.ico

src/
├── assets/
│   ├── astro.svg
│   └── background.svg
├── components/
│   ├── About.astro
│   ├── CardIngrediente.astro
│   ├── Footer.astro
│   ├── MenuMomentos.astro
│   └── Navbar.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css

.gitignore
.npmrc
astro.config.mjs
```

---

## 👨‍💻 Autor

Desarrollado por [Nolberto Chagala](https://github.com/NolbertoChagala).