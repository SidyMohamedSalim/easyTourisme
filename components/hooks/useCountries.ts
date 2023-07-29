import countries from "world-countries";

console.log(countries);

const formattedCountries = countries.map((country) => ({
  name: country.name.common,
  value: country.idd.root + country.idd.suffixes,
  label: `${country.flag}  ${country.idd.root}${country.idd.suffixes}`,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;
  return { getAll };
};

export default useCountries;
