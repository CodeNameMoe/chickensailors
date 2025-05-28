// Simulated API delay
const DELAY = 800;

// This method adds a delay to simulate an API call and randomly fails to mimic
// flakiness.  Use it in the API call methods below to add realism to the simulation.
const addApiFlakiness = async () => {
  // Simulate a delay to mimic an API call
  await new Promise((resolve) => setTimeout(resolve, DELAY));

  // Simulate a 10% chance of failure
  if (Math.random() < 0.1) {
    throw new Error("Failed to fetch data. Please try again.");
  }
};

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "Henrietta",
    breed: "Rhode Island Red",
    content:
      "Cluck cluck! I never thought I'd enjoy water, but my sailing dinghy has changed my life! Now the other hens call me Captain Henrietta. I've transported over 500 eggs safely!",
    verified: true,
    date: "2025-03-15",
  },
  {
    id: 2,
    name: "Colonel Cluckington",
    breed: "Plymouth Rock",
    content:
      "As the most adventurous rooster in my coop, I needed a vessel worthy of my explorations. This dinghy exceeds all expectations! The egg storage compartment is perfect for our deliveries.",
    verified: true,
    date: "2025-02-28",
  },
  {
    id: 3,
    name: "Nugget",
    breed: "Silkie Bantam",
    content:
      "Despite my fluffy feathers, I stay completely dry in my dinghy! The special chicken-sized life vest gives me confidence on the pond. I've transported over 1,000 eggs without a single crack!",
    verified: true,
    date: "2025-04-02",
  },
  {
    id: 4,
    name: "Eggbert",
    breed: "Leghorn",
    content:
      "The Rooster Regatta model is worth every penny! I've been able to transport my entire week's egg production in a single trip. The stability in rough waters is impressive!",
    verified: true,
    date: "2025-03-22",
  },
  {
    id: 5,
    name: "Feather Locklear",
    breed: "Orpington",
    content:
      "As a larger breed chicken, I was worried about comfort. The Hen Voyager has plenty of space and the egg compartment keeps my precious cargo safe. 5 stars!",
    verified: true,
    date: "2025-04-10",
  },
  {
    id: 6,
    name: "Snowflake",
    breed: "Light Sussex",
    content:
      "My beautiful white feathers with black neck accents used to keep me from water adventures, but my Hen Voyager keeps me perfectly dry! I've transported over 30 eggs in a single journey across our pond. The other Sussex hens are so jealous of my sailing skills!",
    verified: true,
    date: "2025-04-15",
  },
  {
    id: 7,
    name: "Jiggly Puff",
    breed: "Brahma",
    content:
      "Being a larger lady with feathered feet, I was concerned about finding a boat that could accommodate my majestic size. The Rooster Regatta is perfect! It handles my weight with ease, and I can transport up to 36 eggs without tipping. Even my fluffy foot feathers stay dry!",
    verified: true,
    date: "2025-03-30",
  },
  {
    id: 8,
    name: "Conchita",
    breed: "Salmon Faverolles",
    content:
      "¡Olé! With my fabulous beard and muffs, most boats would be a disaster, but the Chick Cruiser keeps my fancy feathers perfectly styled even on windy days! My five-toed feet grip the deck perfectly, and I've safely delivered eggs to the neighboring farm without a single one rolling overboard!",
    verified: true,
    date: "2025-04-05",
  },
];

export const fetchTestimonials = async () => {
  // TODO: When ready to simulate API flakiness, uncomment the line below, and
  // make this method async.

  await addApiFlakiness();

  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, 3);
};

// Mock pricing data
const pricingPlans = [
  {
    id: 1,
    name: "Chick Cruiser",
    description: "For beginner sailors",
    price: 129,
    popular: false,
    features: [
      "Small, stable design",
      "Basic safety features",
      "Suitable for calm waters",
      "12 egg capacity",
    ],
    eggCapacity: 12,
    ctaText: "Order Now",
  },
  {
    id: 2,
    name: "Hen Voyager",
    description: "For the adventurous chicken",
    price: 199,
    popular: true,
    features: [
      "Medium-sized with storage",
      "Advanced stabilization",
      "Chicken-friendly controls",
      "Works in light chop",
      "24 egg capacity",
    ],
    eggCapacity: 24,
    ctaText: "Order Now",
  },
  {
    id: 3,
    name: "Rooster Regatta",
    description: "For professional chicken sailors",
    price: 299,
    popular: false,
    features: [
      "Competition-grade design",
      "Premium materials",
      "Multiple sail options",
      "Handles rougher waters",
      "Customizable features",
      "36 egg capacity",
    ],
    eggCapacity: 36,
    ctaText: "Order Now",
  },
];

export const fetchPricingPlans = async () => {
  // TODO: When ready to simulate API flakiness, uncomment the line below, and
  // make this method async.

  await addApiFlakiness();

  return [...pricingPlans];
};
