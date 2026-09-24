# San Antonio Braiders — App.jsx (v2)

## À faire pour intégrer

1. Remplace ton `src/App.jsx` par ce fichier.
2. Crée le dossier `src/assets/photos/` et dépose-y les 7 images fournies dans
   `assets-photos/` (renomme-les exactement comme listé ci-dessous — les noms
   correspondent aux imports dans le code) :
   - hero-back.jpg
   - hero-face.jpg
   - twists.jpg
   - style-knotless.jpg
   - style-boxbraids.jpg
   - style-fulani.jpg
   - style-cornrows.jpg
3. Supprime (ou ignore) `src/components/LookBookCarousel.jsx` et l'ancien
   `src/assets/image.jpg` — ils ne sont plus utilisés, tout est maintenant
   dans ce seul fichier (plus fiable, plus facile à maintenir).
4. Vérifie que `lucide-react` est bien dans tes dépendances (`npm i lucide-react`
   si besoin) — c'est la seule librairie externe utilisée.

## Ce qui a changé

- **Nav** : plus de barre grise "prototype" (mobile/tablette/desktop) qui
  bouffait l'espace — une seule vraie navbar responsive (logo, liens, EN/FR,
  bouton Book, icône profil → back-office). Menu plein écran sur mobile +
  barre d'onglets fixe en bas (Home/Styles/Gallery/About/Contact).
- **Hero** : recomposé — carrousel plein écran de 3 vraies photos (fondu +
  barre de progression + légende du style affiché), grand titre éditorial,
  CTA + bouton secondaire, bandeau de 3 points forts en bas. Ne dépend plus
  d'une image cassée.
- **Services (piliers)** : grille asymétrique — un grand bloc à gauche
  (photo + texte) et deux blocs plus petits à droite, l'un légèrement décalé
  vers le bas, pour casser la symétrie tout en restant lisible.
- **Styles** et **Galerie** : les deux en carrousel horizontal (scroll-snap,
  flèches précédent/suivant), avec les vraies photos issues de ton flyer
  (recadrées individuellement, une par style) et de tes photos candid.
- **Réservation** : à l'étape finale, un bouton "Send Details via WhatsApp"
  ouvre WhatsApp avec un message texte pré-rempli (style, prix, date, heure,
  nom, téléphone, référence) — pas de PDF pour ce prototype, comme demandé.
  J'ai retiré le choix de boisson d'accueil et le faux acompte de $50
  (inventés par la génération précédente, pas des infos réelles du salon).
- **Coordonnées** : j'ai remplacé l'adresse fictive "Alamo Heights" et le
  faux numéro par les vraies coordonnées de ton flyer (téléphone WhatsApp,
  email). Je n'ai pas d'adresse de rue confirmée, donc j'ai laissé "San
  Antonio, TX" plutôt que d'inventer une adresse.

## Point à surveiller

Le nom "Rose Alvine" dans l'en-tête du back-office est déduit de l'email du
flyer (rosealvine28@gmail.com) — à confirmer ou remplacer si ce n'est pas le
bon nom.
