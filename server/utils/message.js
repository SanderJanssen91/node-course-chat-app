var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

var generateLocationMessage = (from, lng, lat) => {
  return {
    from,
    url: `https://www.google.nl/maps/search/${lng}+${lat}`,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage, generateLocationMessage};
