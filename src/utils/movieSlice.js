import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  currentTrailer: [],
  assets: [{ backdrops: [] }, { logos: [] }, { posters: [] }],
  carouselData: [],
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayinMovies: (state, action) => {
      state.nowPlaying.push(action.payload);
    },
    addPopularMovies: (state, action) => {
      state.popular.push(action.payload);
    },
    addTopRatedMovies: (state, action) => {
      state.topRated.push(action.payload);
    },
    addCurrentTrailer: (state, action) => {
      state.currentTrailer.push({ trailerKey: action.payload });
    },
    addCurrentMovieImages: (state, action) => {
      state.assets[0].backdrops.push(action.payload);
    },
    addCurrentMovieLogo: (state, action) => {
      state.assets[1].logos.push(action.payload);
    },
    addCarouseldata: (state, action) => {
      state.carouselData.push({
        title: action.payload.title,
        data: action.payload.data,
      });
    },
  },
});
export const {
  addNowPlayinMovies,
  addPopularMovies,
  addCurrentTrailer,
  addCurrentMovieImages,
  addCurrentMovieLogo,
  addCarouseldata,
  addTopRatedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
