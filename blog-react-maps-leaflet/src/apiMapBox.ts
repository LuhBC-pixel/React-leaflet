const ACCESS_TOKEN_MAP_BOX = `access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`;

export const fetchLocalMapBox = async (local: string) => {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
  );

  const data = await response.json();
};
