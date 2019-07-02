const Query = {
  problems: (parent, args, context, info) => context.getDB().then(db => db.collection('problems').find().toArray())
};

module.exports = Query;
