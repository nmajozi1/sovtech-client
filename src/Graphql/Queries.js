import { gql } from '@apollo/client';

export const GET_CATAGORIES = gql `
    query {
        catagories
    }
`;

export const GET_JOKE_BY_CATAGORY = gql`
    query randomJoke($catagory: String!) {
        randomJoke(catagory: $catagory) {
            value
        }
    }
`;