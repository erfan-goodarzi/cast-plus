import Header from '../components/Header/Header';
import TodayEpisodes from '../components/Main/TodayEpisodes';
import TopEpisode from '../components/Main/TopEpisode';

const Home = () => {
  return (
    <>
      {' '}
      <Header />
      <TopEpisode />
      <TodayEpisodes />
    </>
  );
};

export default Home;
