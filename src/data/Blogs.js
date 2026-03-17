// Blog Articles Data - Based on The GlamStreet Guide structure
// EXPANDED with 15+ featured blogs

export const blogCategories = {
  glamUpGirl: {
    title: "Glam Up Girl",
    subtitle: "Tutorials & Routines",
    description: "Step-by-step guides for product application and makeup looks",
    color: "bg-gradient-to-br from-pink-100 to-rose-200"
  },
  ingredientIQ: {
    title: "Ingredient IQ",
    subtitle: "Education & Science",
    description: "Deep dives into beauty ingredients and myths",
    color: "bg-gradient-to-br from-green-100 to-emerald-200"
  },
  glamCorner: {
    title: "The Glam Corner",
    subtitle: "Lifestyle & Empowerment",
    description: "Self-care, wellness, and confidence building",
    color: "bg-gradient-to-br from-purple-100 to-indigo-200"
  },
  spotlight: {
    title: "The GlamStreet Spotlight",
    subtitle: "Community & Reviews",
    description: "Customer stories and product comparisons",
    color: "bg-gradient-to-br from-amber-100 to-orange-200"
  }
};

export const blogs = [
  // GLAM UP GIRL - Tutorials (5 blogs)
  {
    id: 1,
    title: "The Perfect Red Lip: Finding Your Shade and Making it Last All Day",
    slug: "perfect-red-lip-indian-skin",
    category: "glamUpGirl",
    author: "Ananya Kapoor",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "2025-02-10",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=85",
    excerpt: "Master the art of red lips with our step-by-step guide tailored for Indian skin tones. Discover how to choose the perfect shade and make it last 12+ hours.",
    featured: true,
    tags: ["makeup tutorial", "lipstick", "indian skin", "red lips"],
    content: `
# The Perfect Red Lip: Your Complete Guide

Red lips are timeless, powerful, and universally flattering – when you find the right shade. For Indian skin tones, the key is understanding your undertones and choosing accordingly.

## Finding Your Perfect Red

### For Warm Undertones (Yellow/Golden Base)
- **Best Shades**: Orange-reds, coral reds, brick reds
- **Avoid**: Blue-based reds (can look too harsh)
- **Recommended**: Lakme 9to5 Red Coat, Maybelline Ruby for Me

### For Cool Undertones (Pink/Blue Base)  
- **Best Shades**: Blue-reds, berry reds, wine reds
- **Avoid**: Orange-based reds
- **Recommended**: MAC Ruby Woo, Lakme Envy Red

### For Neutral Undertones (Mix of Both)
- **Lucky You**: Almost all reds work!
- **Best Shades**: True reds, classic reds
- **Recommended**: Lakme Absolute Red, MAC Russian Red

## The Long-Lasting Application Technique

### Step 1: Prep Your Lips (2 minutes)
1. Exfoliate with lip scrub or soft toothbrush
2. Apply lip balm and let it absorb (1 min)
3. Blot excess balm with tissue

### Step 2: Define & Fill (3 minutes)
1. Line lips with matching lip liner
2. Fill in entire lip with liner (creates base)
3. Apply lipstick in thin layers (2-3 coats)
4. Blot between coats with tissue

### Step 3: Lock It In (1 minute)
1. Place tissue over lips
2. Dust translucent powder through tissue
3. Apply final thin coat of lipstick

## Pro Tips for Indian Weddings & Events

- **For 12+ Hour Wear**: Use liquid lipstick base + powder lipstick on top
- **Prevent Feathering**: Use concealer around lip line
- **Touch-up Kit**: Carry lip liner, lipstick, and cotton swab
- **Food-Proof**: Drink through straw, eat carefully, avoid oily foods

## The GlamStreet Picks: Best Red Lipsticks

1. **Lakme 9to5 Primer + Matte - Red Coat** (₹450)
   - Perfect orange-red for warm skin tones
   - Stays 8+ hours
   
2. **Plum All Day Matte - Russian Roulette** (₹499)
   - True red, works for all skin tones
   - Comfortable matte formula

3. **Sugar Smudge Me Not - Flame On** (₹399)
   - Liquid lipstick, 12+ hour stay
   - Transfer-proof formula

## Common Mistakes to Avoid

❌ **Applying on dry lips** - Always prep!
❌ **Wrong shade for undertone** - Test in natural light
❌ **Too thick application** - Build thin layers
❌ **Skipping lip liner** - Essential for definition
❌ **No setting** - Won't last without powder

## Quick Fix for Mistakes

- **Lipstick on teeth**: Run finger through lips after applying
- **Uneven application**: Clean up edges with concealer
- **Too bright**: Blot heavily and add nude gloss on center

---

*Ready to rock that red lip? Start with finding your undertone and choosing the right shade. Practice makes perfect!*
    `
  },
  {
    id: 2,
    title: "Beginners Guide to 7 AM to 7 PM Skincare Routine",
    slug: "7am-to-7pm-skincare-routine",
    category: "glamUpGirl",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "2025-02-08",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=85",
    excerpt: "Master the perfect skincare routine from morning to evening with our step-by-step guide for Indian skin. Simple, effective, and time-saving.",
    featured: true,
    tags: ["skincare routine", "tutorial", "beginner friendly", "indian skin"],
    content: `Full detailed content here...`
  },
  {
    id: 3,
    title: "Bridal Glow Prep: A 4-Week Skincare Checklist",
    slug: "bridal-glow-4-week-checklist",
    category: "glamUpGirl",
    author: "Meera Reddy",
    authorImage: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=100&q=80",
    date: "2025-02-05",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
    excerpt: "Get that radiant bridal glow with our comprehensive 4-week skincare preparation guide. Professional tips for your special day.",
    featured: false,
    tags: ["bridal", "skincare routine", "wedding prep"],
    content: `Full detailed content here...`
  },
  {
    id: 4,
    title: "The 5-Step Monsoon Skincare - Your Routine to Beat Humidity",
    slug: "monsoon-skincare-routine",
    category: "glamUpGirl",
    author: "Kavya Patel",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    date: "2025-01-28",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1556228578-dd526ddc2596?w=800&q=85",
    excerpt: "Combat humidity, breakouts, and frizz with our specially curated monsoon skincare routine. Keep your skin clear and glowing.",
    featured: false,
    tags: ["monsoon", "humidity", "skincare routine"],
    content: `Full detailed content here...`
  },
  {
    id: 5,
    title: "How to Apply Kajal for Different Eye Shapes",
    slug: "kajal-application-eye-shapes",
    category: "glamUpGirl",
    author: "Riya Singh",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    date: "2025-01-25",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=85",
    excerpt: "Learn the secret techniques to apply kajal that enhances your unique eye shape beautifully. Pro tips for almond, round, and hooded eyes.",
    featured: false,
    tags: ["kajal", "makeup tutorial", "eye makeup"],
    content: `Full detailed content here...`
  },

  // INGREDIENT IQ - Educational (4 blogs)
  {
    id: 6,
    title: "Vitamin C vs. Niacinamide: Which is Right for You?",
    slug: "vitamin-c-vs-niacinamide",
    category: "ingredientIQ",
    author: "Dr. Sneha Malhotra",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80",
    date: "2025-02-12",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=85",
    excerpt: "Decode the ingredient labels and find what truly works for your skin. Compare two powerhouse ingredients side by side.",
    featured: true,
    tags: ["vitamin c", "niacinamide", "skincare science", "ingredients"],
    content: `Full detailed content here...`
  },
  {
    id: 7,
    title: "The Power of Turmeric (Haldi): An Ancient Secret for Modern Skin",
    slug: "turmeric-haldi-skincare-benefits",
    category: "ingredientIQ",
    author: "Dr. Sneha Malhotra",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80",
    date: "2025-02-01",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=85",
    excerpt: "Discover why turmeric has been India's skincare secret for centuries and how to use it effectively in your modern routine.",
    featured: true,
    tags: ["turmeric", "natural ingredients", "traditional beauty", "ayurveda"],
    content: `Full detailed content here...`
  },
  {
    id: 8,
    title: "Hyaluronic Acid vs. Glycerine: Which is Best for Indian Climate",
    slug: "hyaluronic-acid-vs-glycerine-indian-climate",
    category: "ingredientIQ",
    author: "Dr. Raj Verma",
    authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80",
    date: "2025-01-30",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=85",
    excerpt: "Understanding which hydrating ingredient works best for India's diverse weather conditions. Science-backed comparison.",
    featured: false,
    tags: ["hyaluronic acid", "glycerine", "hydration", "indian climate"],
    content: `Full detailed content here...`
  },
  {
    id: 9,
    title: "What is SPF? A Complete Guide to Sunscreen PA Ratings",
    slug: "spf-sunscreen-complete-guide",
    category: "ingredientIQ",
    author: "Dr. Raj Verma",
    authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80",
    date: "2025-01-22",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=85",
    excerpt: "Everything you need to know about sun protection - SPF, PA ratings, UVA/UVB, and choosing the right sunscreen for Indian skin.",
    featured: false,
    tags: ["sunscreen", "SPF", "sun protection", "PA rating"],
    content: `Full detailed content here...`
  },

  // THE GLAM CORNER - Lifestyle (3 blogs)
  {
    id: 10,
    title: "5-Minute Self-Care Ritual to Transform Your Day",
    slug: "5-minute-self-care-ritual",
    category: "glamCorner",
    author: "Neha Gupta",
    authorImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80",
    date: "2025-02-13",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=85",
    excerpt: "Small moments of care that build confidence from within. Start your day right with this quick routine that boosts both your mood and glow.",
    featured: true,
    tags: ["self-care", "morning routine", "wellness", "quick routine"],
    content: `Full detailed content here...`
  },
  {
    id: 11,
    title: "Mental Health and Skin Health: How Stress Affects Breakouts",
    slug: "mental-health-skin-health-stress-acne",
    category: "glamCorner",
    author: "Dr. Pooja Desai",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    date: "2025-01-20",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=85",
    excerpt: "Understanding the mind-skin connection and how to care for both your mental and skin health. Scientific insights on stress-induced acne.",
    featured: true,
    tags: ["mental health", "stress", "acne", "wellness"],
    content: `Full detailed content here...`
  },
  {
    id: 12,
    title: "Body Positivity and Beauty: Embracing Imperfection",
    slug: "body-positivity-beauty-self-love",
    category: "glamCorner",
    author: "Aisha Khan",
    authorImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80",
    date: "2025-01-16",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=85",
    excerpt: "True beauty starts with self-acceptance. Learn to celebrate your unique beauty journey with The GlamStreet tribe.",
    featured: false,
    tags: ["body positivity", "self-love", "confidence", "wellness"],
    content: `Full detailed content here...`
  },

  // THE GLAMSTREET SPOTLIGHT - Community (3 blogs)
  {
    id: 13,
    title: "The Glam Street Tribe: 3 Real Women Share Their Best Product Finds",
    slug: "glamstreet-tribe-product-finds",
    category: "spotlight",
    author: "The GlamStreet Team",
    authorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    date: "2025-02-11",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=85",
    excerpt: "Real stories, real results. Our community members share their favorite products and why they work. Honest reviews you can trust.",
    featured: true,
    tags: ["community", "reviews", "testimonials", "product recommendations"],
    content: `Full detailed content here...`
  },
  {
    id: 14,
    title: "Brand Comparison: Top 3 Kajal Sticks Rated on Pigment & Stay Power",
    slug: "best-kajal-sticks-comparison",
    category: "spotlight",
    author: "Kritika Jain",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    date: "2025-01-29",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=85",
    excerpt: "An honest comparison of the best kajal brands available in India. We test Lakme vs Maybelline vs Lotus on real skin.",
    featured: false,
    tags: ["kajal", "comparison", "product review", "makeup"],
    content: `Full detailed content here...`
  },
  {
    id: 15,
    title: "Indian Hair Oiling Secrets: Traditional vs. Modern Serums",
    slug: "hair-oiling-traditional-vs-modern",
    category: "spotlight",
    author: "Divya Iyer",
    authorImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80",
    date: "2025-01-18",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=85",
    excerpt: "Exploring the ancient practice of hair oiling and comparing it with modern alternatives. What works best for Indian hair?",
    featured: false,
    tags: ["hair oil", "traditional beauty", "comparison", "hair care"],
    content: `Full detailed content here...`
  }
];



// export const blogs = [
//   // GLAM UP GIRL - Tutorials
//   {
//     id: 1,
//     title: "Beginners Guide to 7 AM to 7 PM Skincare Routine",
//     category: "glamUpGirl",
//     author: "Priya Sharma",
//     date: "2025-01-15",
//     readTime: 8,
//     image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
//     excerpt: "Master the perfect skincare routine from morning to evening with our step-by-step guide for Indian skin.",
//     featured: true,
//     tags: ["skincare routine", "tutorial", "beginner friendly"]
//   },
//   {
//     id: 2,
//     title: "The Perfect Red Lip: Finding Your Shade and Making it Last All Day",
//     category: "glamUpGirl",
//     author: "Ananya Kapoor",
//     date: "2025-01-20",
//     readTime: 5,
//     image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
//     excerpt: "Discover how to choose the perfect red lipstick for your skin tone and make it stay flawless for 12+ hours.",
//     tags: ["makeup tutorial", "lipstick", "indian skin"]
//   },
//   {
//     id: 3,
//     title: "Bridal Glow Prep: A 4-Week Skincare Checklist",
//     category: "glamUpGirl",
//     author: "Meera Reddy",
//     date: "2025-01-10",
//     readTime: 10,
//     image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
//     excerpt: "Get that radiant bridal glow with our comprehensive 4-week skincare preparation guide.",
//     tags: ["bridal", "skincare routine", "wedding prep"]
//   },
//   {
//     id: 4,
//     title: "The 5-Step Monsoon Skincare - Your Routine to Beat Humidity",
//     category: "glamUpGirl",
//     author: "Kavya Patel",
//     date: "2024-07-05",
//     readTime: 6,
//     image: "https://images.unsplash.com/photo-1556228578-dd526ddc2596?w=800&q=80",
//     excerpt: "Combat humidity, breakouts, and frizz with our specially curated monsoon skincare routine.",
//     tags: ["monsoon", "humidity", "skincare routine"]
//   },
//   {
//     id: 5,
//     title: "How to Apply Kajal for Different Eye Shapes",
//     category: "glamUpGirl",
//     author: "Riya Singh",
//     date: "2025-01-18",
//     readTime: 4,
//     image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
//     excerpt: "Learn the secret techniques to apply kajal that enhances your unique eye shape beautifully.",
//     tags: ["kajal", "makeup tutorial", "eye makeup"]
//   },

//   // INGREDIENT IQ - Educational
//   {
//     id: 6,
//     title: "The Power of Turmeric (Haldi): An Ancient Secret for Modern Skin",
//     category: "ingredientIQ",
//     author: "Dr. Sneha Malhotra",
//     date: "2025-01-12",
//     readTime: 7,
//     image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80",
//     excerpt: "Discover why turmeric has been India's skincare secret for centuries and how to use it effectively today.",
//     featured: true,
//     tags: ["turmeric", "natural ingredients", "traditional beauty"]
//   },
//   {
//     id: 7,
//     title: "Hyaluronic Acid vs. Glycerine: Which is Best Suited for Indian Climate",
//     category: "ingredientIQ",
//     author: "Dr. Sneha Malhotra",
//     date: "2025-01-08",
//     readTime: 6,
//     image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
//     excerpt: "Understanding which hydrating ingredient works best for India's diverse weather conditions.",
//     tags: ["hyaluronic acid", "glycerine", "hydration"]
//   },
//   {
//     id: 8,
//     title: "What is SPF? A Complete Guide to Sunscreen PA Ratings and UVA/UVB Protection",
//     category: "ingredientIQ",
//     author: "Dr. Raj Verma",
//     date: "2025-01-22",
//     readTime: 8,
//     image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
//     excerpt: "Everything you need to know about sun protection - SPF, PA ratings, and choosing the right sunscreen.",
//     tags: ["sunscreen", "SPF", "sun protection"]
//   },
//   {
//     id: 9,
//     title: "Vitamin C Serum Benefits: Why It's Your Skin's Best Friend",
//     category: "ingredientIQ",
//     author: "Dr. Sneha Malhotra",
//     date: "2025-01-25",
//     readTime: 7,
//     image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
//     excerpt: "Unlock the power of Vitamin C for brighter, clearer, and more youthful-looking skin.",
//     featured: true,
//     tags: ["vitamin c", "serum", "brightening"]
//   },
//   {
//     id: 10,
//     title: "Niacinamide for Beginners: The Ultimate Ingredient for Indian Skin Pores",
//     category: "ingredientIQ",
//     author: "Dr. Raj Verma",
//     date: "2025-01-14",
//     readTime: 6,
//     image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
//     excerpt: "Why niacinamide is the multi-tasking ingredient every Indian woman needs in her skincare routine.",
//     tags: ["niacinamide", "pores", "acne"]
//   },

//   // THE GLAM CORNER - Lifestyle & Empowerment
//   {
//     id: 11,
//     title: "The 5-Minute Morning Routine That Changes Your Mood and Skin Instantly",
//     category: "glamCorner",
//     author: "Neha Gupta",
//     date: "2025-01-19",
//     readTime: 4,
//     image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
//     excerpt: "Start your day right with this quick routine that boosts both your confidence and your glow.",
//     tags: ["morning routine", "self-care", "quick routine"]
//   },
//   {
//     id: 12,
//     title: "Mental Health and Skin Health: How Stress Affects Breakouts",
//     category: "glamCorner",
//     author: "Dr. Pooja Desai",
//     date: "2025-01-11",
//     readTime: 9,
//     image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
//     excerpt: "Understanding the mind-skin connection and how to care for both your mental and skin health.",
//     featured: true,
//     tags: ["mental health", "stress", "acne"]
//   },
//   {
//     id: 13,
//     title: "Body Positivity and Beauty: Embracing Imperfection with The Glam Street",
//     category: "glamCorner",
//     author: "Aisha Khan",
//     date: "2025-01-16",
//     readTime: 6,
//     image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
//     excerpt: "True beauty starts with self-acceptance. Learn to celebrate your unique beauty journey.",
//     tags: ["body positivity", "self-love", "confidence"]
//   },
//   {
//     id: 14,
//     title: "Mindful Beauty: Bringing Intention Back to Your Vanity",
//     category: "glamCorner",
//     author: "Neha Gupta",
//     date: "2025-01-23",
//     readTime: 5,
//     image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
//     excerpt: "Transform your beauty routine into a ritual of self-care and mindfulness.",
//     tags: ["mindfulness", "self-care", "beauty ritual"]
//   },

//   // THE GLAMSTREET SPOTLIGHT - Community & Reviews
//   {
//     id: 15,
//     title: "The Ultimate Guide to Reading a Product Ingredient List",
//     category: "spotlight",
//     author: "Kritika Jain",
//     date: "2025-01-21",
//     readTime: 8,
//     image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
//     excerpt: "Become an informed shopper - learn to decode ingredient lists like a pro.",
//     tags: ["ingredients", "product guide", "education"]
//   },
//   {
//     id: 16,
//     title: "The Glam Street Tribe: 3 Real Women Share Their Best Product Finds",
//     category: "spotlight",
//     author: "The GlamStreet Team",
//     date: "2025-01-17",
//     readTime: 7,
//     image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
//     excerpt: "Real stories, real results. Our community members share their favorite products and why they work.",
//     featured: true,
//     tags: ["community", "reviews", "testimonials"]
//   },
//   {
//     id: 17,
//     title: "Brand Comparison: Our Top 3 Kajal Sticks, Rated on Pigment and Stay Power",
//     category: "spotlight",
//     author: "Kritika Jain",
//     date: "2025-01-13",
//     readTime: 6,
//     image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
//     excerpt: "An honest comparison of the best kajal brands available in India.",
//     tags: ["kajal", "comparison", "product review"]
//   },
//   {
//     id: 18,
//     title: "Indian Hair Oiling Secrets: Traditional Techniques vs. Modern Serums",
//     category: "spotlight",
//     author: "Divya Iyer",
//     date: "2025-01-09",
//     readTime: 7,
//     image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
//     excerpt: "Exploring the ancient practice of hair oiling and comparing it with modern alternatives.",
//     tags: ["hair oil", "traditional beauty", "comparison"]
//   }
// ];

// Helper functions
export const getFeaturedBlogs = () => {
  return blogs.filter(blog => blog.featured);
};

export const getBlogsByCategory = (category) => {
  return blogs.filter(blog => blog.category === category);
};

export const getLatestBlogs = (count = 3) => {
  return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, count);
};

export const getBlogById = (id) => {
  return blogs.find(blog => blog.id === parseInt(id));
};



export const getBlogBySlug = (slug) => {
  return blogs.find(blog => blog.slug === slug);
};

export const getRelatedBlogs = (currentBlog, count = 3) => {
  if (!currentBlog) return [];
  return blogs
    .filter(blog => 
      blog.id !== currentBlog.id && 
      blog.category === currentBlog.category
    )
    .slice(0, count);
};