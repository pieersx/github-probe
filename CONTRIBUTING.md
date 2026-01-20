# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Esta guía te ayudará a entender cómo puedes colaborar.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Configuración del Entorno](#configuración-del-entorno)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Guía de Estilo](#guía-de-estilo)
- [Conventional Commits](#conventional-commits)

---

## 📜 Código de Conducta

Este proyecto adhiere a un código de conducta. Al participar, se espera que sigas este código. Por favor, reporta comportamiento inaceptable.

---

## ❓ ¿Cómo Puedo Contribuir?

### 🐛 Reportar Bugs

1. Verifica que el bug no haya sido reportado previamente
2. Abre un nuevo issue usando la plantilla de Bug Report
3. Incluye toda la información relevante

### ✨ Sugerir Features

1. Verifica que la feature no haya sido sugerida previamente
2. Abre un nuevo issue usando la plantilla de Feature Request
3. Describe claramente el caso de uso

### 📝 Mejorar Documentación

- Corregir errores tipográficos
- Agregar ejemplos
- Mejorar explicaciones
- Traducir contenido

### 💻 Contribuir Código

1. Busca issues etiquetados como `good first issue` o `help wanted`
2. Comenta en el issue que quieres trabajar en él
3. Sigue el flujo de trabajo descrito abajo

---

## ⚙️ Configuración del Entorno

```bash
# 1. Fork el repositorio en GitHub

# 2. Clona tu fork
git clone git@github.com:TU_USUARIO/github-probe.git
cd github-probe

# 3. Agrega el upstream
git remote add upstream git@github.com:ORIGINAL/github-probe.git

# 4. Verifica los remotos
git remote -v
```

---

## 🔄 Flujo de Trabajo

### 1. Sincroniza tu fork

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

### 2. Crea una rama

```bash
# Usa prefijos descriptivos
git checkout -b feature/descripcion-corta
git checkout -b fix/descripcion-del-bug
git checkout -b docs/que-documentas
```

### 3. Haz tus cambios

- Escribe código limpio y documentado
- Sigue las guías de estilo
- Agrega tests si es necesario

### 4. Commits

```bash
# Usa conventional commits
git commit -m "feat: agregar nueva funcionalidad"
git commit -m "fix: corregir error en validación"
git commit -m "docs: actualizar README"
```

### 5. Push y Pull Request

```bash
# Push a tu fork
git push origin feature/mi-feature

# Abre un PR desde GitHub
# - Usa la plantilla de PR
# - Enlaza el issue relacionado
# - Describe tus cambios
```

### 6. Code Review

- Responde a los comentarios
- Haz los cambios solicitados
- Mantén tu rama actualizada con main

---

## 🎨 Guía de Estilo

### HTML

```html
<!-- Usa indentación de 2 espacios -->
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Título</title>
  </head>
  <body>
    <main>
      <h1>Contenido</h1>
    </main>
  </body>
</html>
```

### CSS

```css
/* Usa BEM para nombrar clases */
.block {}
.block__element {}
.block--modifier {}

/* Ordena propiedades alfabéticamente */
.ejemplo {
  background: #fff;
  color: #333;
  display: flex;
  margin: 0;
  padding: 1rem;
}
```

### JavaScript

```javascript
// Usa const y let, nunca var
const PI = 3.14159;
let contador = 0;

// Usa arrow functions cuando sea apropiado
const suma = (a, b) => a + b;

// Usa template literals
const mensaje = `Hola, ${nombre}!`;

// Usa async/await en lugar de callbacks
async function obtenerDatos() {
  const response = await fetch(url);
  return response.json();
}
```

---

## 📝 Conventional Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mensajes de commit.

### Formato

```
<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[pie opcional]
```

### Tipos permitidos

| Tipo       | Descripción                                |
|------------|--------------------------------------------|
| `feat`     | Nueva funcionalidad                        |
| `fix`      | Corrección de bug                          |
| `docs`     | Cambios en documentación                   |
| `style`    | Cambios de formato (no afectan código)     |
| `refactor` | Refactorización de código                  |
| `perf`     | Mejoras de rendimiento                     |
| `test`     | Agregar o modificar tests                  |
| `build`    | Cambios en build o dependencias            |
| `ci`       | Cambios en configuración de CI             |
| `chore`    | Tareas de mantenimiento                    |
| `revert`   | Revertir un commit anterior                |

### Ejemplos

```bash
feat: agregar validación de formulario
fix(auth): corregir expiración de sesión
docs: actualizar guía de instalación
style: formatear código con prettier
refactor(api): simplificar lógica de endpoints
test: agregar tests para componente Login
ci: configurar GitHub Actions
```

---

## 🏷️ Etiquetas de Issues

| Etiqueta           | Descripción                                |
|--------------------|--------------------------------------------|
| `bug`              | Algo no funciona correctamente             |
| `enhancement`      | Nueva funcionalidad o mejora               |
| `documentation`    | Mejoras en documentación                   |
| `good first issue` | Bueno para principiantes                   |
| `help wanted`      | Se necesita ayuda de la comunidad          |
| `question`         | Preguntas o discusiones                    |
| `wontfix`          | No se trabajará en esto                    |
| `duplicate`        | Issue duplicado                            |

---

## ❓ ¿Preguntas?

Si tienes preguntas, no dudes en:

1. Abrir un issue con la etiqueta `question`
2. Revisar issues existentes
3. Consultar la documentación

---

¡Gracias por contribuir! 🎉
