import { projects, type Project } from "@/data/projects";

export interface Service {
  slug: string;
  title: string; // H1, the search phrase
  metaTitle: string;
  description: string;
  intro: string[];
  includes: string[];
  tech: string[];
  matches: (p: Project) => boolean;
}

export const services: Service[] = [
  {
    slug: "kataskevi-istoselidon",
    title: "Κατασκευή Ιστοσελίδων",
    metaTitle: "Κατασκευή Ιστοσελίδων | mCubedDevLabs",
    description:
      "Κατασκευή ιστοσελίδων για επιχειρήσεις: γρήγορες, responsive και έτοιμες για Google. WordPress ή Next.js, με σχεδιασμό UI/UX.",
    intro: [
      "Σχεδιάζουμε και κατασκευάζουμε ιστοσελίδες για επιχειρήσεις, επαγγελματίες και τουριστικά καταλύματα. Κάθε site είναι γρήγορο, λειτουργεί άψογα σε κινητό και είναι στημένο σωστά για τις μηχανές αναζήτησης από την πρώτη μέρα.",
      "Δουλεύουμε με WordPress όταν θέλετε να διαχειρίζεστε μόνοι σας το περιεχόμενο, ή με Next.js όταν η ταχύτητα και οι εξατομικευμένες λειτουργίες είναι προτεραιότητα.",
    ],
    includes: [
      "Σχεδιασμός UI/UX προσαρμοσμένος στην επιχείρησή σας",
      "Responsive σχεδιασμός για κινητά, tablet και desktop",
      "Βασικό SEO: meta tags, sitemap, structured data, ταχύτητα",
      "Πολυγλωσσικό περιεχόμενο (π.χ. ελληνικά και αγγλικά)",
      "Φόρμες επικοινωνίας, κρατήσεις και χάρτες",
      "Εκπαίδευση για τη διαχείριση του περιεχομένου",
    ],
    tech: ["WordPress", "Elementor", "Next.js", "React", "Tailwind CSS"],
    matches: (p) => p.category === "Ιστοσελίδες" && p.tag !== "E-commerce",
  },
  {
    slug: "kataskevi-eshop",
    title: "Κατασκευή Eshop",
    metaTitle: "Κατασκευή Eshop με WooCommerce | mCubedDevLabs",
    description:
      "Κατασκευή eshop με WooCommerce: κατάλογος προϊόντων, online πληρωμές, αποστολές και εύκολη διαχείριση παραγγελιών.",
    intro: [
      "Στήνουμε ηλεκτρονικά καταστήματα με WooCommerce που πουλάνε: καθαρός κατάλογος προϊόντων, γρήγορο checkout και online πληρωμές με κάρτα.",
      "Εσείς διαχειρίζεστε προϊόντα, αποθέματα και παραγγελίες από ένα απλό περιβάλλον, χωρίς να χρειάζεστε προγραμματιστή για κάθε αλλαγή.",
    ],
    includes: [
      "Κατάλογος προϊόντων με κατηγορίες, φίλτρα και παραλλαγές",
      "Online πληρωμές με κάρτα και άλλους τρόπους πληρωμής",
      "Ρυθμίσεις αποστολών και φόρων",
      "Διαχείριση αποθεμάτων και παραγγελιών",
      "SEO για σελίδες προϊόντων και κατηγοριών",
      "Σύνδεση με Google Analytics και Meta Pixel",
    ],
    tech: ["WooCommerce", "WordPress", "PHP", "Elementor"],
    matches: (p) => p.tag === "E-commerce",
  },
  {
    slug: "anaptyxi-web-efarmogon",
    title: "Ανάπτυξη Web Εφαρμογών",
    metaTitle: "Ανάπτυξη Web Εφαρμογών (Next.js, React) | mCubedDevLabs",
    description:
      "Ανάπτυξη web εφαρμογών και πλατφορμών με Next.js και React: dashboards, κρατήσεις, πληρωμές, λογαριασμοί χρηστών.",
    intro: [
      "Αναπτύσσουμε web εφαρμογές κατά παραγγελία: πλατφόρμες κρατήσεων, dashboards, εσωτερικά εργαλεία και SaaS προϊόντα.",
      "Χρησιμοποιούμε Next.js, React και TypeScript, με βάσεις δεδομένων όπως PostgreSQL (Supabase) και MongoDB, και ενσωματώσεις όπως Stripe για πληρωμές.",
    ],
    includes: [
      "Ανάλυση απαιτήσεων και σχεδιασμός αρχιτεκτονικής",
      "Λογαριασμοί χρηστών, ρόλοι και δικαιώματα",
      "Πληρωμές, συνδρομές και τιμολόγηση",
      "Dashboards και αναφορές σε πραγματικό χρόνο",
      "Ενσωματώσεις με εξωτερικά APIs",
      "Φιλοξενία, παρακολούθηση και συντήρηση",
    ],
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "MongoDB", "Stripe"],
    matches: (p) => p.category === "Web Εφαρμογές",
  },
  {
    slug: "anaptyxi-efarmogon-kiniton",
    title: "Ανάπτυξη Εφαρμογών Κινητών",
    metaTitle: "Ανάπτυξη Εφαρμογών Κινητών (Flutter) | mCubedDevLabs",
    description:
      "Ανάπτυξη εφαρμογών κινητών για Android και iOS με Flutter: ένας κώδικας, δύο πλατφόρμες, push notifications και offline λειτουργία.",
    intro: [
      "Αναπτύσσουμε εφαρμογές κινητών για Android και iOS με Flutter, ώστε ένας κώδικας να καλύπτει και τις δύο πλατφόρμες με χαμηλότερο κόστος.",
      "Από εφαρμογές GPS tracking μέχρι εκπαιδευτικές εφαρμογές και εργαλεία διαχείρισης, αναλαμβάνουμε σχεδιασμό, ανάπτυξη και δημοσίευση στα stores.",
    ],
    includes: [
      "Μία εφαρμογή για Android και iOS με Flutter",
      "Push notifications",
      "Χάρτες, GPS και geofencing",
      "Offline λειτουργία και συγχρονισμός δεδομένων",
      "Backend με Firebase ή MongoDB",
      "Δημοσίευση σε Google Play και App Store",
    ],
    tech: ["Flutter", "Dart", "Firebase", "MongoDB"],
    matches: (p) => p.category === "Εφαρμογές Κινητών",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    metaTitle: "UI/UX Design για Ιστοσελίδες & Εφαρμογές | mCubedDevLabs",
    description:
      "UI/UX design για ιστοσελίδες, eshop και εφαρμογές: έρευνα χρηστών, wireframes, prototypes και design systems στο Figma.",
    intro: [
      "Σχεδιάζουμε ψηφιακά προϊόντα με επίκεντρο τον χρήστη: από την έρευνα και τα user flows έως τα wireframes και το τελικό UI.",
      "Επειδή ο σχεδιασμός και η ανάπτυξη γίνονται στην ίδια ομάδα, ό,τι σχεδιάζεται στο Figma υλοποιείται πιστά στον κώδικα.",
    ],
    includes: [
      "Έρευνα χρηστών και ανάλυση ανταγωνισμού",
      "User flows και wireframes",
      "High-fidelity UI και διαδραστικά prototypes",
      "Design systems και βιβλιοθήκες components",
      "Προσβασιμότητα (accessibility)",
      "Σχεδιασμός mobile-first",
    ],
    tech: ["Figma", "Design Systems", "Adobe"],
    matches: () => true,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceProjects(service: Service) {
  return projects.filter(service.matches).slice(0, 6);
}
