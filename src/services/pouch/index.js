export async function saveCard(document) {
  document.type = 'card';

  return await Database.post(document).then( response => {
    return response;
  }).catch( ex => {
    console.log(ex);
  })
}