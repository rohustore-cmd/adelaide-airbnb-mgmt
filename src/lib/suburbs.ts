export interface Suburb {
  slug: string;
  name: string;
  description: string;
  propertyTypes: string;
  avgEarnings: string;
  demandNote: string;
  highlights: string[];
}

export const suburbs: Suburb[] = [
  {
    slug: "glenelg",
    name: "Glenelg",
    description:
      "Glenelg is Adelaide's most popular beachside suburb and one of the highest-performing short-term rental locations in South Australia. With Moseley Square, the tram to the CBD, and year-round beach demand, properties here command premium nightly rates.",
    propertyTypes: "beachside apartments, holiday houses, and units",
    avgEarnings: "$38,000–$52,000",
    demandNote: "year-round beach and event demand",
    highlights: [
      "Steps from Glenelg Beach and Moseley Square",
      "Direct tram to Adelaide CBD",
      "High demand during summer and Adelaide Fringe",
      "Strong nightly rates — among the highest in Adelaide",
    ],
  },
  {
    slug: "norwood",
    name: "Norwood",
    description:
      "Norwood sits just 3km from the Adelaide CBD and offers the perfect blend of café culture, boutique shopping on The Parade, and easy city access. It consistently attracts business travellers, families visiting for events, and interstate visitors.",
    propertyTypes: "character cottages, townhouses, and apartments",
    avgEarnings: "$32,000–$45,000",
    demandNote: "strong corporate and leisure travel demand",
    highlights: [
      "3km from the Adelaide CBD",
      "The Parade café and dining strip",
      "Popular with business and interstate travellers",
      "Character homes attract premium guests",
    ],
  },
  {
    slug: "adelaide-cbd",
    name: "Adelaide CBD",
    description:
      "The Adelaide CBD is the heart of South Australia's events calendar — home to the Adelaide Oval, Rundle Mall, and the Adelaide Convention Centre. Properties here see strong year-round demand and significant rate spikes during the Adelaide 500, WOMADelaide, and the Fringe.",
    propertyTypes: "city apartments, serviced apartments, and penthouses",
    avgEarnings: "$35,000–$55,000",
    demandNote: "peak demand during major Adelaide events",
    highlights: [
      "Walking distance to Adelaide Oval and Rundle Mall",
      "Massive demand spikes during the Adelaide 500 and Fringe",
      "Strong corporate travel market",
      "Easy access to all Adelaide attractions",
    ],
  },
  {
    slug: "north-adelaide",
    name: "North Adelaide",
    description:
      "North Adelaide is one of the city's most prestigious suburbs — leafy streets, heritage homes, and a short walk to O'Connell Street's restaurant strip. It's a favourite with interstate visitors and couples looking for a luxury Adelaide stay.",
    propertyTypes: "heritage homes, luxury apartments, and character villas",
    avgEarnings: "$34,000–$48,000",
    demandNote: "consistent demand from luxury and leisure travellers",
    highlights: [
      "Heritage homes and luxury properties",
      "O'Connell Street dining and café strip",
      "Walking distance to CBD and Adelaide Oval",
      "Premium guest demographic",
    ],
  },
  {
    slug: "unley",
    name: "Unley",
    description:
      "Unley's tree-lined streets, King William Road café strip, and proximity to the CBD make it one of Adelaide's most desirable short-term rental locations. Properties here attract long-stay guests, families, and professionals relocating to Adelaide.",
    propertyTypes: "period homes, garden apartments, and family houses",
    avgEarnings: "$30,000–$44,000",
    demandNote: "strong long-stay and family travel demand",
    highlights: [
      "King William Road dining and shopping",
      "5km from the Adelaide CBD",
      "Tree-lined streets, quiet and family-friendly",
      "Strong appeal for longer-stay guests",
    ],
  },
  {
    slug: "prospect",
    name: "Prospect",
    description:
      "Prospect has rapidly emerged as one of Adelaide's trendiest suburbs — Prospect Road's café scene, artisan shops, and beautiful heritage architecture attract a young professional demographic that values style and location.",
    propertyTypes: "renovated heritage homes, cottages, and townhouses",
    avgEarnings: "$28,000–$42,000",
    demandNote: "growing demand from city-adjacent travellers",
    highlights: [
      "Prospect Road café and dining precinct",
      "Beautifully renovated heritage homes",
      "Growing popularity with interstate visitors",
      "Close to CBD with a neighbourhood feel",
    ],
  },
  {
    slug: "semaphore",
    name: "Semaphore",
    description:
      "Semaphore offers a relaxed, retro beachside vibe that has made it increasingly popular with holiday makers seeking an alternative to Glenelg. The esplanade, markets, and family-friendly beach attract strong summer bookings.",
    propertyTypes: "beachside cottages, holiday units, and family homes",
    avgEarnings: "$26,000–$38,000",
    demandNote: "strong summer and school holiday demand",
    highlights: [
      "Semaphore Beach and esplanade",
      "Family-friendly, relaxed coastal atmosphere",
      "Growing market with less competition than Glenelg",
      "Strong summer and weekend bookings",
    ],
  },
  {
    slug: "burnside",
    name: "Burnside",
    description:
      "Burnside is one of Adelaide's most affluent eastern suburbs, offering spacious homes, excellent schools, and a tranquil environment close to the CBD. It attracts premium guests — families, executives, and long-stay visitors.",
    propertyTypes: "luxury family homes, executive properties, and large villas",
    avgEarnings: "$32,000–$50,000",
    demandNote: "premium guests seeking space and prestige",
    highlights: [
      "One of Adelaide's most prestigious suburbs",
      "Large homes attract premium nightly rates",
      "Close to Burnside Village shopping",
      "Popular with executive and family travellers",
    ],
  },
  {
    slug: "henley-beach",
    name: "Henley Beach",
    description:
      "Henley Beach is Adelaide's hidden gem for Airbnb investors — a relaxed beach suburb with the famous Henley Square, boutique dining, and consistent demand from families and couples escaping the city.",
    propertyTypes: "beach houses, holiday units, and coastal apartments",
    avgEarnings: "$28,000–$42,000",
    demandNote: "consistent beach and leisure demand",
    highlights: [
      "Henley Square dining and beach lifestyle",
      "Family-friendly beach suburb",
      "Consistent year-round demand",
      "Less saturated market than Glenelg",
    ],
  },
  {
    slug: "adelaide-hills",
    name: "Adelaide Hills",
    description:
      "The Adelaide Hills offers a unique short-term rental opportunity — cool climate retreats, cellar doors, and stunning natural scenery attract guests seeking a weekend escape from the city. Properties here command premium rates especially in autumn and winter.",
    propertyTypes: "rural retreats, cottages, and luxury escapes",
    avgEarnings: "$30,000–$48,000",
    demandNote: "strong weekend and retreat demand year-round",
    highlights: [
      "Cool climate retreat destination",
      "Close to Hahndorf, Stirling, and Aldgate",
      "Strong demand from wine tourism and weekend escapes",
      "Premium rates for unique rural properties",
    ],
  },
];

export function getSuburb(slug: string): Suburb | undefined {
  return suburbs.find((s) => s.slug === slug);
}
