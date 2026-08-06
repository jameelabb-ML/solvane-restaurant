// Curated placeholder photography (Unsplash) used across the demo.
// In a production build these would be replaced with the restaurant's own photography.

const build = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const img = {
  heroInterior: build('photo-1414235077428-338989a2e8c0', 2000),
  heroDish: build('photo-1546833999-b9f581a1996d', 2000),
  interiorWide: build('photo-1517248135467-4c7edcad34c4', 1800),
  interiorTables: build('photo-1424847651672-bf20a4b0982b', 1800),
  interiorBar: build('photo-1510812431401-41d2bd2722f3', 1600),
  chefPortrait: build('photo-1583394293214-28ded15ee548', 1400),
  chefPlating: build('photo-1577219491135-ce391730fb2c', 1600),
  chefCooking: build('photo-1466637574441-749b8f19452f', 1600),

  dish1: build('photo-1476224203421-9ac39bcb3327', 1200),
  dish2: build('photo-1544025162-d76694265947', 1200),
  dish3: build('photo-1540189549336-e6e99c3679fe', 1200),
  dish4: build('photo-1512621776951-a57141f2eefd', 1200),
  dish5: build('photo-1567620905732-2d1ec7ab7445', 1200),
  dish6: build('photo-1414235077428-338989a2e8c0', 1200),
  dish7: build('photo-1467003909585-2f8a72700288', 1200),
  dish8: build('photo-1600891964092-4316c288032e', 1200),
  dish9: build('photo-1519708227418-c8fd9a32b7a2', 1200),
  dish10: build('photo-1551218808-94e220e084d2', 1200),
  dish11: build('photo-1555939594-58d7cb561ad1', 1200),
  dish12: build('photo-1519690889869-e705e59f72e1', 1200),

  dessert1: build('photo-1488477181946-6428a0291777', 1200),
  dessert2: build('photo-1551024506-0bccd828d307', 1200),

  drink1: build('photo-1470337458703-46ad1756a187', 1200),
  drink2: build('photo-1544145945-f90425340c7e', 1200),
  wineGlasses: build('photo-1510812431401-41d2bd2722f3', 1400),

  tableSetting: build('photo-1550966871-3ed3cdb5ed0c', 1600),
  tableCandles: build('photo-1544148103-0773bf10d330', 1600),
  privateDining: build('photo-1571624436279-b272aff752b5', 1800),
  eventSetup: build('photo-1519167758481-83f550bb49b3', 1800),
  weddingSetup: build('photo-1519741497674-611481863552', 1800),

  giftCard: build('photo-1607344645866-009c320b63e0', 1200),

  galleryInterior1: build('photo-1517248135467-4c7edcad34c4', 1400),
  galleryInterior2: build('photo-1424847651672-bf20a4b0982b', 1400),
  galleryInterior3: build('photo-1592861956120-e524fc739696', 1400),
  galleryFood1: build('photo-1476224203421-9ac39bcb3327', 1400),
  galleryFood2: build('photo-1544025162-d76694265947', 1400),
  galleryFood3: build('photo-1540189549336-e6e99c3679fe', 1400),
  galleryFood4: build('photo-1512621776951-a57141f2eefd', 1400),
  galleryFood5: build('photo-1567620905732-2d1ec7ab7445', 1400),
  galleryTeam1: build('photo-1577219491135-ce391730fb2c', 1400),
  galleryTeam2: build('photo-1466637574441-749b8f19452f', 1400),
  galleryEvent1: build('photo-1519167758481-83f550bb49b3', 1400),
  galleryEvent2: build('photo-1519741497674-611481863552', 1400),

  aboutIngredients: build('photo-1467003909585-2f8a72700288', 1600),
  aboutFarm: build('photo-1500937386664-56d1dfef3854', 1600),
  aboutHearth: build('photo-1556910103-1c02745aae4d', 1600),

  ogCover: build('photo-1414235077428-338989a2e8c0', 1600),
}

export const avatarPlaceholder = (seed) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(seed)}&backgroundColor=f1ece2`

export default img
