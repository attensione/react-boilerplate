# App Boilerplate with REACT (official) and SASS (7-1) architectures.

## React architecture
1. <strong>compontnts</strong> przechowuje w większości komponenty funkcyjne, które
   mogą istnieć jako osobne elementy, a ich przeznaczeniem jest proste generowanie
   kodu JSX; co ważne, elementy te mogą być wielokrotnie używane w różnych
   miejscach aplikacji — może to być zbiór formatek formularza czy też — jak w naszym
   przypadku — nagłówek i stopka. Często wyróżnia się również podfolder partial,
   który odpowiada za elementy głównego interfejsu użytkownika (np. szablonu aplikacji)
   i common, który zawiera współdzielone komponenty.
2. <strong>pages</strong> to katalog przechowujący komponenty odpowiadające za poszczególne
   strony lub podstrony witryny — mogą to być pojedyncze widoki, mogą to być
   wybrane ich części. Komponenty te często posiadają logikę biznesową, są opisane
   za pomocą klas, mają swój stan i często odnoszą się do komponentów z folderu
   components. Nierzadko zamiast Pages używana jest nazwa Containers.
3. <strong>services</strong> to katalog z konkretną częścią logiki; często są to usługi łączące się z API
   backendu czy też fragmenty kodu, które swobodnie można odseparować
   od rozbudowanych komponentów.
4. <strong>actions/reducers/store</strong> to foldery związane z technologią zwaną z ang. Redux.
5. <strong>modules</strong> to swoisty odpowiednik Pages; przy aplikacji podzielonej na oddzielne,
   wyraźne moduły warto zastosować taki folder, w którym umieszczone są poszczególne
   podfoldery — nazwy modułów, w których umieszczamy komponenty należące
   do danego modułu.
6. <strong>helper/utils</strong> to katalog agregujący zbiór pomocniczych funkcji.
7. <strong>hooks</strong> to katalog przechowujący własne hooks.
8. <strong>sass</strong> zawiera Sass 7-1 architecture

EXP:
````
src/
|
|– components/
|   |– partial/
|      |– Header.tsx
|      |– Footer.tsx
|
|– pages/
|   |– auth/
|      |– Register.tsx
|      |– Login.tsx
|   |– app/
|      |– Dashboard.tsx
|
|– services/
|   |– Api.tsx
|
|– actions/
|
|– reducers/
|
|– store/
|
|– modules/
|   |– EXP.tsx
|
|– helper/
|   |– EXP.tsx
|
|– utils/
|   |– EXP.tsx
|
|– hooks/
|   |– useAuth.tsx
|   |– useLocalStorage.tsx
|
|– sass/
|   |– (Sass 7-1 architecture)
|
– App.tsx
````

## SASS (7-1 architecture)
1. <strong>abstracts</strong> to mechanizmy SASS, które pomagają definiować style w innych katalogach (czasami nazywane „helpers”), zawierają zmienne globalne, funkcje i mixins, powinny być umieszczane we własnym, odpowiednio nazwanym pliku częściowym, jak pokazano powyżej.
2. <strong>vendors</strong> zawiera arkusze stylów innych firm, z których korzysta projekt. Na przykład, gdybyśmy chcieli użyć Bootstrap w projekcie, pobralibyśmy arkusz stylów Bootstrap i umieścili go w tym katalogu.
3. <strong>base</strong> zawiera schemat używany w całej witrynie, zawiera typografie oraz arkusze stylów, które uniwersalnie resetują lub normalizują domyślny CSS.
4. <strong>layout</strong> zawiera style dla różnych aspektów układu całej witryny np. nav bars, headers, footers itp.
5. <strong>components</strong> są jak „mini” layouty, tutaj powinny znajdować się style małych elementów witryny wielokrotnego użytku takie jak buttons, forms itp.
6. <strong>pages</strong> to miejsce, w którym znajdują się style specyficzne dla strony. Na przykład, jeśli projekt zawiera kilka reguł stylów, które są używane tylko na stronie „Kontakt z nami”, będą one przechowywane tutaj w pliku _contact.scss.
7. <strong>themes</strong> są używane, gdy witryna ma wiele motywów. Na przykład powyższy przykładowy projekt zawiera zarówno motywy administracyjne, jak i domyślne. Możemy zatem założyć, że ta przykładowa witryna ma zupełnie inny styl dla zalogowanych administratorów. Być może w celu lepszego przedstawienia i uwzględnienia dodatkowych funkcji administratora. Niektóre witryny oferują również „tryb nocny”, w którym tło witryny jest ciemniejsze, a tekst w jaśniejszym kolorze ułatwia czytanie w warunkach słabego oświetlenia. Taka opcja byłaby również reprezentowana we własnym pliku motywu.
EXP:
````
sass/
|
|– abstracts/
|   |– _variables.scss
|   |– _mixins.scss
|
|– vendors/
|   |– _bootstrap.scss
|
|– base/
|   |– _reset.scss
|   |– _typography.scss
|
|– layout/
|   |– _navigation.scss
|   |– _grid.scss
|   |– _header.scss
|   |– _footer.scss
|   |– _sidebar.scss
|   |– _forms.scss
|
|– components/
|   |– _buttons.scss
|   |– _carousel.scss
|   |– _cover.scss
|   |– _dropdown.scss
|
|– pages/
|   |– _home.scss
|   |– _contact.scss
|
|– themes/
|   |– _theme.scss
|   |– _admin.scss
|
– App.scss
````