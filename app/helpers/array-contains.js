mport { helper } from '@ember/component/helper';

//Fonction arrayContains (venant d'une bibliothèque je suppose)
export default helper(function arrayContains(params/*, hash*/) {

  //Initialisation de constantes associées au paramètres d'un array
  const [items, value,prop] = params;

  //Initialisation de la variable id définie comme la valeur de prop et la chaine de charactère 'id'
  let id=prop ||'id'

  //Filtre les objets par leur "id" et leur "value" puis return leur taille si elle est supérieur à 0
  return items.filterBy(id,value).length > 0;
});
