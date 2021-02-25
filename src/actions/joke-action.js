import { FETCH_CATAGORIES, RANDOM_JOKE } from '../actions/types';
import { GET_CATAGORIES, GET_JOKE_BY_CATAGORY } from '../Graphql/Queries'
import { gql } from '@apollo/client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const fetchCatagories = () => dispatch => {

    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: new InMemoryCache()
    });
      
    client
    .query({
        query: gql `
            query {
                catagories
            }
        `
    })
    .then(res => res)
    .then(catagories => dispatch({
        type: FETCH_CATAGORIES,
        payload: catagories
    }));
}

export const jokeByCatagory = (catagory) => dispatch => {
    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: new InMemoryCache()
    });

    catagory = 'history';

    client
    .query({
        query: gql`
        query randomJoke {
            randomJoke(catagory: "history") {
                value
            }
        }
        `
    })
    .then(res => res)
    .then(joke => dispatch({
        type: RANDOM_JOKE,
        payload: joke
    }));
}
