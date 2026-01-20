# 🎯 Ejercicios Prácticos de Git & GitHub

> Practica estos ejercicios para dominar Git como un profesional.

---

## 📋 Índice

1. [Nivel Básico](#-nivel-básico)
2. [Nivel Intermedio](#-nivel-intermedio)
3. [Nivel Avanzado](#-nivel-avanzado)
4. [Desafíos DevOps](#-desafíos-devops)

---

## 🟢 Nivel Básico

### Ejercicio 1: Configuración Inicial

**Objetivo:** Configurar Git correctamente en tu máquina.

```bash
# 1. Configura tu nombre y email
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# 2. Configura VS Code como editor
git config --global core.editor "code --wait"

# 3. Configura la rama por defecto como 'main'
git config --global init.defaultBranch main

# 4. Verifica tu configuración
git config --list
```

**Verificación:** Ejecuta `git config user.name` y `git config user.email`

---

### Ejercicio 2: Tu Primer Repositorio

**Objetivo:** Crear un repositorio y hacer tu primer commit.

```bash
# 1. Crea una carpeta y entra en ella
mkdir mi-primer-repo && cd mi-primer-repo

# 2. Inicializa el repositorio
git init

# 3. Crea un archivo README
echo "# Mi Primer Repositorio" > README.md

# 4. Verifica el estado
git status

# 5. Agrega el archivo al staging
git add README.md

# 6. Haz tu primer commit
git commit -m "feat: crear repositorio inicial"

# 7. Verifica el historial
git log
```

---

### Ejercicio 3: Flujo Básico de Trabajo

**Objetivo:** Practicar add, commit, y ver diferencias.

```bash
# 1. Crea tres archivos
echo "Archivo 1" > archivo1.txt
echo "Archivo 2" > archivo2.txt
echo "Archivo 3" > archivo3.txt

# 2. Agrega y commitea cada uno por separado
git add archivo1.txt
git commit -m "feat: agregar archivo 1"

git add archivo2.txt
git commit -m "feat: agregar archivo 2"

git add archivo3.txt
git commit -m "feat: agregar archivo 3"

# 3. Modifica archivo1.txt
echo "Línea adicional" >> archivo1.txt

# 4. Ve las diferencias
git diff

# 5. Commitea el cambio
git add archivo1.txt
git commit -m "docs: agregar línea a archivo 1"

# 6. Ve el historial
git log --oneline
```

---

### Ejercicio 4: Conectar con GitHub

**Objetivo:** Subir tu repositorio a GitHub.

```bash
# 1. Crea un repositorio en GitHub (sin README)

# 2. Agrega el remoto
git remote add origin git@github.com:TU_USUARIO/mi-primer-repo.git

# 3. Verifica el remoto
git remote -v

# 4. Sube tus cambios
git push -u origin main

# 5. Verifica en GitHub que tus archivos estén ahí
```

---

## 🟡 Nivel Intermedio

### Ejercicio 5: Branching Básico

**Objetivo:** Trabajar con ramas.

```bash
# 1. Crea una rama feature
git switch -c feature/nueva-funcionalidad

# 2. Haz algunos cambios
echo "Nueva funcionalidad" > feature.txt
git add feature.txt
git commit -m "feat: agregar nueva funcionalidad"

# 3. Vuelve a main
git switch main

# 4. Verifica que feature.txt NO existe en main
ls

# 5. Fusiona la rama feature
git merge feature/nueva-funcionalidad

# 6. Verifica que ahora SÍ existe
ls

# 7. Elimina la rama (ya no la necesitas)
git branch -d feature/nueva-funcionalidad
```

---

### Ejercicio 6: Resolver Conflictos

**Objetivo:** Aprender a resolver conflictos de merge.

```bash
# 1. Crea un archivo base
echo "Línea 1" > conflicto.txt
git add conflicto.txt
git commit -m "feat: crear archivo de prueba"

# 2. Crea rama A y modifica
git switch -c rama-a
echo "Modificación de rama A" > conflicto.txt
git add conflicto.txt
git commit -m "feat: cambio en rama A"

# 3. Vuelve a main y crea rama B
git switch main
git switch -c rama-b
echo "Modificación de rama B" > conflicto.txt
git add conflicto.txt
git commit -m "feat: cambio en rama B"

# 4. Fusiona rama-a a main
git switch main
git merge rama-a

# 5. Intenta fusionar rama-b (habrá conflicto)
git merge rama-b

# 6. Resuelve el conflicto
# Abre conflicto.txt, verás algo como:
# <<<<<<< HEAD
# Modificación de rama A
# =======
# Modificación de rama B
# >>>>>>> rama-b

# Edita manualmente para dejarlo como quieras:
echo "Combinación de A y B" > conflicto.txt

# 7. Marca como resuelto
git add conflicto.txt
git commit -m "fix: resolver conflicto entre rama-a y rama-b"
```

---

### Ejercicio 7: Stash

**Objetivo:** Guardar cambios temporalmente.

```bash
# 1. Haz algunos cambios sin commitear
echo "Trabajo en progreso" > wip.txt

# 2. Oh no, necesitas cambiar de rama pero no quieres commitear
git stash push -m "trabajo en progreso de feature X"

# 3. Verifica que el archivo ya no está
ls wip.txt  # No existe

# 4. Cambia de rama, haz algo
git switch -c otra-rama
echo "Otro trabajo" > otro.txt
git add otro.txt
git commit -m "feat: otro trabajo"

# 5. Vuelve a tu rama original
git switch main

# 6. Recupera tu trabajo
git stash pop

# 7. Verifica que wip.txt está de vuelta
ls wip.txt  # ¡Existe!
```

---

### Ejercicio 8: Rebase Interactivo

**Objetivo:** Modificar historial de commits.

```bash
# 1. Crea varios commits con mensajes "malos"
echo "1" > numeros.txt && git add . && git commit -m "uno"
echo "2" >> numeros.txt && git add . && git commit -m "dos"
echo "3" >> numeros.txt && git add . && git commit -m "tres"
echo "4" >> numeros.txt && git add . && git commit -m "cuatro"
echo "5" >> numeros.txt && git add . && git commit -m "cinco"

# 2. Inicia rebase interactivo de los últimos 5 commits
git rebase -i HEAD~5

# 3. En el editor:
# - Cambia "pick" a "reword" en el primero para cambiar mensaje
# - Cambia "pick" a "squash" en el 2 y 3 para unirlos al anterior
# - Deja "pick" en el 4
# - Cambia "pick" a "drop" en el 5 para eliminarlo

# 4. Guarda y sigue las instrucciones

# 5. Verifica el resultado
git log --oneline
```

---

## 🔴 Nivel Avanzado

### Ejercicio 9: Git Bisect

**Objetivo:** Encontrar el commit que introdujo un bug.

```bash
# 1. Crea un script de prueba
cat > test.sh << 'EOF'
#!/bin/bash
grep -q "bug" codigo.txt && exit 1 || exit 0
EOF
chmod +x test.sh

# 2. Crea commits "buenos"
echo "versión 1" > codigo.txt && git add . && git commit -m "v1"
echo "versión 2" > codigo.txt && git add . && git commit -m "v2"
echo "versión 3" > codigo.txt && git add . && git commit -m "v3"

# 3. Introduce el "bug"
echo "bug introducido" > codigo.txt && git add . && git commit -m "v4"

# 4. Más commits después del bug
echo "bug sigue aquí" > codigo.txt && git add . && git commit -m "v5"
echo "bug todavía" > codigo.txt && git add . && git commit -m "v6"

# 5. Usa bisect para encontrarlo
git bisect start
git bisect bad HEAD
git bisect good HEAD~5

# 6. Automatiza con el script
git bisect run ./test.sh

# 7. Git te dirá qué commit introdujo el bug

# 8. Termina bisect
git bisect reset
```

---

### Ejercicio 10: Cherry-pick

**Objetivo:** Aplicar commits específicos a otra rama.

```bash
# 1. Crea una rama con varios commits
git switch -c feature/muchos-cambios
echo "cambio 1" > c1.txt && git add . && git commit -m "cambio 1"
echo "cambio 2" > c2.txt && git add . && git commit -m "cambio 2"
echo "cambio 3" > c3.txt && git add . && git commit -m "cambio 3"

# 2. Guarda los hashes de los commits que quieres
git log --oneline -3
# Ejemplo: abc123 cambio 3, def456 cambio 2, ghi789 cambio 1

# 3. Crea otra rama desde main
git switch main
git switch -c feature/solo-algunos

# 4. Cherry-pick solo el commit 2 (usa tu hash real)
git cherry-pick def456

# 5. Verifica que solo tienes el archivo c2.txt
ls
```

---

### Ejercicio 11: Worktree

**Objetivo:** Trabajar en múltiples ramas simultáneamente.

```bash
# 1. Desde tu repo principal
git branch feature/paralelo

# 2. Crea un worktree para esa rama
git worktree add ../mi-repo-paralelo feature/paralelo

# 3. Ahora tienes dos directorios:
# - El original (main)
# - ../mi-repo-paralelo (feature/paralelo)

# 4. Trabaja en el worktree
cd ../mi-repo-paralelo
echo "trabajo paralelo" > paralelo.txt
git add . && git commit -m "feat: trabajo en paralelo"

# 5. Vuelve al original y verifica
cd -
git log feature/paralelo --oneline -1

# 6. Limpia cuando termines
git worktree remove ../mi-repo-paralelo
```

---

## 🚀 Desafíos DevOps

### Desafío 1: GitHub Actions Básico

**Objetivo:** Crear tu primer workflow de CI.

1. Crea el archivo `.github/workflows/test.yml`:

```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run tests
        run: |
          echo "Running tests..."
          # Agrega tus comandos de test aquí
          echo "Tests passed!"
```

2. Push y verifica en la pestaña Actions de GitHub.

---

### Desafío 2: Branch Protection

**Objetivo:** Configurar reglas de protección de rama.

1. En GitHub, ve a Settings > Branches
2. Agrega una regla para `main`:
   - Require pull request before merging
   - Require status checks to pass
   - Require conversation resolution

3. Intenta hacer push directo a main (debería fallar)
4. Crea un PR para verificar que funciona

---

### Desafío 3: Automatización Completa

**Objetivo:** Configurar un pipeline completo.

1. Crea un workflow que:
   - Ejecute linting
   - Ejecute tests
   - Build
   - Deploy a GitHub Pages

2. Usa secrets para cualquier credencial
3. Agrega badges al README

---

## ✅ Checklist de Progreso

### Básico
- [ ] Configuré Git correctamente
- [ ] Creé mi primer repositorio
- [ ] Hice commits con buenos mensajes
- [ ] Conecté con GitHub
- [ ] Hice push y pull

### Intermedio
- [ ] Trabajé con ramas
- [ ] Resolví conflictos de merge
- [ ] Usé git stash
- [ ] Hice rebase interactivo
- [ ] Creé un PR

### Avanzado
- [ ] Usé git bisect
- [ ] Hice cherry-pick
- [ ] Trabajé con worktrees
- [ ] Configuré GitHub Actions
- [ ] Implementé branch protection

---

<div align="center">

🎉 **¡Felicidades por completar los ejercicios!**

Ahora dominas Git como un profesional.

</div>
