import usePlayerDetails from './usePlayerDetails';

const useWhichSeason = (seasonId: string) => {
  const {seasons} = usePlayerDetails();
  const season = seasons.find(sea => sea.id === seasonId);
  return season;
};

export default useWhichSeason;
