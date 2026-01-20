# ⚡ Comandos Rápidos de Git - Cheat Sheet

> Referencia rápida de los comandos más usados en el día a día.

---

## 🚀 Comandos del Día a Día

```bash
# Estado actual
git status -sb

# Ver cambios antes de commitear
git diff

# Agregar todo y commitear
git add -A && git commit -m "mensaje"

# Push rápido
git push

# Pull con rebase (mantiene historial limpio)
git pull --rebase

# Ver historial bonito
git log --oneline --graph --all -20
```

---

## 🌿 Ramas

```bash
# Crear y cambiar a nueva rama
git switch -c nueva-rama

# Listar ramas (local + remoto)
git branch -a

# Cambiar de rama
git switch nombre-rama

# Eliminar rama local
git branch -d rama

# Eliminar rama remota
git push origin --delete rama
```

---

## 💾 Guardar Cambios Temporalmente

```bash
# Guardar cambios
git stash push -m "descripción"

# Ver stashes
git stash list

# Aplicar último stash
git stash pop

# Aplicar stash específico
git stash apply stash@{2}
```

---

## ⏪ Deshacer Cosas

```bash
# Deshacer cambios en archivo (no commiteado)
git restore archivo.txt

# Quitar del staging
git restore --staged archivo.txt

# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Deshacer último commit (perder cambios)
git reset --hard HEAD~1

# Revertir commit (crear commit inverso)
git revert HEAD
```

---

## 🔀 Merge y Rebase

```bash
# Merge normal
git merge rama

# Merge sin fast-forward
git merge --no-ff rama

# Rebase
git rebase main

# Rebase interactivo (últimos 3)
git rebase -i HEAD~3

# Abortar merge/rebase
git merge --abort
git rebase --abort
```

---

## 🏷️ Tags

```bash
# Crear tag anotado
git tag -a v1.0.0 -m "Versión 1.0.0"

# Push tags
git push --tags

# Listar tags
git tag -l "v*"

# Eliminar tag
git tag -d v1.0.0
git push origin --delete v1.0.0
```

---

## 🔍 Buscar

```bash
# Buscar en código
git grep "texto"

# Buscar en historial
git log -S "texto" --oneline

# Ver quién modificó línea
git blame archivo.txt

# Buscar commit problemático
git bisect start
git bisect bad
git bisect good commit
```

---

## 🛠️ Configuración

```bash
# Ver configuración
git config --list

# Configurar identidad
git config --global user.name "Nombre"
git config --global user.email "email@ejemplo.com"

# Ver alias configurados
git config --get-regexp alias
```

---

## 🆘 Emergencias

```bash
# Ver historial completo (incluye resets)
git reflog

# Recuperar commit perdido
git reset --hard HEAD@{n}

# Recuperar archivo de otra rama
git restore --source otra-rama -- archivo.txt

# Limpiar archivos no trackeados
git clean -fd
```

---

## 📊 Información

```bash
# Ver remotos
git remote -v

# Ver información de rama
git branch -vv

# Ver último commit
git log -1

# Ver estadísticas
git shortlog -sn
```

---

## 💻 GitHub CLI (gh)

```bash
# Crear PR
gh pr create --fill

# Ver PRs
gh pr list

# Checkout PR
gh pr checkout 123

# Crear issue
gh issue create

# Ver workflows
gh run list
```

---

## 🔑 Alias Recomendados

Agregar a `~/.gitconfig`:

```ini
[alias]
    st = status -sb
    co = checkout
    br = branch
    ci = commit
    lg = log --oneline --graph --all --decorate -20
    last = log -1 HEAD --stat
    unstage = reset HEAD --
    amend = commit --amend --no-edit
    undo = reset --soft HEAD~1
    wip = !git add -A && git commit -m 'WIP'
    save = !git add -A && git commit -m 'SAVEPOINT'
    aliases = config --get-regexp alias
    branches = branch -a
    tags = tag -l
    remotes = remote -v
    contributors = shortlog -sn
```

Uso:

```bash
git st          # git status -sb
git lg          # log bonito
git amend       # modificar último commit
git undo        # deshacer último commit
git wip         # commit rápido de trabajo en progreso
```

---

<div align="center">

📖 **Guía completa en [README.md](../README.md)**

</div>
