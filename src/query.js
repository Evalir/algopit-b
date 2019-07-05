
const Query = {
  problems: async (parent, args, context, info) => {
    const res = await context.Problem.find({}).exec();
    console.log(res);
    return res;
  }
};

module.exports = Query;
