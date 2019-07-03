
const Query = {
  problems: async (parent, args, context, info) => await context.Problem.find({}).exec()
};

module.exports = Query;
