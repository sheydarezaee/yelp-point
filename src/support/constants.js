export const YELP_API_KEY = `I-kwtgDjSW9MXNR8LlvIy6PSCi0g3WvzIqOHrLbKPWY61Nu9bqvHtJj3OXReFiQdeDiYFq--ihwxVKTOe2wSv4Oj4IR60a5jtuPIJiDK2FpEQ6qE1fAYppegdQqsYHYx`
export const baseUrl = `https://api.yelp.com/v3/graphql`
export const COUNTER_CHANGE = 'COUNTER_CHANGE'

export const GET_ITEMS_QUERY = `
query search($term: String!, $location: String!) {
  search (
    term: $term,
    location: $location,
    limit: 10) {
    business {
      id
      name
      url
      photos
      rating
      price
      phone
      review_count
      url
      hours {
        hours_type
        is_open_now
      }
      reviews {
        url
        user {
          image_url
          name
        }
        text
        rating
      }
      location {
        address1
        city
        state
        country
      }
      coordinates {
        latitude
        longitude
      }
      categories {
        alias
        title
      }
    }
  }
}`

export const Colors = {
  blue: '#2769FE',
  green: '#03C289',
  red: '#FB445E',
  orange: '#ED6400',
  yellow: '#FEC212',
  black: '#0D202F',
  lightBlue: '#d6eef8',
  lightRed: '#FFE7EA',
  lightGreen: '#DEF7F0',
  darkBlue: '#173A55',
  grey: '#808080',
  grey01: '#696969',
  grey02: '#a9a9a9',
  grey03: '#F4F6F8',
  grey04: '#9199A0',
  white: '#FFFFFF',
  pink: '#ff5dc8',
}