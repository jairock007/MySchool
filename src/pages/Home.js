import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSchoolData } from '../redux/schoolSlice';
import SectionHeader from '../components/SectionHeader';
import Carousel from '../components/Carousel';
import QuickLinks from '../components/QuickLinks';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {
  const dispatch = useDispatch();
  const { schoolInfo, status, error } = useSelector((state) => state.school);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSchoolData());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home">
      <section className="hero">
        <img src="school.png" alt="Springdale Public School Logo" className="logo" style={{Image:"20px;"}} />
        <h1>{schoolInfo?.name}</h1>
        <p>{schoolInfo?.principalMessage}</p>
      </section>

      <Carousel />
      <CarouselComponent />

      <section className="introduction">
        <h2>About {schoolInfo?.name}</h2>
        <p>
          Founded in {schoolInfo?.established}, {schoolInfo?.name} has been dedicated to providing
          quality education and holistic development to students for over {new Date().getFullYear() - schoolInfo?.established} years.
          </p>
      </section>

      <QuickLinks />
    </div>
  );
};

export default Home;