// ============================================================
// AKSHAR HOSPITAL — DATA STORE
// Edit this file to update doctors, specialities, testimonials, blog posts
// ============================================================

const HOSPITAL = {
  name: "Akshar Hospital",
  tagline: "Orthopedics & Skin Care",
  phone: "+91-79-4000-1234",
  phoneTel: "tel:+917940001234",
  whatsapp: "https://wa.me/917940001234",
  email: "info@aksharhospital.com",
  address: "15, Akshar Complex, Near SG Highway, Bodakdev, Ahmedabad – 380 054, Gujarat",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58816.24234!2d72.5000!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83d5f8cc17ab%3A0xb36aeabf0c69d12!2sAhmedabad!5e0!3m2!1sen!2sin!4v1697000000000!5m2!1sen!2sin",
  timings: {
    morning: "9:00 AM – 1:00 PM",
    evening: "5:00 PM – 9:00 PM",
    closed: "Sunday"
  },
  social: {
    facebook: "https://facebook.com/aksharhospital",
    instagram: "https://instagram.com/aksharhospital",
    whatsapp: "https://wa.me/917940001234"
  },
  stats: {
    experience: "15+",
    surgeries: "12,000+",
    patients: "50,000+",
    partners: "30+"
  }
};

const DOCTORS = [
  {
    id: "dr-rajesh-patel",
    name: "Dr. Rajesh Patel",
    photo: "images/dr-rajesh-patel.jpg",
    specialty: "Orthopedics",
    designation: "Senior Orthopedic Surgeon & Head of Department",
    qualifications: "MBBS, MS (Ortho), DNB, FRCS (Edinburgh)",
    experience: "18 Years",
    expertise: ["Joint Replacement (Hip & Knee)", "Sports Medicine & Arthroscopy", "Fracture & Trauma Care", "Spine Surgery"],
    days: "Mon, Wed, Fri",
    timing: "10:00 AM – 1:00 PM | 6:00 PM – 8:00 PM",
    languages: "Gujarati, Hindi, English",
    bio: "Dr. Rajesh Patel is a gold-medal alumnus of B.J. Medical College, Ahmedabad with over 18 years of experience. He has performed more than 4,000 joint replacement procedures and is a pioneer in arthroscopic sports medicine in Gujarat. He trained at leading hospitals in the UK and has published research in peer-reviewed orthopaedic journals."
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    photo: "images/dr-priya-sharma.jpg",
    specialty: "Dermatology",
    designation: "Senior Dermatologist & Cosmetologist",
    qualifications: "MBBS, MD (Dermatology), Fellowship in Cosmetic Dermatology",
    experience: "14 Years",
    expertise: ["Medical Dermatology", "Laser Treatments & Skin Resurfacing", "Hair Restoration (PRP & GFC)", "Anti-aging & Aesthetic Procedures"],
    days: "Tue, Thu, Sat",
    timing: "10:00 AM – 1:00 PM | 5:00 PM – 8:00 PM",
    languages: "Gujarati, Hindi, English",
    bio: "Dr. Priya Sharma is one of Gujarat's most sought-after dermatologists, with specialized training in cosmetic dermatology from AIIMS Delhi. She brings a holistic approach to skin health, combining evidence-based medicine with the latest laser and aesthetic technologies. She is known for personalised treatment plans and patient-centric care."
  },
  {
    id: "dr-anita-menon",
    name: "Dr. Anita Menon",
    photo: "images/dr-anita-menon.jpg",
    specialty: "Orthopedics",
    designation: "Orthopedic Surgeon – Spine & Sports",
    qualifications: "MBBS, MS (Ortho), Fellowship in Spine Surgery",
    experience: "12 Years",
    expertise: ["Cervical & Lumbar Spine Surgery", "Minimally Invasive Spine Procedures", "Knee & Shoulder Arthroscopy", "Joint Preservation"],
    days: "Mon, Tue, Thu, Sat",
    timing: "9:00 AM – 12:00 PM | 5:30 PM – 8:00 PM",
    languages: "Malayalam, Hindi, English",
    bio: "Dr. Anita Menon is a spine specialist with fellowship training from the National Institute of Mental Health and Neuro Sciences (NIMHANS). She is highly skilled in minimally invasive spine procedures, offering patients faster recovery and less post-operative pain. She is particularly passionate about helping athletes return to peak performance after injury."
  },
  {
    id: "dr-kiran-desai",
    name: "Dr. Kiran Desai",
    photo: "images/dr-kiran-desai.jpg",
    specialty: "Dermatology",
    designation: "Dermatologist & Trichologist",
    qualifications: "MBBS, MD (DVL), PG Diploma in Trichology",
    experience: "10 Years",
    expertise: ["Hair & Scalp Disorders", "Acne, Eczema & Psoriasis", "Chemical Peels & Skin Brightening", "Vitiligo & Pigmentation Disorders"],
    days: "Mon, Wed, Fri, Sat",
    timing: "11:00 AM – 2:00 PM | 6:00 PM – 8:30 PM",
    languages: "Gujarati, Hindi, Marathi, English",
    bio: "Dr. Kiran Desai is a dermatologist and certified trichologist who specialises in hair loss and scalp conditions. With a decade of clinical experience, he has helped thousands of patients regain hair density through advanced PRP, GFC, and low-level laser therapy. His deep knowledge of skin conditions makes him equally adept at managing complex dermatology cases."
  }
];

const SPECIALITIES = {
  orthopedics: {
    name: "Orthopedics",
    icon: "🦴",
    color: "ortho",
    tagline: "Restoring Movement, Rebuilding Lives",
    desc: "Comprehensive bone, joint, and spine care using the latest surgical and non-surgical techniques.",
    subcategories: [
      {
        name: "Joint Replacement",
        icon: "⚙️",
        conditions: ["Hip Replacement", "Knee Replacement", "Shoulder Replacement"],
        desc: "State-of-the-art implants and navigation-assisted surgery for a faster, more natural recovery."
      },
      {
        name: "Sports Medicine & Arthroscopy",
        icon: "🏃",
        conditions: ["Shoulder Arthroscopy", "Knee Arthroscopy", "Elbow & Wrist", "Hip & Ankle"],
        desc: "Minimally invasive key-hole surgery helping athletes and active individuals return to play faster."
      },
      {
        name: "Spine Care",
        icon: "🫀",
        conditions: ["Cervical Spondylosis", "Lumbar Disc Disease", "Scoliosis", "Spine Fusion"],
        desc: "Expert diagnosis and surgical care for neck and back pain, disc problems, and deformities."
      },
      {
        name: "Fracture & Trauma",
        icon: "🩹",
        conditions: ["Complex Fractures", "Road Traffic Injuries", "Ligament Repairs", "Dislocations"],
        desc: "24/7 trauma care with advanced implants and a dedicated emergency orthopedic team."
      },
      {
        name: "Joint Preservation",
        icon: "💉",
        conditions: ["PRP Therapy", "Ozone Therapy", "Cartilage Repair", "Biologics"],
        desc: "Cutting-edge non-surgical options to delay or avoid joint replacement and reduce pain."
      }
    ]
  },
  dermatology: {
    name: "Skin Care & Dermatology",
    icon: "✨",
    color: "derm",
    tagline: "Healthy Skin, Radiant Confidence",
    desc: "Medical and cosmetic dermatology for every skin type, from acne to advanced laser treatments.",
    subcategories: [
      {
        name: "Medical Dermatology",
        icon: "🔬",
        conditions: ["Acne & Acne Scars", "Eczema & Psoriasis", "Skin Infections", "Vitiligo & Pigmentation"],
        desc: "Evidence-based treatment of chronic and acute skin conditions by trained dermatologists."
      },
      {
        name: "Cosmetic Dermatology",
        icon: "💫",
        conditions: ["Laser Resurfacing", "Chemical Peels", "Botox & Fillers", "Anti-aging Treatments"],
        desc: "Scientifically proven aesthetic procedures to refresh and rejuvenate your appearance."
      },
      {
        name: "Hair & Scalp",
        icon: "💆",
        conditions: ["Hair Loss (Alopecia)", "PRP & GFC Therapy", "Scalp Psoriasis", "Dandruff & Seborrheic Dermatitis"],
        desc: "Comprehensive trichology care combining diagnostics, nutrition, and advanced therapies."
      },
      {
        name: "Skin Surgery",
        icon: "🏥",
        conditions: ["Mole & Cyst Removal", "Skin Tag Removal", "Biopsy", "Keloid Treatment"],
        desc: "Minor surgical procedures performed under local anaesthesia with minimal downtime."
      }
    ]
  }
};

const TESTIMONIALS = [
  {
    text: "After suffering from severe knee pain for three years, Dr. Rajesh Patel performed my knee replacement surgery. Within 6 weeks I was walking unaided. The entire team was incredibly professional and caring throughout my recovery.",
    name: "Hemant Trivedi",
    info: "Knee Replacement Patient, 68 yrs",
    stars: 5,
    avatar: "HT"
  },
  {
    text: "Dr. Priya Sharma transformed my skin. I struggled with severe cystic acne for years and tried everything. After her personalised treatment plan, my skin is the clearest it has ever been. She takes the time to truly listen.",
    name: "Riya Mehta",
    info: "Acne Treatment Patient, 24 yrs",
    stars: 5,
    avatar: "RM"
  },
  {
    text: "I was a cricketer with a ruptured ACL and feared my career was over. Dr. Anita Menon performed my arthroscopic reconstruction and designed a complete rehabilitation plan. I was back on the field in 9 months!",
    name: "Arjun Shah",
    info: "ACL Reconstruction Patient, 22 yrs",
    stars: 5,
    avatar: "AS"
  },
  {
    text: "Dr. Kiran Desai's expertise in hair loss treatment is unmatched. After PRP sessions and the prescribed treatment, my hair density improved significantly. Akshar Hospital's staff is warm and the facility is spotless.",
    name: "Neha Kapoor",
    info: "Hair Loss Treatment Patient, 31 yrs",
    stars: 5,
    avatar: "NK"
  },
  {
    text: "My mother's hip replacement at Akshar Hospital was seamless from consultation to discharge. The ICU and post-operative care are exceptional. I particularly appreciated the transparent billing and insurance assistance.",
    name: "Manish Patel",
    info: "Son of Hip Replacement Patient",
    stars: 5,
    avatar: "MP"
  }
];

const BLOG_POSTS = [
  {
    id: "knee-replacement-recovery",
    title: "What to Expect After Knee Replacement Surgery",
    excerpt: "A step-by-step guide to your recovery timeline — from the first day post-op to walking independently at 6 weeks.",
    category: "Orthopedics",
    date: "Aug 15, 2026",
    readTime: "6 min read",
    author: "Dr. Rajesh Patel",
    img: "images/hero.jpg"
  },
  {
    id: "acne-myths-facts",
    title: "Acne Myths Debunked by a Dermatologist",
    excerpt: "From toothpaste remedies to sun exposure — we separate fact from fiction on the most common skin care misconceptions.",
    category: "Dermatology",
    date: "Aug 8, 2026",
    readTime: "5 min read",
    author: "Dr. Priya Sharma",
    img: "images/dr-priya-sharma.jpg"
  },
  {
    id: "spine-health-desk-workers",
    title: "Protecting Your Spine if You Sit All Day",
    excerpt: "Ergonomics, exercises, and warning signs you should never ignore — advice from our spine specialists.",
    category: "Orthopedics",
    date: "Jul 28, 2026",
    readTime: "7 min read",
    author: "Dr. Anita Menon",
    img: "images/facility-ot.jpg"
  }
];

const FAQS = [
  {
    q: "Does Akshar Hospital accept cashless insurance?",
    a: "Yes. We are empanelled with over 30 TPA (Third Party Administrator) companies and offer cashless treatment for eligible policyholders. Please carry your insurance card and policy details at the time of admission."
  },
  {
    q: "Do I need a referral to book an appointment?",
    a: "No referral is required for most consultations. You can directly book an appointment online, call us, or walk in during OPD hours. For surgical procedures, your consultant will guide you through the next steps."
  },
  {
    q: "Is parking available at the hospital?",
    a: "Yes, we have a large free-of-charge parking area for patients and visitors, with separate lanes for emergency vehicles and ambulances."
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Please bring any previous medical reports, X-rays/MRI scans, prescription history, and your insurance/TPA card. Arriving 10–15 minutes early helps with registration."
  },
  {
    q: "Are cosmetic dermatology treatments covered by insurance?",
    a: "Cosmetic treatments (e.g., laser, chemical peels, botox) are generally not covered by standard health insurance. However, treatments for medical skin conditions such as psoriasis, eczema, or skin infections may be eligible — please check with your insurer."
  },
  {
    q: "Is physiotherapy available at the hospital?",
    a: "Yes, we have a fully equipped physiotherapy and rehabilitation unit, staffed by qualified physiotherapists, specifically designed to support recovery after orthopedic procedures and sports injuries."
  }
];

const FACILITIES = [
  { name: "Operation Theatre", img: "images/facility-ot.jpg", icon: "🏥", desc: "3 fully equipped modular OTs with laminar air flow, high-definition arthroscopy towers, and advanced anaesthesia workstations for orthopedic and dermatosurgery procedures." },
  { name: "ICU / HDU", img: "images/facility-icu.jpg", icon: "💓", desc: "8-bed ICU with 24/7 intensivist cover, advanced haemodynamic monitoring, ventilators, and patient-call system for post-surgical and critical care." },
  { name: "Emergency Ward", img: "images/facility-emergency.jpg", icon: "🚨", desc: "Round-the-clock emergency orthopedic services with trauma resuscitation bays, ATLS-trained staff, and priority imaging." },
  { name: "Physiotherapy & Rehab", img: "images/hero.jpg", icon: "🏃", desc: "Comprehensive rehab centre with underwater treadmill, TENS, ultrasound therapy, and customised exercise programs supervised by certified physiotherapists." },
  { name: "Diagnostics & X-ray", img: "images/facility-xray.jpg", icon: "🔬", desc: "Digital X-ray, on-site ultrasound, and tie-ups for MRI / CT / PET scans with same-day reporting from consultant radiologists." },
  { name: "Special & Semi-Special Rooms", img: "images/facility-waiting.jpg", icon: "🛏️", desc: "Private and semi-private rooms with attached bathroom, TV, air conditioning, attendant sofa, and 24-hour nursing care for comfort during your stay." },
  { name: "Waiting & Reception", img: "images/facility-waiting.jpg", icon: "🌿", desc: "Airy, plant-filled reception area with comfortable seating, free Wi-Fi, water dispensers, and a dedicated patient-assistance desk." },
  { name: "Ambulance Service", img: "images/hero.jpg", icon: "🚑", desc: "ALS-equipped ambulances staffed with paramedics available 24/7. Advanced life-support units for critical patient transfers." }
];

const TPA_LIST = [
  "Star Health & Allied Insurance", "HDFC ERGO Health", "New India Assurance", "United India Insurance",
  "Oriental Insurance", "National Insurance Co.", "ICICI Lombard", "Bajaj Allianz Health",
  "Aditya Birla Health Insurance", "Care Health Insurance", "Niva Bupa Health Insurance",
  "Religare Health Insurance", "Max Bupa", "Apollo Munich Health Insurance",
  "Kotak Mahindra General Insurance", "SBI Health Insurance", "ManipalCigna Health Insurance",
  "Future Generali India Insurance", "Iffco Tokio General Insurance", "Reliance General Insurance",
  "ESIC", "ECHS (Ex-Servicemen)", "CGHS (Central Govt. Health Scheme)", "Gujarat Government Scheme",
  "Ayushman Bharat (PMJAY)", "MA Vatsalya (Gujarat)", "Tata AIG", "Cholamandalam MS General Insurance",
  "Digit Insurance", "Liberty General Insurance"
];
