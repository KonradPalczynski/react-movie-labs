# react-movie-labs
# TMDB Movie Client
TMDB Movie Client is a React web app used for browsing movie data from the TMDB API. It was further extended from our Movie App Lab 3 with additional endpoints, actor pages, a playlist, extra sorting and filtering, a search function and a theme/layout change.

The app lives in the movies folder and is started by the command "npm run dev".

# Routes
Multiple routes were added throughout this assignment with the majority of them having a nav inside of the siteHeader. A couple however were placed inside the movie information page such as the actor pages, recommendations etc.

# Endpoints 
All Api functions are inside of the tmdb-api.jsx file. Every pages uses React query caching as that was one of the requirements in the grading rubric. The rubric also asked for 3 additional static endpoints and multiple parameterised endpoints to be added.  

## Static Endpoints
The static endpoints added were /movie/popular for a page that shows the most popular movies at the time, /movie/top_rated which returns the top rated movies and /movie/now_playing which adds a page that contains movies currently in cinemas.

## Parameterised Endpoints
The parameterised endpoints added were:
1. "/movie/{id}/recommendations" which was used for a recommended movie button inside of movieDetails.
2. "/movie/{id}/credits" which returned an actor cast table inside of movieDetails
3. "/person/{id}" used for the actor details page.
4. "/person/{id}/movie_credits" which returned movies actors are known for inside of their page
5. "/search/movie" Used for the search page.

# Assessment Features
## Extend The App
- Three static endpoints added each with its own page, route and header links.
- Multiple parameterised endpoints added.
- Extensive linking between pages with actors, their movies and the movie details.

## Extend the Functionality
- Caching with react-query done on all endpoints.
- Playlist page and functions added.
- New filtering and sorting options added into filter card. (minimum rating, release decade) and (sort by: title(A to Z), rating, release date, (newest and oldest) and popularity).
- Search page added which uses TMDBs /search/movie endpoint to search the entire database not just the 20 movies in the homepage. The search text uses encodeURIcomponent so special character and spaces dont break the request.
- Result count that shows the numbering of movies showing out of the total number of movies. Also added an empty state that shows a message when no movies match the filters.

## Additional Work
- Custom MUI theme inside theme.jsx: dark colours with a touch of blue, custom typography, rounded shapes and cards, and component overrides.

## New MUI Components
- Rating changed to show number of stars out of 5 on each movie card
- Badge component which shows the count of movies saved on the favorites and playlist header links.
- Tooltip which shows a hover label on favorite and playlist icon buttons.

Some layout and style changes include:
- Movie cards lift with a shadow on hover
- filter card has a reset filters button instead of the starter image

# References
- MUI Documentation: https://mui.com/material-ui/
- encodeURIcomponent, CSS transition, transform, box shadow, array methods: https://developer.mozilla.org/en-US/
- API documentation: https://developer.themoviedb.org/
- Query functions and query keys: https://tanstack.com/query/latest

