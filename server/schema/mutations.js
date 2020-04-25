const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQL } = graphql;
const mongoose = require('mongoose');
const Song = mongoose.model('song');
const Lyric = mongoose.model('lyric');
const SongType = require('./types/song_type');
const LyricType = require('./types/lyric_type');
const UserType = require('./types/user_type')
const AuthService = require('../services/auth')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Song({ title })).save()
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      resolve(parentValue, { content, songId }) {
        return Song.addLyric(songId, content);
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Lyric.like(id);
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Song.remove({ _id: id });
      }
    },
    signup: {
      type: UserType,
      args: { 
        email: { type: GraphQLString },
        password: { type: GraphQLString }
     },
      resolve(parentValue, {email, password}, request) {
        // return Song.remove({ _id: id });
       return AuthService.signup({email, password, req: request});
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const {user} = req
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: { 
        email: { type: GraphQLString },
        password: { type: GraphQLString }
     },
      resolve(parentValue, {email, password}, request) {
        // return Song.remove({ _id: id });
       return AuthService.login({email, password, req: request});
      }
    }
  }
});

module.exports = mutation;
