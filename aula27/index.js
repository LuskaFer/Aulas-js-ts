// ? : (OPERAÇÃO TERNÁRIA)
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;

//operação ternária  condição               se for verdadeiro / se n for 
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Verde';

console.log(nivelUsuario, corPadrao);




//  if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
//  } else {
//     console.log('Usuário normal');
//  }

