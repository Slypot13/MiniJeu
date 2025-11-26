# 🎮 Mini Jeu JavaScript — « Tape la Case ! »

Ce projet est un mini jeu interactif réalisé en **HTML**, **CSS** et **JavaScript**.  
Le but du jeu est simple : **cliquer sur la case verte dès qu’elle apparaît** pour gagner des points avant la fin du temps imparti.

Ce projet a été développé dans le cadre de ma formation en informatique (1ère année) afin de pratiquer :
- les interactions DOM,
- les événements en JavaScript,
- la gestion du temps,
- les animations CSS,
- et l’utilisation du `localStorage`.

---

## 🚀 Fonctionnalités

- **Grille interactive 3x3**
- **Case verte qui apparaît aléatoirement**
- **Score dynamique**
- **Système de pénalité en cas de mauvais clic**
- **Timer de 30 secondes**
- **Condition de victoire (15 points minimum)**
- **Enregistrement du meilleur score via `localStorage`**
- **Interface moderne et responsive**

---

## 🕹️ Règles du jeu

1. Clique sur **“Lancer la partie”** pour commencer.
2. Une case verte apparaît dans la grille.
3. Clique dessus le plus vite possible pour marquer un point.
4. Une nouvelle case apparaît automatiquement.
5. Attention : cliquer sur une mauvaise case enlève un point.
6. Le jeu dure **30 secondes**.
7. Tu gagnes si ton score est **≥ 15**, sinon… réessaie !

---

## 📁 Structure du projet

mini-jeu/
│
├── index.html # Structure principale du jeu
├── style.css # Styles, animations, mise en forme
└── script.js # Logique du jeu (DOM, timer, score, interactions)

yaml
Copier le code

---

## ⚙️ Installation & Lancement

### 🔹 Option 1 : Ouvrir directement
1. Télécharge le projet.
2. Double-clique sur `index.html`.
3. Le jeu s'ouvre dans ton navigateur.

### 🔹 Option 2 : Avec Visual Studio Code
1. Ouvre le dossier dans VS Code.
2. Installe l’extension **Live Server**.
3. Clic droit sur `index.html` → **“Open with Live Server”**.

---

## 🧠 Concepts utilisés

- Sélection et manipulation du **DOM**
- Écouteurs d’événements (`addEventListener`)
- Timers JavaScript (`setInterval`)
- Génération de contenu dynamique
- Gestion de la difficulté
- Transition CSS & effets visuels
- Stockage local (`localStorage`) pour sauvegarder le meilleur score
- Conditions de victoire et logique de jeu

---

## 🏁 Améliorations possibles

- Augmentation progressive de la vitesse
- Système de niveaux
- Mode “extrême”
- Sons de clic et feedback audio
- Animations supplémentaires
- Skins de grille / thèmes personnalisables

---

## 👨‍💻 Auteur

Projet réalisé par : **[Pottier Sylvain]**  
École : **Ynov — Bachelor Informatique (1ère année)**  
Année : **2025**

---

## 📜 Licence

Projet libre d’utilisation à des fins d’apprentissage.
