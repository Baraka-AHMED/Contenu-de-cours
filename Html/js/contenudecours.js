/* */
function commande(nom, argument) {
   if (typeof argument === 'undefined') {
     argument = '';
   }
   switch (nom) {
     case "createLink":
       argument = prompt("Quelle est l'adresse du lien ?");
       break;

      case "forecolor":
        argument = prompt("Quelle couleur désirez vous ?");
        if (argument === 'rouge') {
          argument = '#E74C3C'
        }
        break;
        case "insertImage":
          argument = prompt("Veuillez entrer le lien vers l'image");
        break;
    }
    
  
   document.execCommand(nom, false, argument);}
/* */ 

function Page(id) {
  var totalNumberOfPages = 3;
  for(i=1; i<=totalNumberOfPages; i++)
  {
    if(document.getElementById('p'+i)){
    document.getElementById('p'+i).style.display='none';
    }
  }

  if(document.getElementById('p'+id)){
    document.getElementById('p'+id).style.display='block';
  }	
}
/* */ 
$(document).ready(function() {
  $('#pagination button').click(function() {
    $(this).toggleClass('active').siblings().removeClass('active')
  });
});
/* */
$(document).ready(function() {
  $('.contenu input').click(function() {
    $(this).toggleClass('active').siblings()
  });
});



   
