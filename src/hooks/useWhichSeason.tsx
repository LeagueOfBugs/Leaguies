import {useSeason} from './usePlayerDetails';

const useWhichSeason = (seasonId: string) => {
  const season = useSeason(seasonId);
  return season;
};

export default useWhichSeason;
