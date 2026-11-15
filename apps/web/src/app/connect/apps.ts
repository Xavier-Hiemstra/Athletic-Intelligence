export type App = { id: string; name: string };

// Demo data: a web page can't see what's installed on the phone, so these are
// the apps we pretend are on the device.
export const INSTALLED_APPS: App[] = [
  { id: "apple-health", name: "Apple Health" },
  { id: "apple-fitness", name: "Apple Fitness" },
  { id: "strava", name: "Strava" },
  { id: "garmin-connect", name: "Garmin Connect" },
  { id: "whoop", name: "WHOOP" },
  { id: "oura", name: "Oura" },
];

// Searchable on the second step.
export const OTHER_APPS: App[] = [
  { id: "nike-run-club", name: "Nike Run Club" },
  { id: "runna", name: "Runna" },
  { id: "adidas-running", name: "adidas Running" },
  { id: "coros", name: "COROS" },
  { id: "polar-flow", name: "Polar Flow" },
  { id: "suunto", name: "Suunto" },
  { id: "map-my-run", name: "Map My Run" },
  { id: "asics-runkeeper", name: "ASICS Runkeeper" },
  { id: "trainingpeaks", name: "TrainingPeaks" },
  { id: "stryd", name: "Stryd" },
  { id: "final-surge", name: "Final Surge" },
  { id: "zwift", name: "Zwift" },
  { id: "fitbit", name: "Google Health (Fitbit)" },
  { id: "samsung-health", name: "Samsung Health" },
];

// Already added when the search page opens.
export const DEFAULT_EXTRA = ["nike-run-club", "runna"];

export const iconSrc = (id: string) => `/images/apps/${id}.png`;
