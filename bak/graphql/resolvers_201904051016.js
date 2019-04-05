import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, {id}) => getById(id)
    // {
    //   console.log(args);
    // }
  },
  Mutation: {
    addMovie: (_, {name, score}) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;