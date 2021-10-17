# Nullish coalescing operator '??'


## Quelle est la valeur de retour ce code ?

```js
let banane;

alert(banane ?? "pomme"); // bannane 

```

## Quelle est la valeur de retour ce code ?

```js
let banane = "Trop bon";

alert(banane ?? "pomme"); // trop bon

```

# Comparison with "||"

```js
let pomme = null;
let poire = "Trop bon !";
let banane = null;


alert(pomme || poire || banane || "pas bon."); // Pomme
```


## Après avoir effectué les exercices précédent pouvez vous dire:

### Ce que retourne, par définition, l'opérateur "||" ?
il retourne la valeur vrai il compare.
### Ce que retourne, par définition, l'opérateur "??" ?
retourne la valeur definie.

# Precedence

### Des deux opérateurs du dessus, lequelle à la plus grande précédence (prioritée) ?
 OR est en dessus .

### Faut il:
 #### utiliser ?? avec tous les autres opérateurs ?
 #### ne jamais utiliser ??? avec tous les autres opérateurs ?
 #### quelques fois utiliser ?? avec les autres opérateurs ?

### Que retournent les opérations suivantes (se référer au opérateurs logiques) ?

```js
let fruit = "poire" && "pomme" ?? "banane" // Poire 
```

```js
let fruit = ("poire" && "pomme") ?? "banane" // Poire

alert(fruit)
```