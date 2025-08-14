export const properties = [
  {
    id: "p1",
    title: "Modern Family House",
    address: "123 Maple Street",
    city: "San Francisco",
    state: "CA",
    price: 1250000,
    beds: 4,
    baths: 3,
    areaSqft: 2200,
    type: "House",
    status: "For Sale",
    images: ["/properties/p1.svg"],
    description:
      "A beautifully renovated modern family home in a quiet neighborhood with an open floor plan and abundant natural light.",
    amenities: ["Garage", "Backyard", "Hardwood Floors", "Smart Thermostat"],
  },
  {
    id: "p2",
    title: "Downtown City Apartment",
    address: "88 Market Ave Apt 1204",
    city: "New York",
    state: "NY",
    price: 4200,
    beds: 2,
    baths: 2,
    areaSqft: 980,
    type: "Apartment",
    status: "For Rent",
    images: ["/properties/p2.svg"],
    description:
      "Sleek high-rise apartment with skyline views, concierge, gym, and quick access to transit.",
    amenities: ["Doorman", "Elevator", "Gym", "Rooftop"],
  },
  {
    id: "p3",
    title: "Cozy Suburban Cottage",
    address: "45 Pine Cone Lane",
    city: "Austin",
    state: "TX",
    price: 535000,
    beds: 3,
    baths: 2,
    areaSqft: 1500,
    type: "House",
    status: "For Sale",
    images: ["/properties/p3.svg"],
    description:
      "Charming cottage with covered porch, updated kitchen, and a large fenced yard.",
    amenities: ["Porch", "Fenced Yard", "Quartz Counters"],
  },
  {
    id: "p4",
    title: "Luxury Beachfront Condo",
    address: "1 Ocean View Dr Unit 502",
    city: "Miami",
    state: "FL",
    price: 1650000,
    beds: 3,
    baths: 3,
    areaSqft: 1900,
    type: "Condo",
    status: "For Sale",
    images: ["/properties/p4.svg"],
    description:
      "Resort-style condo with private balcony, ocean views, and premium building amenities.",
    amenities: ["Pool", "Sauna", "Private Balcony", "24/7 Security"],
  },
  {
    id: "p5",
    title: "Urban Loft Studio",
    address: "207 Brickworks Rd #5B",
    city: "Chicago",
    state: "IL",
    price: 2150,
    beds: 1,
    baths: 1,
    areaSqft: 640,
    type: "Studio",
    status: "For Rent",
    images: ["/properties/p5.svg"],
    description:
      "Industrial-chic loft with exposed brick, high ceilings, and large windows.",
    amenities: ["In-Unit Laundry", "Bike Storage", "Exposed Brick"],
  },
  {
    id: "p6",
    title: "Spacious Country Ranch",
    address: "900 Meadow Creek Rd",
    city: "Nashville",
    state: "TN",
    price: 725000,
    beds: 4,
    baths: 3,
    areaSqft: 2600,
    type: "House",
    status: "For Sale",
    images: ["/properties/p6.svg"],
    description:
      "Single-level ranch home on an acre lot with mature trees and a covered patio.",
    amenities: ["Patio", "Fireplace", "Walk-In Closet"],
  },
  {
    id: "p7",
    title: "Townhome Near Tech Hub",
    address: "300 Innovation Blvd",
    city: "Seattle",
    state: "WA",
    price: 865000,
    beds: 3,
    baths: 2.5,
    areaSqft: 1720,
    type: "Townhome",
    status: "For Sale",
    images: ["/properties/p7.svg"],
    description:
      "Contemporary townhome with rooftop deck and garage, close to cafes and transit.",
    amenities: ["Rooftop Deck", "Garage", "EV Charger"],
  },
  {
    id: "p8",
    title: "Garden-Level Duplex",
    address: "55 Willow Court Unit A",
    city: "Boston",
    state: "MA",
    price: 3450,
    beds: 2,
    baths: 1.5,
    areaSqft: 1100,
    type: "Duplex",
    status: "For Rent",
    images: ["/properties/p8.svg"],
    description:
      "Bright duplex with private garden patio and recently updated finishes.",
    amenities: ["Garden", "Dishwasher", "Storage"],
  },
];

export function getPropertyById(id) {
  return properties.find((p) => p.id === id) || null;
}

export function filterProperties(params = {}) {
  const {
    q,
    city,
    type,
    minPrice,
    maxPrice,
    minBeds,
    minBaths,
  } = normalizeParams(params);

  return properties.filter((p) => {
    if (q) {
      const text = `${p.title} ${p.address} ${p.city} ${p.state}`.toLowerCase();
      if (!text.includes(q)) return false;
    }

    if (city && p.city.toLowerCase() !== city) return false;
    if (type && p.type.toLowerCase() !== type) return false;

    if (typeof minPrice === "number" && p.price < minPrice) return false;
    if (typeof maxPrice === "number" && p.price > maxPrice) return false;

    if (typeof minBeds === "number" && p.beds < minBeds) return false;
    if (typeof minBaths === "number" && p.baths < minBaths) return false;

    return true;
  });
}

function normalizeParams(raw) {
  const toNum = (v) => {
    if (v === undefined || v === null || v === "") return undefined;
    const n = Number(v);
    return Number.isFinite(n) ? n : undefined;
  };

  const toLower = (v) => (typeof v === "string" ? v.trim().toLowerCase() : undefined);

  return {
    q: toLower(raw.q),
    city: toLower(raw.city),
    type: toLower(raw.type),
    minPrice: toNum(raw.minPrice),
    maxPrice: toNum(raw.maxPrice),
    minBeds: toNum(raw.minBeds),
    minBaths: toNum(raw.minBaths),
  };
}