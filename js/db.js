// real-time listener
db.collection('record').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if(change.type === 'added'){
        renderRecipe(change.doc.data(), change.doc.id);
      }
      if(change.type === 'removed'){
        removeRecipe(change.doc.id);
      }
    });
  });