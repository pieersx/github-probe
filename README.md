# 🚀 Git & GitHub - Guía Completa para Full Stack & DevOps (2026)

> Una guía práctica y completa para dominar Git y GitHub como lo haría un desarrollador profesional en 2026.

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

---

## 📋 Tabla de Contenidos

1. [Configuración Inicial](#-configuración-inicial)
2. [Comandos Básicos](#-comandos-básicos)
3. [Branching y Merging](#-branching-y-merging)
4. [Trabajo Remoto](#-trabajo-remoto-github)
5. [Flujos de Trabajo (Git Flow)](#-flujos-de-trabajo)
6. [Comandos Avanzados](#-comandos-avanzados)
7. [GitHub CLI](#-github-cli-gh)
8. [GitHub Actions (CI/CD)](#-github-actions-cicd)
9. [Conventional Commits](#-conventional-commits)
10. [Git Hooks](#-git-hooks)
11. [Seguridad y Secretos](#-seguridad-y-secretos)
12. [Trucos y Tips Pro](#-trucos-y-tips-pro)
13. [Ejercicios Prácticos](#-ejercicios-prácticos)

---

## ⚙️ Configuración Inicial

### Instalación de Git

```bash
# Ubuntu/Debian
sudo apt update && sudo apt install git

# macOS (con Homebrew)
brew install git

# Windows (con winget)
winget install Git.Git

# Verificar instalación
git --version
```

### Configuración Global

```bash
# Configurar identidad (OBLIGATORIO)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Configurar editor por defecto
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"           # Vim
git config --global core.editor "nano"          # Nano

# Configurar rama por defecto (main en lugar de master)
git config --global init.defaultBranch main

# Configurar colores en terminal
git config --global color.ui auto

# Configurar merge tool
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'

# Configurar diff tool
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'

# Ver toda la configuración
git config --list
git config --list --show-origin  # Con ubicación de archivos
```

### Configuración de SSH (Recomendado en 2026)

```bash
# Generar clave SSH (Ed25519 - más seguro y rápido)
ssh-keygen -t ed25519 -C "tu@email.com"

# Iniciar ssh-agent
eval "$(ssh-agent -s)"

# Agregar clave al agente
ssh-add ~/.ssh/id_ed25519

# Copiar clave pública (para agregar a GitHub)
cat ~/.ssh/id_ed25519.pub

# Probar conexión con GitHub
ssh -T git@github.com
```

### Configuración de GPG (Firmar Commits)

```bash
# Generar clave GPG
gpg --full-generate-key

# Listar claves
gpg --list-secret-keys --keyid-format=long

# Configurar Git para usar GPG
git config --global user.signingkey TU_KEY_ID
git config --global commit.gpgsign true

# Exportar clave pública (para GitHub)
gpg --armor --export TU_KEY_ID
```

---

## 📝 Comandos Básicos

### Crear y Clonar Repositorios

```bash
# Inicializar nuevo repositorio
git init
git init nombre-proyecto  # Crear carpeta y repo

# Clonar repositorio existente
git clone https://github.com/usuario/repo.git
git clone git@github.com:usuario/repo.git          # SSH (recomendado)
git clone --depth 1 url                            # Clone superficial (más rápido)
git clone --branch rama url                        # Clonar rama específica
git clone --recurse-submodules url                 # Con submódulos
```

### Estado y Seguimiento

```bash
# Ver estado del repositorio
git status
git status -s              # Formato corto
git status -sb             # Corto con rama

# Ver diferencias
git diff                   # Cambios no staged
git diff --staged          # Cambios staged
git diff HEAD              # Todos los cambios
git diff rama1..rama2      # Entre ramas
git diff --stat            # Resumen estadístico

# Ver historial
git log
git log --oneline          # Una línea por commit
git log --graph            # Gráfico ASCII
git log --all              # Todas las ramas
git log -p                 # Con diferencias
git log -n 5               # Últimos 5 commits
git log --author="nombre"  # Por autor
git log --since="2 weeks"  # Últimas 2 semanas
git log --grep="palabra"   # Buscar en mensajes
git log --oneline --graph --all --decorate  # Vista completa

# Ver un commit específico
git show commit_hash
git show HEAD~2            # 2 commits atrás
```

### Agregar y Confirmar Cambios

```bash
# Agregar archivos al staging
git add archivo.txt
git add .                  # Todos los archivos
git add -A                 # Todos (incluyendo eliminados)
git add -p                 # Interactivo (por partes)
git add *.js               # Por patrón

# Confirmar cambios
git commit -m "mensaje"
git commit                 # Abre editor
git commit -am "mensaje"   # Add + commit (solo tracked)
git commit --amend         # Modificar último commit
git commit --amend --no-edit  # Modificar sin cambiar mensaje
git commit -S -m "mensaje" # Commit firmado con GPG

# Deshacer staging
git restore --staged archivo.txt
git reset HEAD archivo.txt  # Alternativa clásica
```

### Eliminar y Mover Archivos

```bash
# Eliminar archivo
git rm archivo.txt
git rm --cached archivo.txt  # Solo del staging, mantener en disco
git rm -r carpeta/           # Recursivo

# Mover/Renombrar
git mv archivo_viejo.txt archivo_nuevo.txt
```

---

## 🌿 Branching y Merging

### Gestión de Ramas

```bash
# Listar ramas
git branch                 # Locales
git branch -r              # Remotas
git branch -a              # Todas
git branch -v              # Con último commit
git branch --merged        # Ramas ya mergeadas
git branch --no-merged     # Ramas sin mergear

# Crear rama
git branch nombre-rama
git switch -c nombre-rama  # Crear y cambiar (moderno)
git checkout -b nombre-rama  # Crear y cambiar (clásico)

# Cambiar de rama
git switch nombre-rama     # Moderno (Git 2.23+)
git checkout nombre-rama   # Clásico

# Renombrar rama
git branch -m nuevo-nombre
git branch -m viejo-nombre nuevo-nombre

# Eliminar rama
git branch -d rama         # Si ya está mergeada
git branch -D rama         # Forzar eliminación
git push origin --delete rama  # Eliminar remota
```

### Merge (Fusión)

```bash
# Merge básico
git merge rama-a-fusionar
git merge --no-ff rama     # Sin fast-forward (preserva historial)
git merge --squash rama    # Squash commits

# Abortar merge con conflictos
git merge --abort

# Continuar después de resolver conflictos
git add .
git merge --continue
# o simplemente
git commit
```

### Rebase

```bash
# Rebase básico
git rebase main

# Rebase interactivo (modificar historial)
git rebase -i HEAD~3       # Últimos 3 commits
git rebase -i main         # Desde main

# Opciones en rebase interactivo:
# pick   = usar commit
# reword = usar commit, pero editar mensaje
# edit   = usar commit, pero pausar para modificar
# squash = fusionar con commit anterior
# fixup  = como squash pero descarta mensaje
# drop   = eliminar commit

# Abortar rebase
git rebase --abort

# Continuar rebase
git rebase --continue

# Saltar commit problemático
git rebase --skip
```

### Cherry-pick

```bash
# Aplicar commit específico a rama actual
git cherry-pick commit_hash
git cherry-pick commit1 commit2  # Múltiples
git cherry-pick -n commit_hash   # Sin commit automático
git cherry-pick --abort          # Abortar
```

---

## 🌐 Trabajo Remoto (GitHub)

### Gestión de Remotos

```bash
# Ver remotos
git remote -v

# Agregar remoto
git remote add origin git@github.com:usuario/repo.git
git remote add upstream git@github.com:original/repo.git

# Cambiar URL remota
git remote set-url origin nueva_url

# Eliminar remoto
git remote remove nombre

# Renombrar remoto
git remote rename origin nuevo-nombre

# Ver información detallada
git remote show origin
```

### Push y Pull

```bash
# Push (subir cambios)
git push origin main
git push -u origin main    # Establecer upstream
git push                   # Si ya hay upstream
git push --force           # ⚠️ PELIGROSO - Sobrescribe
git push --force-with-lease  # Más seguro que --force
git push --tags            # Subir tags
git push origin --all      # Todas las ramas

# Pull (bajar cambios)
git pull                   # Fetch + merge
git pull --rebase          # Fetch + rebase (más limpio)
git pull origin main

# Fetch (solo descargar, sin merge)
git fetch
git fetch --all            # De todos los remotos
git fetch --prune          # Limpiar refs eliminadas
git fetch origin rama

# Sincronizar fork
git fetch upstream
git merge upstream/main
# o
git rebase upstream/main
```

### Tags (Etiquetas)

```bash
# Listar tags
git tag
git tag -l "v1.*"          # Filtrar

# Crear tag
git tag v1.0.0             # Ligero
git tag -a v1.0.0 -m "Versión 1.0.0"  # Anotado (recomendado)
git tag -a v1.0.0 commit_hash  # En commit específico

# Ver tag
git show v1.0.0

# Push tags
git push origin v1.0.0
git push origin --tags     # Todos los tags

# Eliminar tag
git tag -d v1.0.0          # Local
git push origin --delete v1.0.0  # Remoto
```

---

## 🔄 Flujos de Trabajo

### Git Flow

```
main (producción)
  │
  └── develop (desarrollo)
        │
        ├── feature/nueva-funcionalidad
        ├── feature/otra-funcionalidad
        │
        ├── release/v1.0.0
        │
        └── hotfix/bug-critico
```

```bash
# Crear feature
git switch develop
git switch -c feature/mi-feature

# Finalizar feature
git switch develop
git merge --no-ff feature/mi-feature
git branch -d feature/mi-feature

# Crear release
git switch develop
git switch -c release/v1.0.0

# Finalizar release
git switch main
git merge --no-ff release/v1.0.0
git tag -a v1.0.0 -m "Release v1.0.0"
git switch develop
git merge --no-ff release/v1.0.0

# Hotfix
git switch main
git switch -c hotfix/bug-urgente
# ... fix ...
git switch main
git merge --no-ff hotfix/bug-urgente
git tag -a v1.0.1 -m "Hotfix"
git switch develop
git merge --no-ff hotfix/bug-urgente
```

### GitHub Flow (Simplificado)

```bash
# 1. Crear rama desde main
git switch main
git pull
git switch -c feature/mi-cambio

# 2. Hacer commits
git add .
git commit -m "feat: agregar nueva funcionalidad"

# 3. Push y crear PR
git push -u origin feature/mi-cambio

# 4. Después del merge en GitHub
git switch main
git pull
git branch -d feature/mi-cambio
```

### Trunk-Based Development (Moderno 2026)

```bash
# Trabajar en ramas de vida corta (< 1 día)
git switch main
git pull
git switch -c short-lived/mi-cambio

# Commits pequeños y frecuentes
git commit -m "feat: parte 1"
git commit -m "feat: parte 2"

# Rebase antes de merge
git fetch origin
git rebase origin/main

# Push y merge rápido
git push -u origin short-lived/mi-cambio
# Crear PR, revisión rápida, merge
```

---

## 🔧 Comandos Avanzados

### Stash (Guardar cambios temporalmente)

```bash
# Guardar cambios
git stash
git stash push -m "mensaje descriptivo"
git stash -u               # Incluir untracked
git stash -a               # Incluir ignored
git stash -p               # Interactivo

# Listar stashes
git stash list

# Aplicar stash
git stash pop              # Aplica y elimina
git stash apply            # Aplica sin eliminar
git stash apply stash@{2}  # Específico

# Ver contenido
git stash show
git stash show -p          # Con diff

# Eliminar
git stash drop stash@{0}
git stash clear            # Todos
```

### Reset y Revert

```bash
# Reset (modificar historial - ⚠️ CUIDADO)
git reset --soft HEAD~1    # Deshacer commit, mantener staging
git reset --mixed HEAD~1   # Deshacer commit y staging (default)
git reset --hard HEAD~1    # ⚠️ Deshacer TODO (pérdida de datos)
git reset --hard origin/main  # Sincronizar con remoto

# Revert (crear commit inverso - SEGURO)
git revert HEAD            # Revertir último commit
git revert commit_hash     # Revertir commit específico
git revert HEAD~3..HEAD    # Revertir rango
git revert -n commit_hash  # Sin commit automático
```

### Reflog (Recuperar commits perdidos)

```bash
# Ver historial completo de HEAD
git reflog
git reflog show main       # De una rama

# Recuperar commit "perdido"
git checkout commit_hash
git switch -c rama-recuperada
# o
git reset --hard commit_hash
```

### Bisect (Encontrar bugs)

```bash
# Iniciar bisect
git bisect start

# Marcar commit malo (actual)
git bisect bad

# Marcar commit bueno (donde funcionaba)
git bisect good commit_hash

# Git te llevará a commits intermedios
# Probar y marcar:
git bisect good  # o
git bisect bad

# Cuando encuentre el commit malo:
git bisect reset

# Automatizar con script
git bisect run ./test-script.sh
```

### Worktree (Múltiples directorios)

```bash
# Crear worktree (otra rama en otra carpeta)
git worktree add ../mi-feature feature/rama

# Listar worktrees
git worktree list

# Eliminar worktree
git worktree remove ../mi-feature
git worktree prune         # Limpiar referencias muertas
```

### Submodules

```bash
# Agregar submódulo
git submodule add https://github.com/user/repo.git path/to/submodule

# Clonar repo con submódulos
git clone --recurse-submodules url

# Inicializar submódulos (si ya clonaste)
git submodule update --init --recursive

# Actualizar submódulos
git submodule update --remote

# Ver estado
git submodule status
```

### Blame y Log de archivo

```bash
# Ver quién modificó cada línea
git blame archivo.txt
git blame -L 10,20 archivo.txt  # Líneas 10-20
git blame -C archivo.txt        # Detectar movimientos

# Historial de un archivo
git log --follow -- archivo.txt
git log -p -- archivo.txt       # Con diferencias
```

---

## 💻 GitHub CLI (gh)

### Instalación

```bash
# Ubuntu/Debian
sudo apt install gh

# macOS
brew install gh

# Windows
winget install GitHub.cli

# Autenticación
gh auth login
gh auth status
```

### Repositorios

```bash
# Crear repo
gh repo create nombre --public
gh repo create nombre --private --clone
gh repo create --source=. --public --push

# Clonar
gh repo clone usuario/repo

# Ver info
gh repo view
gh repo view usuario/repo --web

# Fork
gh repo fork usuario/repo --clone
```

### Pull Requests

```bash
# Crear PR
gh pr create
gh pr create --title "Título" --body "Descripción"
gh pr create --fill        # Auto-llenar desde commits
gh pr create --draft       # Como borrador
gh pr create --base develop

# Listar PRs
gh pr list
gh pr list --state all

# Ver PR
gh pr view 123
gh pr view --web

# Checkout PR localmente
gh pr checkout 123

# Merge PR
gh pr merge 123
gh pr merge --squash
gh pr merge --rebase
gh pr merge --auto         # Auto-merge cuando pase CI

# Review
gh pr review 123 --approve
gh pr review 123 --request-changes --body "Comentario"
```

### Issues

```bash
# Crear issue
gh issue create
gh issue create --title "Bug" --body "Descripción" --label bug

# Listar
gh issue list
gh issue list --assignee @me

# Ver y cerrar
gh issue view 123
gh issue close 123
gh issue reopen 123
```

### Workflows (Actions)

```bash
# Listar workflows
gh workflow list

# Ver runs
gh run list
gh run view 123456

# Ejecutar workflow manualmente
gh workflow run nombre.yml

# Ver logs
gh run view 123456 --log
```

### Gists y Releases

```bash
# Crear gist
gh gist create archivo.txt
gh gist create archivo.txt --public

# Crear release
gh release create v1.0.0
gh release create v1.0.0 --notes "Notas de la versión"
gh release create v1.0.0 archivo.zip  # Con assets

# Listar releases
gh release list
```

---

## 🤖 GitHub Actions (CI/CD)

### Workflow Básico

Crear archivo `.github/workflows/ci.yml`:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  workflow_dispatch:  # Manual trigger

env:
  NODE_VERSION: '20'

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout código
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Instalar dependencias
        run: npm ci

      - name: Ejecutar linter
        run: npm run lint

      - name: Ejecutar tests
        run: npm test

      - name: Build
        run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Deploy a producción
        run: echo "Deploying..."
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
```

### Workflow con Matrix (Múltiples versiones)

```yaml
name: Test Matrix

on: [push, pull_request]

jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node: [18, 20, 22]
      fail-fast: false

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
      - run: npm ci
      - run: npm test
```

### Workflow con Docker

```yaml
name: Docker Build

on:
  push:
    tags: ['v*']

jobs:
  docker:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: |
            usuario/app:latest
            usuario/app:${{ github.ref_name }}
```

### Workflow para PRs

```yaml
name: PR Checks

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  validate:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Validar commits convencionales
        uses: wagoid/commitlint-github-action@v5

      - name: Verificar conflictos
        run: |
          git fetch origin ${{ github.base_ref }}
          git merge-tree $(git merge-base HEAD origin/${{ github.base_ref }}) HEAD origin/${{ github.base_ref }}
```

---

## 📜 Conventional Commits

### Formato

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Tipos de Commit

| Tipo       | Descripción                                    | Ejemplo                                      |
|------------|------------------------------------------------|----------------------------------------------|
| `feat`     | Nueva funcionalidad                            | `feat: agregar login con OAuth`              |
| `fix`      | Corrección de bug                              | `fix: resolver error de validación`          |
| `docs`     | Cambios en documentación                       | `docs: actualizar README`                    |
| `style`    | Formato, espacios (no afecta código)           | `style: formatear con prettier`              |
| `refactor` | Refactorización (no agrega ni arregla)         | `refactor: simplificar lógica de auth`       |
| `perf`     | Mejoras de rendimiento                         | `perf: optimizar consulta SQL`               |
| `test`     | Agregar o modificar tests                      | `test: agregar tests unitarios`              |
| `build`    | Cambios en build o dependencias                | `build: actualizar webpack config`           |
| `ci`       | Cambios en CI/CD                               | `ci: agregar workflow de deploy`             |
| `chore`    | Tareas de mantenimiento                        | `chore: actualizar dependencias`             |
| `revert`   | Revertir commit anterior                       | `revert: revert feat login`                  |

### Ejemplos Completos

```bash
# Simple
git commit -m "feat: agregar endpoint de usuarios"

# Con scope
git commit -m "feat(api): agregar endpoint de usuarios"

# Con body
git commit -m "fix(auth): corregir expiración de token

El token JWT expiraba inmediatamente debido a
un error en el cálculo del timestamp.

Closes #123"

# Breaking change
git commit -m "feat(api)!: cambiar formato de respuesta

BREAKING CHANGE: el campo 'data' ahora es un array"
```

### Configuración de Commitlint

```bash
# Instalar
npm install -D @commitlint/cli @commitlint/config-conventional

# commitlint.config.js
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

---

## 🪝 Git Hooks

### Hooks Comunes

Los hooks están en `.git/hooks/`. Crear sin extensión y hacer ejecutable.

```bash
# pre-commit - Antes de crear commit
#!/bin/sh
npm run lint
npm run test

# commit-msg - Validar mensaje de commit
#!/bin/sh
npx commitlint --edit $1

# pre-push - Antes de push
#!/bin/sh
npm run test
npm run build
```

### Husky (Gestión moderna de hooks)

```bash
# Instalar
npm install -D husky

# Inicializar
npx husky init

# Crear hook pre-commit
echo "npm run lint" > .husky/pre-commit

# Crear hook commit-msg
echo "npx commitlint --edit \$1" > .husky/commit-msg
```

### lint-staged (Solo archivos staged)

```bash
# Instalar
npm install -D lint-staged

# package.json
{
  "lint-staged": {
    "*.{js,ts}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}

# .husky/pre-commit
npx lint-staged
```

---

## 🔐 Seguridad y Secretos

### .gitignore Esencial

```gitignore
# Dependencias
node_modules/
vendor/
venv/
__pycache__/

# Archivos de entorno
.env
.env.local
.env.*.local
*.env

# Credenciales y secretos
*.pem
*.key
credentials.json
secrets/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Build
dist/
build/
*.log

# Testing
coverage/
.nyc_output/
```

### Eliminar Secretos del Historial

```bash
# ⚠️ PELIGROSO - Reescribe historial

# Opción 1: git filter-branch (deprecated pero funciona)
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch archivo-secreto.txt" \
  --prune-empty --tag-name-filter cat -- --all

# Opción 2: BFG Repo Cleaner (recomendado)
# Instalar: https://rtyley.github.io/bfg-repo-cleaner/
bfg --delete-files archivo-secreto.txt
bfg --replace-text passwords.txt

# Opción 3: git filter-repo (moderno)
pip install git-filter-repo
git filter-repo --path archivo-secreto.txt --invert-paths

# Después de cualquier método:
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force --all
git push --force --tags
```

### GitHub Secrets

```bash
# Ver secretos (solo nombres)
gh secret list

# Establecer secreto
gh secret set NOMBRE_SECRETO
gh secret set NOMBRE_SECRETO --body "valor"
gh secret set NOMBRE_SECRETO < archivo.txt

# Secretos de entorno
gh secret set NOMBRE --env production
```

---

## 💡 Trucos y Tips Pro

### Alias Útiles

```bash
# Configurar alias
git config --global alias.st "status -sb"
git config --global alias.co "checkout"
git config --global alias.br "branch"
git config --global alias.ci "commit"
git config --global alias.unstage "reset HEAD --"
git config --global alias.last "log -1 HEAD"
git config --global alias.visual "!gitk"
git config --global alias.lg "log --oneline --graph --all --decorate"
git config --global alias.amend "commit --amend --no-edit"
git config --global alias.undo "reset --soft HEAD~1"
git config --global alias.wip "commit -am 'WIP'"
git config --global alias.aliases "config --get-regexp alias"

# Usar alias
git st
git lg
git amend
```

### Búsqueda Avanzada

```bash
# Buscar en código
git grep "patrón"
git grep -n "patrón"          # Con números de línea
git grep -c "patrón"          # Contar ocurrencias
git grep "patrón" -- "*.js"   # Solo en archivos .js

# Buscar commits que modificaron texto
git log -S "función_nombre" --oneline
git log -G "regex" --oneline

# Buscar por contenido de archivo
git log --all -- "**/archivo.js"
```

### Limpieza

```bash
# Limpiar archivos untracked
git clean -n                  # Dry run (ver qué se eliminaría)
git clean -f                  # Eliminar archivos
git clean -fd                 # Incluir directorios
git clean -fdx                # Incluir ignored

# Optimizar repositorio
git gc
git gc --aggressive

# Verificar integridad
git fsck
```

### Trabajar con Parches

```bash
# Crear parche
git format-patch HEAD~3       # Últimos 3 commits
git format-patch main         # Desde main
git diff > cambios.patch      # Solo diferencias

# Aplicar parche
git apply cambios.patch
git am parche.patch           # Como commit
git am --3way parche.patch    # Con merge de 3 vías
```

### Comandos de Emergencia

```bash
# "¡Rompí todo!"
git reflog                    # Ver historial completo
git reset --hard HEAD@{n}     # Volver a estado anterior

# "Commiteé en la rama equivocada"
git stash
git switch rama-correcta
git stash pop

# "Quiero deshacer el último commit pero mantener cambios"
git reset --soft HEAD~1

# "Eliminé una rama por error"
git reflog
git checkout -b rama-recuperada commit_hash

# "Necesito un archivo de otra rama"
git checkout otra-rama -- archivo.txt
# o moderno:
git restore --source otra-rama -- archivo.txt
```

---

## 📚 Ejercicios Prácticos

### 🟢 Nivel Básico

1. **Configuración inicial**
   - Configura tu nombre y email
   - Genera una clave SSH y agrégala a GitHub
   - Crea un repositorio nuevo desde cero

2. **Flujo básico**
   - Crea 3 archivos y haz commit de cada uno por separado
   - Modifica un archivo y ve las diferencias antes de commitear
   - Revierte un commit usando `git revert`

3. **Branching básico**
   - Crea una rama `feature/ejercicio`
   - Haz 2 commits en ella
   - Fusiona a main

### 🟡 Nivel Intermedio

4. **Resolución de conflictos**
   - Crea dos ramas que modifiquen la misma línea
   - Intenta merge y resuelve el conflicto
   - Practica lo mismo con rebase

5. **Rebase interactivo**
   - Crea 5 commits con mensajes mal escritos
   - Usa `git rebase -i` para: reordenar, squash, y reword

6. **Stash avanzado**
   - Guarda cambios con mensaje
   - Crea un stash de solo algunos archivos
   - Aplica un stash específico

### 🔴 Nivel Avanzado

7. **Git bisect**
   - Crea 10 commits donde uno introduce un "bug"
   - Usa bisect para encontrar el commit problemático

8. **Recuperación de desastres**
   - Haz `reset --hard` de varios commits
   - Usa reflog para recuperar el trabajo perdido

9. **GitHub Actions**
   - Crea un workflow que corra tests
   - Agrega deploy automático a GitHub Pages
   - Implementa matriz de pruebas

10. **Workflow colaborativo**
    - Haz fork de un repositorio
    - Crea un PR con conventional commits
    - Simula code review y merge

---

## 🔗 Recursos Adicionales

### Documentación Oficial
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [GitHub CLI Manual](https://cli.github.com/manual)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

### Herramientas Recomendadas
- **GitLens** (VS Code Extension) - Visualización avanzada
- **lazygit** - TUI para Git
- **tig** - Interface de texto para Git
- **delta** - Mejor diff en terminal
- **gh-dash** - Dashboard de PRs/Issues

### Cursos y Tutoriales
- [Learn Git Branching](https://learngitbranching.js.org/) - Interactivo
- [Oh My Git!](https://ohmygit.org/) - Juego para aprender Git
- [GitHub Skills](https://skills.github.com/) - Cursos oficiales

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**¿Te fue útil esta guía? ¡Dale una ⭐ al repositorio!**

Creado con ❤️ para la comunidad de Developers.

</div>
