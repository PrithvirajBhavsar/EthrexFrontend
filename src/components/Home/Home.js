import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallmovies, getshows } from '../../actions/contentActions'
import Banner from '../Banner/Banner'
import Slider from '../Slider/Slider'

const Home = () => {

  const movies = useSelector((state) => state.movieReducer);
  const shows = useSelector((state) => state.showReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallmovies());
    dispatch(getshows());
  }, [])

  return (
    <div>
      <Banner />
      <Slider heading={"Trending Movies"} content={movies} />
      <Slider heading={"Trending Shows"} content={shows}/>
    </div>
  )
}
export default Home;