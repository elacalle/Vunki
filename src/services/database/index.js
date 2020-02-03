export async function saveCard(document) {
  return await Database.put(document).then( response => {
    return response;
  }).catch( ex => {
    console.log(ex);
  })
}