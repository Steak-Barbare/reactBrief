import React, { useState } from 'react';
import Titre from '../Components/Titre';
import { recipes } from '../recettes.js';

const Recettes = () => {
  const [recherche, setRecherche] = useState('');

  const gereChangement = (event) => {
    setRecherche(event.target.value);
  };

  const filtreRecettes = recipes.filter((recipe) => {
    // Recherche par nom de recette (toLowerCase sert à la comparaison de chaînes de caractères)
    const nameCorrespond = recipe.name.toLowerCase().includes(recherche.toLowerCase());

    // Recherche par ingrédient
    const ingredientCorrespond = recipe.ingredients.some((ingredient) =>
      ingredient.ingredient.toLowerCase().includes(recherche.toLowerCase())
    );

    return nameCorrespond || ingredientCorrespond;
  });

  return (
    <div className='recipes-container'>
      <Titre titre="Recettes :" />
      <input type="text" placeholder="Rechercher une recette ou ingrédient..." onChange={gereChangement} className='search' />
      <div className='recipes-grid'>
        {filtreRecettes.length > 0 ? (
          //  si la longueur du tableau "filtreRecettes" est supérieure à zéro alors le code entre parenthèses sera exécuté, si non : affiche le message d'erreur
          filtreRecettes.map((recipe) => {
            // boucle sur le tableau "filtreRecettes" et affiche les recettes sous forme de cartes
            const image = require(`../img/${recipe.name}.jpg`);
            return (
              <div key={recipe.id} className="recipes-card">
                <h2>{recipe.name}</h2>
                <img src={image} alt={recipe.name} />
                <p>Pour {recipe.servings} personne(s)</p>
                <p>Ustensiles : {recipe.ustensils.join(', ')}</p>
                <p>Appareil : {recipe.appliance}</p>
                <p>Ingrédients :</p>
                <ul>
                  {recipe.ingredients.map((ingredient) => (
                    // boucle sur le tableau "ingredients" et affiche les ingrédients sous forme de liste
                    <li key={ingredient.ingredient}>
                      {ingredient.ingredient} : {ingredient.quantity} {ingredient.unit}
                    </li>
                  ))}
                </ul>
                <p>Temps : {recipe.time} min</p>
                <p>Description : {recipe.description}</p>
              </div>
            );
          })
        ) : (
          <p>Aucune recette ou ingrédient trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default Recettes;


