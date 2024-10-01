export const dummydata = (index) => ({
  id: `dummy-${index}`, // Ensure unique IDs
  name: `Dummy Space Filler ${index}`,
  slug: `dummy-${index}`,
  powerstats: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  },
  appearance: {
    gender: "Unknown",
    race: "Unknown",
    height: ["N/A", "N/A"],
    weight: ["N/A", "N/A"],
    eyeColor: "N/A",
    hairColor: "N/A",
  },
  biography: {
    fullName: "Dummy Character",
    alterEgos: "None",
    aliases: ["Dummy"],
    placeOfBirth: "N/A",
    firstAppearance: "N/A",
    publisher: "N/A",
    alignment: "unknown",
  },
  work: {
    occupation: "None",
    base: "N/A",
  },
  connections: {
    groupAffiliation: "None",
    relatives: "None",
  },
  images: {
    xs: "",
    sm: require("../assets/No-Image-Placeholder.png"),
    md: require("../assets/superwars-back.png"),
    lg: require("../assets/No-Image-Placeholder.png"),
  },
});
