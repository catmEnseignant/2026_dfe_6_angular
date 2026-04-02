# Mbaay Mi - Application Web Agricole

## Description du projet

Mbaay Mi est une application web agricole développée pour le Sénégal. Elle vise à faciliter l'accès aux informations agricoles fiables et à favoriser les échanges entre les acteurs du secteur agricole.

## Fonctionnalités

### Page Accueil (index.html)
- Présentation du projet Mbaay Mi
- Navigation vers les autres pages
- Aperçu des fonctionnalités principales

### Page Annonces (annonces.html)
- Affichage d'une liste d'annonces agricoles simulées
- Bouton "S'abonner" avec simulation JavaScript
- Catégories : Semences, Engrais, Équipements, Services

### Page Contact (contact.html)
- Formulaire de contact avec validation
- Champs : Prénom, Nom, Email, Message
- Message de confirmation après envoi

### Page Tableau de bord (dashboard.html)
- Affichage du nombre d'abonnements actifs
- Statistiques sur l'activité de la plateforme
- Graphiques simples pour visualiser les données
- Alertes et notifications

## Technologies utilisées

- **HTML5** : Structure des pages
- **CSS3** : Styles et mise en page responsive
- **JavaScript (ES6+)** : Interactivité et fonctionnalités dynamiques
- **Local Storage** : Persistance des données simulées

## Structure du projet

```
mbaay-mi/
├── index.html              # Page d'accueil
├── annonces.html           # Page des annonces
├── contact.html            # Page de contact
├── dashboard.html          # Tableau de bord
├── css/
│   ├── common.css          # Styles partagés
│   ├── index.css           # Styles page accueil
│   ├── annonces.css        # Styles page annonces
│   ├── contact.css         # Styles page contact
│   └── dashboard.css       # Styles page dashboard
├── js/
│   ├── common.js           # Fonctions communes
│   ├── index.js            # JS page accueil
│   ├── annonces.js         # JS page annonces
│   ├── contact.js          # JS page contact
│   └── dashboard.js        # JS page dashboard
├── TODO.md                 # Liste des tâches
└── README.md               # Ce fichier
```

## Répartition du travail

### Étudiant 1 - Accueil & Annonces
- Pages HTML : `index.html`, `annonces.html`
- CSS : `css/index.css`, `css/annonces.css`
- JS : `js/index.js`, `js/annonces.js`
- Fonctionnalités : Affichage dynamique des annonces, simulation d'abonnements

### Étudiant 2 - Contact & Formulaires
- Pages HTML : `contact.html`, `dashboard.html` (partie abonnements)
- CSS : `css/contact.css`, `css/dashboard.css`
- JS : `js/contact.js`, `js/dashboard.js` (gestion du formulaire, message de confirmation, affichage du tableau de bord)

### Étudiant 3 - Améliorations & Interactions supplémentaires
- Pages HTML : `dashboard.html` (visualisation graphique, alertes)
- CSS : `css/dashboard.css` (animations, alertes visuelles)
- JS : `js/dashboard.js` (graphiques, alertes), `js/common.js` (fonctions communes)

## Travail commun
- `css/common.css` : Styles partagés (header, navigation, footer)
- `js/common.js` : Fonctions communes (navigation, alertes, messages)

## Installation et utilisation

1. Cloner le dépôt GitHub
2. Ouvrir `index.html` dans un navigateur web moderne
3. Naviguer entre les différentes pages via le menu

## Fonctionnalités JavaScript

### Données simulées
Toutes les données sont simulées en JavaScript sans base de données :
- Annonces agricoles avec catégories, prix, localisation
- Statistiques du tableau de bord
- Abonnements utilisateurs
- Messages de contact

### Interactivité
- Navigation responsive
- Formulaires avec validation
- Animations CSS et JavaScript
- Persistance des données via Local Storage

## Responsive Design

L'application est entièrement responsive et s'adapte aux :
- Ordinateurs de bureau
- Tablettes
- Téléphones mobiles

## Compatibilité

- Navigateurs modernes : Chrome, Firefox, Safari, Edge
- JavaScript activé requis
- CSS Grid et Flexbox supportés

## Développement

### Conventions de code
- Indentation : 4 espaces
- Noms de variables/fonctions en camelCase
- Commentaires en français
- Code modulaire et réutilisable

### Tests
- Validation des formulaires
- Fonctionnalités JavaScript testées manuellement
- Responsive design vérifié sur différentes tailles d'écran

## Auteurs

- [Nom Étudiant 1] - Accueil & Annonces
- [Nom Étudiant 2] - Contact & Formulaires
- [Nom Étudiant 3] - Améliorations & Interactions

## Licence

Ce projet est réalisé dans le cadre d'un travail académique à l'ISEPAT/DFE.

## Remerciements

- Enseignant : Mr TINE
- Institution : ISEPAT/DFE
- Technologies : HTML, CSS, JavaScript
