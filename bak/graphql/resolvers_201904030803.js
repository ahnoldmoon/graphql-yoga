const munnt = {
  name: "Munnt",
  age: 18,
  gender: "female"
};

const resolvers = {
  Query: {
    person: () => munnt
  }
};

export default resolvers;