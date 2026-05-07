# Unlimited Cities — Site web
## Charte visuelle V1 + Wireframe Home V2

*Document de travail itératif — 7 mai 2026*
*Tout est sujet à validation : palette, typographies, hiérarchie, micro-rédaction.*

---

## Rappel du cadre

- **Outil** : Unlimited Cities (UC) — méthode propriétaire **In-Situ Collage**.
- **Fondation** : **Open Urbanism Foundation** — Genève, Suisse. Nom toujours en anglais, quelle que soit la langue du site.
- **Cibles** : villes (départements urbanisme), citoyens, chercheurs européens — **un seul parcours pour tous** (règle éthique).
- **Reconnaissance** : UN-Habitat + plusieurs prix internationaux.
- **Traction** : 30+ territoires (Europe, Asie, Amérique du Sud, Afrique), jusqu'à 1 400 participants par projet.
- **14 cas documentés** : 10 "Projets villes" + 4 "Projets de recherche et Évolution".
- **Licences** : CC BY-SA 4.0 (processus) + GNU AGPLv3 (plateforme).
- **Langue de lancement** : **Anglais (V1)**. Suite : FR / DE / IT / ES / ZH / DA / FI.

---

# Partie 1 — Charte visuelle V1

## 1.1 Palette

La palette est tirée directement des 3 formes brossées qui ouvrent les 3 documents sources, avec le cyan des marques d'imprimerie comme couleur système.

| Couleur | Approx. hex | Document source | Usage proposé |
|---|---|---|---|
| Vert-jaune brossé | `#C8D43C` | Doc 1 – Description (carré) | Couleur "Découverte" — hero, citations, encadrés introductifs |
| Orange brossé | `#E2570F` | Doc 2 – Processus (triangle) | Couleur "Action" — étapes, CTAs principaux, liens forts |
| Ocre / or brossé | `#B58A2A` | Doc 3 – In Real Life (cercle) | Couleur "Terrain" — fiches cas, mosaïque, ancrage des photos |
| Cyan turquoise | `#00B4D8` | Marques d'imprimerie | Couleur "Système" — grille, cadres, repères, légendes techniques |
| Noir | `#0A0A0A` | Titres PDFs | Titres, navigation principale |
| Gris moyen | `#7A7A7A` | Sous-titres PDFs | Sous-titres, métadonnées, micro-copy |
| Blanc cassé | `#FAFAF7` | Fond | Fond dominant — beaucoup d'air |

> **À valider** : les hex sont des approximations visuelles. Pour figer la palette définitive, il faudra extraire les valeurs exactes depuis les fichiers print (InDesign / Illustrator) qui ont produit les PDFs, ou faire des prélèvements sur les pages.

## 1.2 Typographies

### Titres
- **Famille proposée** : `Inter` (Google Fonts, libre) — équivalent moderne et lisible de l'Helvetica utilisée dans les PDFs, optimisée écran.
- Graisses utilisées : 700 (titres principaux), 500 (sous-titres).
- Style : noir sur blanc, pas d'italique, casse normale (les PDFs utilisent occasionnellement les majuscules pour les titres de cas — à reproduire pour les fiches cas).

### Corps de texte
- Famille : `Inter` 400 (régulier).
- Taille de base : 17 px (lecture confortable, marge de manœuvre pour responsive).
- Hauteur de ligne : 1.6 (très aéré, comme les A3 sources).

### Citations / verbatims
- Famille : `IBM Plex Mono` (Google Fonts, libre) ou `Courier Prime` — reproduit l'effet "machine à écrire" des citations dans les PDFs.
- Encadré coloré : fond vert-jaune `#C8D43C` à opacité 0.25, bord gauche pleine couleur sur 4 px.

### Numéros de phase (01–07)
- Très grands : 96–128 px sur desktop.
- Famille : `Inter` 700 ou variation (à tester aussi avec `Archivo Black`).
- Couleur : orange `#E2570F` (rappel doc Processus).

> **Alternatives gratuites équivalentes** si Inter ne convient pas : `Manrope`, `Söhne` (payante), `Akzidenz-Grotesk` (payante, plus suisse).

## 1.3 Système de cadrage

Les **fines lignes cyan** présentes en haut, en bas, à gauche et à droite des pages PDFs sont des marques d'imprimerie. Sur le site, elles deviennent une **signature visuelle** :

- Fines lignes cyan `#00B4D8` à 1–2 px d'épaisseur, qui encadrent chaque section large (delimitation top + bottom).
- Sur desktop : un trait vertical sticky à gauche qui matérialise la progression (la table des matières s'y attache).
- Sur mobile : disparaît ou se transforme en fine bande horizontale au début de chaque section.

L'idée : **transposer la rigueur du papier en un langage web reconnaissable**.

## 1.4 Formes brossées — signatures de section

Les 3 formes brossées (carré vert-jaune, triangle orange, cercle ocre) sont **trop fortes pour être décoratives**. Proposition :

- Elles deviennent les **3 marqueurs des grandes sections du site** :
  - **Carré vert-jaune** → tout ce qui est "L'outil / Description / Méthode"
  - **Triangle orange** → tout ce qui est "Le processus en 7 phases"
  - **Cercle ocre** → tout ce qui est "Cas d'usage / Terrain / Fiches cas"
- Elles apparaissent en gros plan en ouverture de section, en miniature dans la navigation (chip + icône), et en filigrane décoratif sur les pages détail.
- Elles **conservent leur aspect peint à la main** (SVG ou PNG haute déf, jamais redessinées en formes "propres").

## 1.5 Gabarits récurrents

### Gabarit "Phase numérotée"
```
[ 02 ]   <-- très grand, orange
———————
Define a process
suited to your territory     <-- titre noir
———————
Subtitle in grey              <-- explication 1 ligne
———————
Body paragraph                <-- détail 3-4 phrases
[Link "See a step"]
```

### Gabarit "Citation / verbatim"
```
   ┃  "I place enormous hope in Unlimited Cities.
   ┃   It is a means of better conducting democratic
   ┃   debate, with the capacity to reach new
   ┃   layers of the population."     <-- IBM Plex Mono, fond vert-jaune transparent
   ┃
   ┃   Michael Delafosse,
   ┃   Mayor of Montpellier
```

### Gabarit "Chiffre-clé"
```
   30+         <-- très grand, noir, Inter 700
   ———
   territories worldwide     <-- gris, Inter 500
```

### Gabarit "Fiche cas d'usage" (rappel)
À détailler dans un document séparé. Champs minimum : country · city · theme · participants · commissioner · process stage · time to results · 1 photo · 1 anecdote · outcome.

## 1.6 Principes de hiérarchie (rappel parcours unique)

- **Titre = question ou promesse forte** qui doit éveiller la curiosité de tous (élu, citoyen, chercheur — sans distinction).
- **Sous-titre = la réponse en une ligne**. Si on ne lit que titres + sous-titres, on a compris l'essentiel.
- **Corps = détail développé**, jamais indispensable pour comprendre l'idée.
- **Glisser, pas filtrer** : table des matières sticky à gauche (desktop), ancre fluide en haut (mobile).
- Pas d'élément spécifique à une cible (pas de carte "You are a city…").

---

# Partie 2 — Wireframe Home V2 (langue source : EN)

La home est **riche & narrative** : longue, qui déroule l'histoire complète, lisible en scan ou en lecture intégrale.

## 2.1 Sommaire des 9 sections

```
1. Hero — Promise + 2 CTAs
2. Numbers — 30+ / 1400+ / UN-Habitat / Open-source
3. The problem — Why participation fails
4. The method — In-Situ Collage
5. The process — 7 phases
6. The field — 14 cases, 30+ projects
7. The proof — Quote + recognition
8. The foundation — Open Urbanism Foundation, Geneva
9. Footer — Download, contact, newsletter, languages
```

## 2.2 Détail section par section (en EN — langue de lancement)

### Section 1 — Hero

```
[Forme brossée vert-jaune en filigrane à gauche]

   Build the city
   with the people
   who live in it.

   Unlimited Cities is the free, open-source tool that turns
   citizen participation into urban transitions. Built around
   the In-Situ Collage method. Deployed in more than 30 territories.

   [ Discover the process → ]   [ See the 14 cases → ]
```

**Notes** : titre court, phrase choc. Sous-titre = 3 phrases denses qui posent tout (nom de la méthode + ce que c'est + traction). Pas de visuel central pour ne pas surcharger ; les formes brossées suffisent.

### Section 2 — Numbers

```
   ┌──────┬──────┬──────┬──────┐
   │ 30+  │1 400 │  UN- │ 100% │
   │      │      │Habitat│ open │
   │terri-│partici-│recog-│source│
   │tories│pants │nised │      │
   └──────┴──────┴──────┴──────┘
```

**Notes** : 4 chiffres-clés sur fond cyan léger. Le 14 n'apparaît PAS ici (réservé au bandeau de la section "Field").

### Section 3 — The problem

```
   Why does citizen participation
   in urban planning so often fail?

   Four breakdowns documented by academic research
   and by the municipalities themselves.

   ┌─ Lack of representativeness ─────────────────────┐
   │ Attracting a truly diverse cross-section         │
   │ remains a persistent challenge.                  │
   └──────────────────────────────────────────────────┘
   ┌─ Public disengagement ───────────────────────────┐
   │ Transition issues are complex and disconnected   │
   │ from people's immediate concerns.                │
   └──────────────────────────────────────────────────┘
   ┌─ Risk of distrust ───────────────────────────────┐
   │ "Participation", "co-construction" promise       │
   │ more than the actual room for manoeuvre.         │
   └──────────────────────────────────────────────────┘
   ┌─ Lack of perceived usefulness ───────────────────┐
   │ Projects unfold over years — contributions       │
   │ seem to disappear into a void.                   │
   └──────────────────────────────────────────────────┘

   → When participation fails, more than opportunities
     are lost: it silently undermines the very
     foundations of democracy.
```

**Notes** : section qui pose les enjeux et installe la légitimité de l'outil. Verbatim final repris du document Description.

### Section 4 — The method (In-Situ Collage)

```
   The In-Situ Collage:
   create on-site, see everyone in real time.

   Rather than inviting citizens to meetings, we go where
   they live. Each person creates an annotated collage
   directly on the site to be transformed, and every
   contribution becomes immediately visible to all.

   [PHOTO LARGE — Winterthur, hand holding a tablet against
    the railway scene, with the UC interface superimposed
    over the urban view]

   This single shift addresses all four breakdowns at once:
   representativeness (we go to people), expression (a creative,
   accessible tool), trust (transparency in real time), and
   usefulness (collages become the substance of decisions).
```

**Notes** : la photo Winterthur 2026 est l'asset visuel **majeur** de la home — elle démontre l'outil en une image. Section à fort impact.

### Section 5 — The process (7 phases)

```
   A living process,
   forged in the field, endlessly adaptable.

   Seven phases that have emerged progressively as cities
   deployed the tool on their transition projects. Adapt them,
   shorten them, expand them — they belong to you as much
   as to us.

   01  Get to know the process and the platform
       Understand by example before you start.

   02  Define a process suited to your territory
       Pick sites, identify partners, set a timeline.

   03  Run contributory workshops
       Turn participants into co-designers.

   04  Prepare the digital platform
       Configure modules, maps, scenarios.

   05  Run digital mediation in public space
       Meet inhabitants where they live.

   06  Analyse contributions
       Quantitative, qualitative, fully transparent.

   07  Restitution & sharing
       Public event, exhibit the collages, dialogue with the city.

   [ See the full process → ]
```

**Notes** : chaque numéro 01-07 en grand orange. Section très scannable. Le détail va sur la page dédiée "The Tool > The Process".

### Section 6 — The field

```
   The field validates the promise.

   More than 30 territories have deployed Unlimited Cities.
   Fourteen of them are documented in detail — across Europe,
   Asia, South America, and Africa.

   [ INTERACTIVE WORLD MAP — clickable points on the
     14 cases, lighter markers on the 30+ ]

   Filters: [ City projects (10) ] [ Research & Evolution (4) ]

   ┌───────────┬───────────┬───────────┐
   │ [photo]   │ [photo]   │ [photo]   │
   │ Anières   │ Wenshan   │ Lian Meng │
   │ Switz.    │ Taipei    │ China     │
   └───────────┴───────────┴───────────┘
   ┌───────────┬───────────┬───────────┐
   │ Vernier   │ Rennes    │ Grenoble  │
   │ Switz.    │ France    │ France    │
   └───────────┴───────────┴───────────┘
                                      ...
   [ See the 14 cases → ]
```

**Notes** : c'est la première fois que le chiffre 14 apparaît, en sous-titre, **pas en headline**. La carte du monde est l'élément interactif central. La mosaïque montre 6-9 cas en preview, le reste sur la page Cas d'usage.

### Section 7 — The proof

```
   ┃  "I place enormous hope in Unlimited Cities. It is a
   ┃   means of better conducting democratic debate, with
   ┃   the capacity to reach new layers of the population."
   ┃
   ┃   Michael Delafosse,
   ┃   Mayor of Montpellier
   ┃   (then Deputy Mayor for Urban Planning)

   Recognised by UN-Habitat. Awarded several international
   prizes. Backed by the cities that have adopted it.

   [logo UN-Habitat] [logos prix]
```

**Notes** : citation forte (extraite directement du Doc 1) + bandeau de reconnaissance institutionnelle. Pas de carrousel — une seule citation, choisie pour porter.

### Section 8 — The foundation

```
   Open-source from Geneva,
   shared everywhere in the world.

   Unlimited Cities is carried by the Open Urbanism Foundation,
   based in Geneva. The tool is co-developed with partner cities
   and rooted in European urban research. Its license guarantees
   that it stays free, modifiable, and shareable — forever.

   Licenses: CC BY-SA 4.0 (process) · GNU AGPLv3 (platform)

   [ Discover the foundation → ]
```

**Notes** : texte court, mise en avant des licences (preuve concrète du caractère open). Le nom "Open Urbanism Foundation" reste tel quel dans toutes les versions linguistiques.

### Section 9 — Footer / actions

```
   ┌─ DOWNLOAD THE TOOL ──────┐  ┌─ CONTACT THE FOUNDATION ─┐
   │ Platform + process       │  │ contact@openurbanism.ch  │
   │ [ Access the repo → ]    │  │ Geneva, Switzerland      │
   └──────────────────────────┘  └──────────────────────────┘

   ┌─ NEWSLETTER ────────────────────────────────────────────┐
   │ Get news from the foundation and the tool               │
   │ [ email                  ] [ Subscribe ]                │
   └─────────────────────────────────────────────────────────┘

   ─────────────────────────────────────────────────────────
   Sitemap · Legal · Photo credits · Press

   EN · FR · DE · IT · ES · ZH · DA · FI

   © 2011–2026 Open Urbanism Foundation
```

**Notes** : pas de gros formulaire. Sélecteur de langue **en bas** (pas en haut, pour ne pas dire "you are a foreigner" en accueil). EN en première position (langue source).

---

## Décisions encore ouvertes (à valider)

1. **Crédits photos** : les images des PDFs sont-elles librement utilisables sur le site ou faut-il prévoir des crédits / autorisations spécifiques ?
2. **CTA principal du Hero** : "Discover the process" + "See the 14 cases" — corrects, ou autres priorités (téléchargement direct ? contact ?) ?
3. **Section 7 / preuve** : on garde la citation Delafosse seule, ou on en met deux/trois (un maire + un citoyen + un chercheur, dans le respect du parcours unique) ?
4. **Stratégie de lancement multilingue** : EN seul en V1, puis FR, puis le reste en stub ? Ou EN + FR ensemble dès le départ ?
5. **Page Cas d'usage** : on les présente dans deux sections distinctes ("City projects" / "Research & Evolution") ou via filtre sur une seule mosaïque ?

---

## Prochaines livraisons prévues

- **Gabarit fiche cas d'usage** (template unique pour les 14 cas).
- **Wireframe page Cas d'usage** (liste + carte + filtres).
- **Wireframe page The Tool > Process** (détail des 7 phases).
- **Première maquette HTML** (statique, une fois la charte validée).
