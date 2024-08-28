const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLFloat,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");
const { products, categories } = require("../simpleData");
const productModel = require("../models/product.model");

const categoryType = new GraphQLObjectType({
  name: "category",

  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

const productType = new GraphQLObjectType({
  name: "Product",

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    quantity: { type: GraphQLInt },
    imgUrl: { type: GraphQLString },
    categoryId: {
      type: categoryType,
      resolve: (parent, args) => {
        return categories.find((elm) => elm.id == parent.categoryId);
      },
    },
  }),
});

const QueryRoot = new GraphQLObjectType({
  name: "queryRoot",

  fields: {
    products: {
      type: new GraphQLList(productType),
      // args: { name: { type: GraphQLString } },
      resolve: (parent, args) => {
        return products;
      },
    },
    product: {
      type: productType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return products.find((elm) => elm.id == args.id);
      },
    },
    categories: {
      type: new GraphQLList(categoryType),
      // args: { name: { type: GraphQLString } },
      resolve: (parent, args) => {
        return categories;
      },
    },
  },
});

const mutationRoot = new GraphQLObjectType({
  name: "mutationRoot",

  fields: {
    addProduct: {
      type: productType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        quantity: { type: GraphQLInt },
        imgUrl: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        let product = new productModel(args);
        return await product.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: QueryRoot,
  mutation: mutationRoot,
});
