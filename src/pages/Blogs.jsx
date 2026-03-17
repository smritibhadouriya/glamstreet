import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const blogData = [
  {
    "id": 1,
    "slug": "ultimate-acne-skincare-routine",
    "heading": "The Ultimate Skincare Routine for Acne-Prone Skin",
    "excerpt": "Struggling with breakouts? Here's a dermatologist-approved step-by-step routine to clear your skin for good.",
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    "author": "Dr. Priya Sharma",
    "date": "2025-03-10",
    "readTime": "6 min read",
    "category": "Routine Guide",
    "concern": ["Acne"],
    "tags": ["acne", "skincare routine", "salicylic acid", "oily skin"],
    "content": "<article><h2>Why Your Current Routine Might Be Making Acne Worse</h2><p>Acne-prone skin is one of the most misunderstood skin types. Most people reach for harsh, stripping products that actually <strong>trigger more breakouts</strong> by over-drying the skin and causing it to overproduce oil.</p><p>Before we dive into the routine, here's the golden rule: <em>gentle consistency beats aggressive spot-treatment.</em></p><h2>Step 1: Double Cleanse (AM &amp; PM)</h2><p>Start with a <strong>gentle foaming cleanser</strong> containing <code>salicylic acid (0.5–2%)</code>. This BHA penetrates oil-filled pores and dissolves the debris causing congestion.</p><ul><li>Morning: Rinse with lukewarm water first, then cleanse</li><li>Evening: Begin with a micellar water or oil cleanser to remove SPF/makeup, then follow with your salicylic cleanser</li></ul><blockquote><p>💡 <strong>Pro Tip:</strong> Never use hot water — it strips your skin's natural barrier and worsens inflammation.</p></blockquote><h2>Step 2: Alcohol-Free Toner</h2><p>Skip the old-school astringent toners. Opt for a <strong>pH-balancing toner</strong> with niacinamide or witch hazel (water-based). This preps skin to absorb your next steps better.</p><h2>Step 3: Treatment Serum</h2><p>This is the most important step for acne-prone skin. Rotate between:</p><ol><li><strong>Niacinamide 10%</strong> — Reduces sebum, minimizes pores, fades post-acne marks</li><li><strong>Azelaic Acid 10%</strong> — Anti-inflammatory, kills acne-causing bacteria, brightens PIH</li><li><strong>Retinol 0.025%</strong> (PM only, 2x per week) — Speeds cell turnover, prevents future breakouts</li></ol><h2>Step 4: Oil-Free Moisturizer</h2><p>Yes — acne skin needs moisture. Choose a <strong>non-comedogenic, gel-based moisturizer</strong> with ingredients like hyaluronic acid and centella asiatica. Skipping moisturizer triggers excess oil production.</p><h2>Step 5: SPF (Non-Negotiable — AM Only)</h2><p>UV exposure worsens acne scars and triggers post-inflammatory hyperpigmentation. Use a <strong>mattifying, mineral SPF 50</strong> every single morning — even indoors.</p><h2>Weekly Add-Ons</h2><ul><li><strong>2x per week:</strong> BHA exfoliant (Paula's Choice 2% BHA is a cult favorite)</li><li><strong>1x per week:</strong> Clay mask with kaolin or bentonite to deep-clean pores</li></ul><h2>Ingredients to Avoid</h2><p>Steer clear of: <strong>coconut oil, shea butter, mineral oil, isopropyl myristate,</strong> and heavily fragranced products — all common pore-cloggers.</p><blockquote><p>⚠️ <strong>Remember:</strong> Introduce one new product at a time and patch test for 48 hours before full-face application.</p></blockquote></article>"
  },
  {
    "id": 2,
    "slug": "niacinamide-complete-guide",
    "heading": "Niacinamide: The One Ingredient Your Skin Is Missing",
    "excerpt": "From pores to pigmentation — discover why niacinamide is the most versatile ingredient in skincare right now.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    "author": "Ananya Kapoor",
    "date": "2025-03-05",
    "readTime": "5 min read",
    "category": "Ingredients",
    "concern": ["Acne", "Dry Skin"],
    "tags": ["niacinamide", "vitamin b3", "pores", "brightening"],
    "content": "<article><h2>What Exactly Is Niacinamide?</h2><p>Niacinamide — also known as <strong>Vitamin B3</strong> — is a water-soluble vitamin that works with the natural substances in your skin. It's one of the rare ingredients that genuinely does multiple things <em>well.</em></p><h2>What Can Niacinamide Actually Do?</h2><ul><li>✅ <strong>Minimizes the appearance of pores</strong> by regulating sebum</li><li>✅ <strong>Fades dark spots</strong> and post-acne hyperpigmentation</li><li>✅ <strong>Strengthens the skin barrier</strong> by boosting ceramide production</li><li>✅ <strong>Reduces redness</strong> and blotchiness in sensitive skin</li><li>✅ <strong>Controls oil production</strong> without drying skin out</li><li>✅ <strong>Improves uneven skin tone</strong> over time</li></ul><h2>Who Should Use It?</h2><p>The beautiful thing about niacinamide is that <strong>it works for every skin type</strong>:</p><ol><li><strong>Oily/Acne Skin:</strong> Reduces sebum and shrinks pores</li><li><strong>Dry Skin:</strong> Repairs the moisture barrier</li><li><strong>Sensitive Skin:</strong> Calms inflammation without irritation</li><li><strong>Mature Skin:</strong> Firms and brightens dull complexion</li></ol><h2>How to Use It</h2><p>Apply a <strong>5–10% niacinamide serum</strong> after cleansing and toning, before heavier creams. Use morning and/or evening — it's stable in both routines.</p><blockquote><p>💡 <strong>The 10% Myth:</strong> More isn't always better. Research shows <strong>5% is as effective as 10%</strong> with less risk of flushing for sensitive skin types.</p></blockquote><h2>What to Pair It With</h2><p>Niacinamide plays well with almost everything:</p><ul><li>✅ Hyaluronic acid — for barrier-boosting hydration</li><li>✅ Retinol — helps offset retinol irritation</li><li>✅ AHA/BHA — when layered correctly (niacinamide after exfoliant)</li><li>✅ Vitamin C (modern formulations are fine together)</li></ul><h2>Best Affordable Picks</h2><p>You don't need to spend a fortune. Look for: <strong>The Ordinary Niacinamide 10% + Zinc, Minimalist 10% Niacinamide, and Dot &amp; Key Pore Minimizing Serum</strong> — all excellent options for Indian skin.</p></article>"
  },
  {
    "id": 3,
    "slug": "anti-aging-routine-30s",
    "heading": "Your Complete Anti-Aging Routine for Your 30s (That Actually Works)",
    "excerpt": "Your 30s are the best time to start. Here's exactly what to use, in what order, to slow down visible aging.",
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    "author": "Dr. Meera Iyer",
    "date": "2025-02-28",
    "readTime": "8 min read",
    "category": "Routine Guide",
    "concern": ["Anti-Aging"],
    "tags": ["anti-aging", "retinol", "peptides", "collagen", "spf"],
    "content": "<article><h2>The Truth About Aging Skin</h2><p>Collagen production begins declining at around <strong>age 25 by 1% per year.</strong> By the time visible signs appear in your 30s, the process has already been underway for nearly a decade.</p><p>The good news? <em>It's never too early — or too late — to start a targeted anti-aging routine.</em></p><h2>The Non-Negotiables (Morning Routine)</h2><h3>1. Gentle Cream Cleanser</h3><p>Switch from foaming to a <strong>cream or oil cleanser</strong> — foaming cleansers strip mature skin's natural lipids, accelerating the appearance of fine lines.</p><h3>2. Antioxidant Vitamin C Serum</h3><p>Apply a <strong>15–20% L-Ascorbic Acid serum</strong> every morning. Vitamin C:</p><ul><li>Neutralizes free radical damage from UV &amp; pollution</li><li>Stimulates collagen synthesis</li><li>Fades existing hyperpigmentation and sun spots</li></ul><blockquote><p>⚡ <strong>Key Insight:</strong> Studies show Vitamin C used consistently for 12 weeks significantly reduces photoaging markers. Pair it with Vitamin E for 4x the antioxidant effect.</p></blockquote><h3>3. Peptide Moisturizer</h3><p>Look for moisturizers with <strong>Matrixyl (palmitoyl pentapeptide-4)</strong> or <strong>Argireline</strong> — these signal the skin to produce more collagen and elastin.</p><h3>4. Mineral SPF 50 (The Real Anti-Ager)</h3><p><strong>SPF is the single most proven anti-aging product that exists.</strong> 80% of visible skin aging is caused by UV exposure. No serum in the world can undo daily unprotected sun damage.</p><h2>The Actives (Evening Routine)</h2><h3>5. Retinol — The Gold Standard</h3><p>Begin with <strong>0.025% retinol 2 nights per week</strong>, slowly building to 0.1% nightly over 3–6 months. Retinol:</p><ol><li>Speeds cell turnover (fresh skin cells every 28 days instead of 45+)</li><li>Stimulates collagen at the dermis level</li><li>Visibly reduces fine lines, wrinkles, and uneven texture</li></ol><p>Always follow with a <strong>rich barrier cream</strong> containing ceramides to minimize the purging/dryness phase.</p><h3>6. Hyaluronic Acid + Rich Night Cream</h3><p>Apply HA serum to <em>damp skin</em> to lock in moisture, then seal with a nourishing night cream containing <strong>shea butter, squalane, or bakuchiol</strong>.</p><h2>Monthly Boosters</h2><ul><li><strong>Chemical exfoliation (2x/week):</strong> Glycolic acid 7% toner to resurface and brighten</li><li><strong>Face massage with gua sha:</strong> Improves lymphatic drainage and product absorption</li><li><strong>Sheet masks:</strong> Collagen or hyaluronic acid variants once a week</li></ul><h2>Lifestyle Factors That Age You Faster</h2><p>No routine can fully counteract these:</p><ul><li>❌ Poor sleep (under 7 hours damages skin barrier repair)</li><li>❌ High sugar diet (glycation stiffens collagen fibers)</li><li>❌ Smoking (depletes Vitamin C, collapses collagen)</li><li>❌ Skipping SPF</li></ul></article>"
  },
  {
    "id": 5,
    "slug": "hydrating-routine-dehydrated-skin",
    "heading": "How to Fix Dehydrated Skin: A Hydration-First Routine",
    "excerpt": "Dehydrated skin isn't dry skin — and treating it wrong makes everything worse. Here's how to actually fix it.",
    "image": "https://images.unsplash.com/photo-1643185539104-3622eb1c4f52?w=800&q=80",
    "author": "Simran Bhatia",
    "date": "2025-02-15",
    "readTime": "5 min read",
    "category": "Routine Guide",
    "concern": ["Dehydration"],
    "tags": ["dehydration", "hyaluronic acid", "moisture barrier", "glass skin"],
    "content": "<article><h2>Dehydrated vs. Dry Skin: They Are NOT the Same</h2><p><strong>Dry skin</strong> is a skin type — it lacks oil (sebum). <strong>Dehydrated skin</strong> is a temporary skin condition — it lacks water. Even oily skin can be dehydrated!</p><p>Signs your skin is dehydrated (not just dry):</p><ul><li>Skin feels tight after washing but still looks oily</li><li>Fine lines appear more prominent, especially under eyes</li><li>Skin looks dull, grey, or \"deflated\"</li><li>Pinch test: skin takes more than a second to snap back</li></ul><h2>The Core Routine for Dehydrated Skin</h2><h3>1. Switch to a Non-Stripping Cleanser</h3><p>Foaming cleansers with sulfates destroy your skin's <strong>acid mantle</strong> — the protective barrier that holds water in. Switch to a <strong>cream, gel, or micellar cleanser</strong> with a pH of 4.5–5.5.</p><h3>2. Layer Hydrating Toners (7-Skin Method)</h3><p>The Korean <strong>7-skin method</strong> involves applying a lightweight hydrating toner 3–7 times consecutively, layering thin sheets of moisture that build the skin's water content from within.</p><blockquote><p>💧 <strong>Best toners for dehydration:</strong> COSRX AHA/BHA Clarifying Toner, Klairs Supple Preparation Toner, Innisfree Green Tea Hyaluronic Toner</p></blockquote><h3>3. Hyaluronic Acid Serum — The Right Way</h3><p>The <em>most common HA mistake:</em> applying it to dry skin in dry climates. Hyaluronic acid is a humectant — it draws moisture from wherever it can find it. In low humidity, it pulls from your skin's own deeper layers, making dehydration worse!</p><p><strong>Always apply HA to damp skin</strong> (spritz with rose water or thermal water first), then immediately seal with a moisturizer.</p><h3>4. Ceramide-Rich Moisturizer</h3><p>Ceramides are the <strong>\"mortar\" between your skin cells</strong> that form the moisture barrier. Look for moisturizers with ceramide NP, AP, and EOP alongside cholesterol and fatty acids for the complete barrier-repair trio.</p><h3>5. Occlusive at Night</h3><p>Lock everything in with a thin layer of <strong>petroleum jelly, squalane, or a sleeping mask</strong> on top of your moisturizer. This occlusive layer prevents transepidermal water loss (TEWL) overnight.</p><h2>Lifestyle Hydration Factors</h2><ul><li>🥤 Drink 2–3 liters of water daily (but know that skin hydration relies more on topical care than drinking water)</li><li>😴 Sleep in a <strong>humidified room</strong> — air conditioning and central heating are major culprits of skin dehydration</li><li>☕ Limit caffeine and alcohol — both are diuretics that accelerate water loss</li><li>🥗 Eat water-rich foods: cucumber, watermelon, oranges, leafy greens</li></ul></article>"
  },
  {
    "id": 6,
    "slug": "dry-skin-routine-guide",
    "heading": "The Dry Skin Bible: Build a Routine That Actually Holds Moisture",
    "excerpt": "Dry skin needs more than just a heavy moisturizer. Here's the layered approach that keeps skin soft all day.",
    "image": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    "author": "Kavya Nair",
    "date": "2025-02-10",
    "readTime": "6 min read",
    "category": "Routine Guide",
    "concern": ["Dry Skin"],
    "tags": ["dry skin", "ceramides", "squalane", "barrier repair", "moisturizer"],
    "content": "<article><h2>Understanding Dry Skin at a Deeper Level</h2><p>Dry skin (clinically called <em>xerosis</em>) produces less sebum than normal skin. This means it lacks the natural oils that form the protective lipid barrier — leaving it vulnerable to <strong>environmental damage, irritation, and premature aging.</strong></p><h2>The Layering System for Dry Skin</h2><p>Dry skin doesn't just need one heavy product — it needs a <strong>strategic layered system</strong> that adds water, binds it in, and then seals it all.</p><h3>Layer 1 — Humectants (Draw Moisture In)</h3><p>Apply these to damp skin right after cleansing:</p><ul><li><strong>Hyaluronic Acid</strong> — holds 1000x its weight in water</li><li><strong>Glycerin</strong> — gentler and ideal for sensitive dry skin</li><li><strong>Aloe Vera</strong> — soothing humectant perfect for Indian climates</li></ul><h3>Layer 2 — Emollients (Fill the Gaps)</h3><p>Emollients fill the cracks between skin cells, making skin feel smooth and soft:</p><ul><li><strong>Jojoba Oil</strong> — closest to skin's natural sebum</li><li><strong>Rosehip Oil</strong> — adds emolliency + Vitamin A for dry, aging skin</li><li><strong>Shea Butter</strong> — rich emollient that softens without clogging</li></ul><h3>Layer 3 — Occlusives (Seal Everything In)</h3><p>These create a physical barrier on the skin's surface to prevent water escaping:</p><ul><li><strong>Squalane</strong> — lightweight, non-comedogenic, excellent for layering</li><li><strong>Beeswax or Lanolin</strong> — found in rich barrier balms</li><li><strong>Vaseline (Petroleum Jelly)</strong> — the most effective occlusive that exists</li></ul><blockquote><p>💡 <strong>The Golden Sequence:</strong> Humectant → Emollient → Occlusive. Never reverse this order or you'll trap nothing.</p></blockquote><h2>Best Cleansers for Dry Skin</h2><p>Avoid: foaming cleansers, micellar waters with high alcohol content, exfoliating cleansers daily. Use instead: <strong>cream cleansers, balm cleansers, or oil cleansers</strong> that leave a slight slip on the skin.</p><h2>Should Dry Skin Exfoliate?</h2><p>Yes — but gently. <strong>PHA (Polyhydroxy Acid)</strong> exfoliants are the best choice for dry skin. They exfoliate the surface but also have humectant properties, making them uniquely moisturizing. Use 1–2x per week maximum.</p><h2>Ingredients to Avoid With Dry Skin</h2><ul><li>❌ High-concentration alcohol (denatured alcohol, SD alcohol)</li><li>❌ Strong astringents or toners</li><li>❌ High-pH cleansers</li><li>❌ Fragrances and essential oils (damage barrier over time)</li></ul></article>"
  },
  {
    "id": 7,
    "slug": "sensitive-skin-guide",
    "heading": "Sensitive Skin Survival Guide: Build a Barrier, Ditch the Triggers",
    "excerpt": "Sensitive skin isn't a life sentence. Learn how to identify your triggers and build a calm, resilient skin barrier.",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80",
    "author": "Dr. Priya Sharma",
    "date": "2025-01-30",
    "readTime": "7 min read",
    "category": "Beauty Tips",
    "concern": ["Sensitive Skin"],
    "tags": ["sensitive skin", "redness", "fragrance-free", "barrier repair", "patch test"],
    "content": "<article><h2>Is Your Skin Truly Sensitive — Or Just Sensitized?</h2><p><strong>True sensitive skin</strong> is a genetic predisposition — your skin has fewer layers, more reactive nerve endings, and a thinner barrier. <strong>Sensitized skin</strong> is a temporary state caused by over-exfoliation, wrong products, or environmental stress.</p><p>Identifying which type you have changes your entire approach.</p><h2>Common Triggers to Identify and Eliminate</h2><ul><li>🌹 <strong>Fragrance</strong> — the #1 cause of contact dermatitis. Found in most products (listed as parfum, fragrance, essential oils)</li><li>☀️ <strong>UV exposure</strong> without protection</li><li>🧪 <strong>Active overload</strong> — mixing retinol + AHA + Vitamin C in the same routine</li><li>🌡️ <strong>Extreme temperatures</strong> — very hot showers, cold wind</li><li>🧼 <strong>Over-cleansing</strong> — washing more than twice daily</li></ul><h2>The 5-Product Sensitive Skin Routine</h2><p>Sensitive skin thrives on <strong>fewer products, gentler formulas.</strong></p><h3>1. Micellar Cleanser or Gentle Cream Wash</h3><p>Look for formulas with <strong>no sulfates, fragrance, or essential oils.</strong> Bioderma Sensibio H2O and La Roche-Posay Toleriane are industry gold standards.</p><h3>2. Calming Serum</h3><p>Ingredients to seek out:</p><ul><li><strong>Centella Asiatica (Cica)</strong> — reduces redness and accelerates wound healing</li><li><strong>Allantoin</strong> — calming, promotes healthy skin cell regeneration</li><li><strong>Beta-Glucan</strong> — anti-inflammatory, mimics hyaluronic acid in texture</li><li><strong>Panthenol (B5)</strong> — soothes and repairs the moisture barrier</li></ul><h3>3. Simple Barrier Moisturizer</h3><p>Short ingredient list wins here. Look for: <strong>Ceramides + Cholesterol + Fatty Acids</strong> in a 1:1:1 ratio — the exact composition of a healthy human skin barrier.</p><blockquote><p>🌿 <strong>Patch Test Everything:</strong> Apply a small amount behind the ear or on the inner wrist. Wait 24–48 hours before applying to the face. Non-negotiable for sensitive skin.</p></blockquote><h3>4. Mineral Sunscreen</h3><p><strong>Zinc oxide and titanium dioxide</strong> sit on top of the skin rather than being absorbed — making them far less likely to trigger reactions than chemical UV filters. Choose a mineral SPF 30–50.</p><h2>When to See a Dermatologist</h2><p>If you experience: persistent burning, stinging, unexplained hives, or products that almost universally irritate you — you may have <strong>rosacea, perioral dermatitis, or contact dermatitis</strong> that requires a professional diagnosis.</p></article>"
  },
  {
    "id": 8,
    "slug": "curly-hair-care-routine",
    "heading": "The Complete Curly Hair Routine: From Wash Day to Day 5",
    "excerpt": "Curly hair is a commitment — but with the right routine, defined, frizz-free curls are 100% achievable every wash day.",
    "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    "author": "Fatima Khan",
    "date": "2025-01-25",
    "readTime": "9 min read",
    "category": "Routine Guide",
    "concern": ["Curl Care"],
    "tags": ["curly hair", "curl method", "wash day", "co-wash", "diffusing", "plopping"],
    "content": "<article><h2>Understanding Your Curl Type and Porosity</h2><p>Before buying a single product, you need to understand two things about your curls:</p><h3>Curl Type (André Walker System)</h3><ul><li><strong>2A–2C:</strong> Wavy — S-shaped, tends toward frizz</li><li><strong>3A–3C:</strong> Curly — defined ringlets to tight corkscrews</li><li><strong>4A–4C:</strong> Coily — tight coils to zig-zag patterns</li></ul><h3>Porosity (More Important Than Curl Type)</h3><ul><li><strong>Low Porosity:</strong> Cuticles lay flat — water and product sit on top, slow to absorb</li><li><strong>Medium Porosity:</strong> Ideal — absorbs and retains moisture well</li><li><strong>High Porosity:</strong> Cuticles are raised — absorbs quickly but loses moisture fast</li></ul><blockquote><p>🧪 <strong>Float Test:</strong> Drop a clean strand in water. Floats = low porosity. Sinks fast = high porosity.</p></blockquote><h2>Wash Day Routine</h2><h3>Step 1: Pre-Poo Treatment (Optional but Powerful)</h3><p>Apply <strong>coconut oil or a deep conditioning mask</strong> to dry hair 30–60 minutes before washing. This prevents hygral fatigue (swelling and contracting from water) which damages the curl pattern over time.</p><h3>Step 2: Shampoo or Co-Wash</h3><ul><li><strong>Low/Normal porosity:</strong> Use a sulfate-free shampoo once a week to remove buildup</li><li><strong>High porosity/Damaged curls:</strong> Co-wash (conditioner-only wash) 2–3x per week to maintain moisture</li></ul><h3>Step 3: Deep Conditioning (Every Wash)</h3><p>Apply a <strong>protein-free deep conditioner</strong> (for most curl types) generously from mid-shaft to ends. Leave for 20–30 minutes with a shower cap. Protein treatments: once a month maximum to avoid stiff, brittle curls.</p><h3>Step 4: Leave-In Conditioner</h3><p>On soaking wet hair, rake through a lightweight <strong>leave-in conditioner</strong>. This is your base hydration layer.</p><h3>Step 5: Styling with LCO or LOC Method</h3><p>Choose based on your porosity:</p><ul><li><strong>LCO (Low Porosity):</strong> Leave-in → Cream → Oil</li><li><strong>LOC (High Porosity):</strong> Leave-in → Oil → Cream</li></ul><p>Work products in sections, using the <strong>prayer hands and scrunching techniques</strong> to encourage clumping without disturbing the curl pattern.</p><h3>Step 6: Dry Without Frizz</h3><ul><li><strong>Plopping:</strong> Wrap wet hair in a cotton T-shirt (not a regular towel — terrycloth causes frizz) for 20 minutes</li><li><strong>Diffusing:</strong> Use a diffuser attachment on low heat/high airflow, working upward to scrunch curls toward the scalp</li><li><strong>Air drying:</strong> Best for 2C–3A types in humid climates</li></ul><h2>Day 2–5 Refresh Routine</h2><ul><li>🌊 <strong>Wet refresh:</strong> Dampen with water in a spray bottle, scrunch in a tiny amount of leave-in or gel</li><li>🌀 <strong>Pineapple overnight:</strong> Gather curls loosely on top of head with a silk scrunchie to preserve the pattern</li><li>🧣 <strong>Satin pillowcase:</strong> Non-negotiable — cotton absorbs moisture and creates friction that destroys curl definition</li></ul><h2>Ingredients That DAMAGE Curls</h2><ul><li>❌ Sulfate shampoos (SLS, SLES) — strip natural oils</li><li>❌ Silicones without sulfates in routine — build up and coat curls</li><li>❌ Drying alcohols (isopropyl, SD alcohol)</li><li>❌ Mineral oil — occlusive without conditioning benefit</li></ul></article>"
  },
  {
    "id": 9,
    "slug": "vitamin-c-skincare-guide",
    "heading": "Vitamin C in Skincare: How to Choose, Use, and Store It Correctly",
    "excerpt": "Not all Vitamin C serums are created equal. Here's how to pick the right form, concentration, and routine position.",
    "image": "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=800&q=80",
    "author": "Ananya Kapoor",
    "date": "2025-01-18",
    "readTime": "6 min read",
    "category": "Ingredients",
    "concern": ["Anti-Aging", "Acne"],
    "tags": ["vitamin c", "ascorbic acid", "brightening", "antioxidant", "hyperpigmentation"],
    "content": "<article><h2>Why Vitamin C Is Called the \"Morning Essential\"</h2><p>Vitamin C (ascorbic acid) is the <strong>only topical antioxidant with substantial clinical evidence</strong> for photoprotection, collagen stimulation, and hyperpigmentation reduction. Applied in the morning, it forms a second line of defense alongside SPF against UV-generated free radicals.</p><h2>The Different Forms of Vitamin C</h2><p>This is where most people get confused. Not all Vitamin C is equal:</p><ol><li><strong>L-Ascorbic Acid (LAA)</strong> — Most potent and researched form. Effective at pH 2.5–3.5 — which can be irritating. Best for normal/oily skin. Concentration: 10–20%.</li><li><strong>Ascorbyl Glucoside</strong> — Gentler derivative. Less potent but far less irritating. Ideal for sensitive or dry skin.</li><li><strong>Sodium Ascorbyl Phosphate</strong> — Stable, gentle, water-soluble. Great for acne-prone skin (has antimicrobial properties).</li><li><strong>Tetrahexyldecyl Ascorbate (THD)</strong> — Oil-soluble form. Penetrates deeper than water-soluble forms. Expensive but excellent for anti-aging.</li></ol><blockquote><p>💡 <strong>For sensitive skin or beginners:</strong> Start with ascorbyl glucoside at 5–8%. Work up to L-Ascorbic Acid slowly.</p></blockquote><h2>How to Know If Your Vitamin C Has Oxidized</h2><p>Vitamin C is notoriously <strong>unstable</strong> — it oxidizes when exposed to light, air, and heat, turning from clear/pale yellow to deep orange/brown. Oxidized Vitamin C is not only ineffective but can actually <strong>generate free radicals</strong> and worsen discoloration.</p><ul><li>✅ Fresh: Clear, pale yellow</li><li>⚠️ Slightly oxidized: Light orange (still partially effective)</li><li>❌ Oxidized: Dark orange or brown — discard immediately</li></ul><h2>Storage Rules</h2><ul><li>Store in a <strong>dark, airtight bottle</strong> away from direct sunlight</li><li>Keep in the <strong>refrigerator</strong> during summer months</li><li>Use within <strong>3 months</strong> of opening</li></ul><h2>Routine Placement</h2><p>Apply Vitamin C as your <strong>first serum after cleansing and toning, in the morning.</strong> Let it absorb fully (2–3 minutes) before layering moisturizer and SPF. Pairing it with <strong>Vitamin E and Ferulic Acid</strong> creates a synergistic antioxidant complex that's 8x more effective than Vitamin C alone.</p></article>"
  },
  {
    "id": 10,
    "slug": "10-beauty-tips-indian-skin",
    "heading": "10 Beauty Tips Every Indian Woman Should Know",
    "excerpt": "Indian skin has unique needs — from humidity and sun exposure to hyperpigmentation. These tips are tailored for us.",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
    "author": "Simran Bhatia",
    "date": "2025-01-10",
    "readTime": "5 min read",
    "category": "Beauty Tips",
    "concern": ["Acne", "Dry Skin", "Sensitive Skin"],
    "tags": ["beauty tips", "indian skin", "hyperpigmentation", "sun care", "melanin"],
    "content": "<article><h2>1. Understand That Indian Skin Has Higher Melanin — Use It Strategically</h2><p>Higher melanin gives us a natural SPF of about 13 and protects against UV damage better than lighter skin tones. But it also means <strong>post-inflammatory hyperpigmentation (PIH)</strong> — the dark marks after a pimple — is more persistent and darker for us.</p><h2>2. SPF Is Not Optional — Even Indoors</h2><p>UVA rays penetrate glass. India's UV Index is consistently high year-round, even on cloudy days. Daily SPF 30–50 prevents <strong>tanning, PIH worsening, and photoaging</strong> — the three most common skin complaints among Indian women.</p><h2>3. Don't Over-Bleach or Use Harsh Fairness Creams</h2><p>Products with <strong>mercury, hydroquinone above 2%, or high steroid content</strong> — still sadly common in Indian markets — cause long-term skin thinning, steroid dependency, and paradoxically worse pigmentation with withdrawal. Opt instead for <strong>kojic acid, alpha arbutin, and niacinamide</strong>.</p><h2>4. Adjust Your Routine by Season</h2><p>In India's intense summers and humid monsoons, switch to <strong>gel-based, lighter formulas.</strong> Winter calls for richer creams and barrier support. Your skin has different needs across seasons — don't use one routine year-round.</p><h2>5. Ubtan Is Backed by Science</h2><p>Traditional <em>ubtan</em> (chickpea flour, turmeric, sandalwood) has scientifically proven benefits:</p><ul><li>Turmeric: Anti-inflammatory, reduces PIH (curcumin inhibits melanin synthesis)</li><li>Chickpea flour: Gentle physical exfoliation</li><li>Sandalwood: Anti-microbial, cooling</li></ul><h2>6. Hair Oiling Before Wash Is Not a Myth</h2><p>Pre-wash oiling with <strong>coconut, castor, or bhringraj oil</strong> protects hair during the washing process, prevents hygral fatigue, and delivers fat-soluble nutrients to the scalp that shampoo washes away.</p><h2>7. Watch Out for \"Natural\" and \"Ayurvedic\" Labels</h2><p>Natural doesn't mean safe or effective. Lemon juice (too acidic for skin), raw turmeric paste (can stain), and undiluted essential oils (common sensitizers) cause more harm than good when used incorrectly.</p><h2>8. Eye Cream Is Worth It (For Indians Especially)</h2><p>Dark circles are more prevalent and more visible on deeper skin tones. Look for <strong>caffeine + Vitamin K + peptides</strong> for puffiness and dark circles. The under-eye area is 10x thinner than the rest of the face — it needs a dedicated product.</p><h2>9. Scalp Health = Hair Health</h2><p>Most Indian women treat hair but ignore the scalp. A healthy, exfoliated scalp allows for better nutrient absorption and reduces dandruff and hair fall. Use a <strong>scalp scrub or salicylic acid scalp serum</strong> monthly.</p><h2>10. Consistency Beats Expensive Products</h2><p>A ₹200 cleanser used consistently for 6 months will give better results than a ₹3000 serum used twice. <strong>The best routine is the one you'll actually follow every day.</strong></p></article>"
  },
  {
    "id": 11,
    "slug": "scalp-care-hair-growth",
    "heading": "Scalp Care Secrets: The Foundation of Healthy Hair Growth",
    "excerpt": "Healthy hair starts at the root — literally. A neglected scalp leads to shedding, dandruff, and stunted growth.",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    "author": "Fatima Khan",
    "date": "2025-01-05",
    "readTime": "6 min read",
    "category": "Beauty Tips",
    "concern": ["Hair Care"],
    "tags": ["scalp care", "hair growth", "dandruff", "hair fall", "scalp massage"],
    "content": "<article><h2>The Scalp–Hair Connection Most People Ignore</h2><p>Your scalp is skin — and it follows the same rules as facial skin. An inflamed, congested, or imbalanced scalp environment directly impacts the health of the hair follicle and the quality of the hair it produces.</p><blockquote><p>🔬 <strong>Research fact:</strong> A study published in the <em>Journal of Cosmetic Dermatology</em> found that consistent scalp massage for 4 minutes daily led to statistically significant increases in hair thickness and growth rate after 24 weeks.</p></blockquote><h2>Signs Your Scalp Needs Immediate Attention</h2><ul><li>Flaking (dandruff or dry scalp — these are different conditions)</li><li>Itching and irritation, especially 1–2 days post-wash</li><li>Excess oil within 24 hours of washing</li><li>Hair thinning or increased shedding (100+ strands/day is excessive)</li><li>Tight, inflamed feeling at hairline</li></ul><h2>Dandruff vs. Dry Scalp: Know the Difference</h2><p><strong>Dandruff</strong> is caused by Malassezia — a naturally occurring fungus that overproduces when the scalp is oily. Flakes are large, oily, and yellowish. Treat with <strong>ketoconazole, selenium sulfide, or zinc pyrithione shampoos.</strong></p><p><strong>Dry Scalp</strong> is caused by moisture loss — flakes are small, dry, and white. Treat with <strong>moisturizing scalp serums, gentle shampoos, and scalp oils.</strong></p><h2>The Scalp Care Routine</h2><h3>Weekly Scalp Exfoliation</h3><p>Use a <strong>physical scalp scrub</strong> (sugar or sea salt based) or a <strong>chemical exfoliant</strong> (salicylic acid 1–2% scalp serum) to remove dead skin cells and product buildup. This unclogs follicles and allows better product penetration.</p><h3>Scalp Massage (Daily, 4 Minutes)</h3><p>Using fingertips (not nails), apply firm circular pressure across the scalp. This:</p><ul><li>Increases blood circulation to follicles</li><li>Reduces cortisol (stress-related hair fall trigger)</li><li>Stimulates dermal papilla cells to promote growth</li></ul><h3>Targeted Scalp Serums</h3><p>Look for serums containing:</p><ul><li><strong>Minoxidil 2–5%</strong> — clinically proven hair regrowth (consult a dermatologist)</li><li><strong>Redensyl or Anagain</strong> — plant-based growth stimulators</li><li><strong>Caffeine</strong> — counteracts DHT (dihydrotestosterone, a leading cause of hair thinning)</li><li><strong>Biotin + Niacinamide</strong> — follicle strengthening</li></ul><h2>Ingredients to Avoid on the Scalp</h2><ul><li>❌ Heavy oils directly on the scalp (coconut, castor in excess) — clogs follicles</li><li>❌ Sulfate-heavy shampoos used daily — strip protective oils</li><li>❌ Dry shampoo overuse — blocks follicle openings</li></ul></article>"
  },
  {
    "id": 12,
    "slug": "glass-skin-routine-beginners",
    "heading": "Glass Skin for Beginners: The Korean-Inspired Routine That Works",
    "excerpt": "Glass skin isn't a filter — it's a result of strategic layering, the right actives, and relentless consistency.",
    "image": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    "author": "Kavya Nair",
    "date": "2024-12-28",
    "readTime": "7 min read",
    "category": "Beauty Tips",
    "concern": ["Dehydration", "Dry Skin"],
    "tags": ["glass skin", "korean skincare", "glow", "hydration", "essence"],
    "content": "<article><h2>What Is Glass Skin, Really?</h2><p>\"Glass skin\" is a Korean beauty standard referring to skin that is <strong>so hydrated, even-toned, and luminous</strong> that it appears translucent — like glass. It's not about being pale or using filters; it's about maximizing your skin's natural clarity and reflectiveness through moisture.</p><h2>The 8-Step Korean Skincare Approach (Simplified for Beginners)</h2><h3>1. Oil Cleanser (PM)</h3><p>Dissolves sunscreen, makeup, and sebum without stripping. First step of the double cleanse in the evening.</p><h3>2. Water-Based Cleanser</h3><p>Follows oil cleansing to remove water-based impurities. Use morning and evening. pH should be 4.5–5.5.</p><h3>3. Exfoliator (2–3x per week)</h3><p>AHA (lactic or glycolic acid) for surface renewal and brightening. PHA for sensitive beginners. Never more than 3x per week.</p><h3>4. Toner</h3><p>In Korean skincare, toner is <strong>not an astringent</strong> — it's a first hydration step. Press into skin gently with palms, don't swipe.</p><h3>5. Essence (The Core Glass Skin Step)</h3><p>Essence is a <strong>lightweight, watery hydration booster</strong> applied after toner. It's more concentrated than toner but thinner than serum. Cult favorites: SK-II Facial Treatment Essence (fermented galactomyces), COSRX Galactomyces 95 Whitening Power Essence, Missha Time Revolution.</p><blockquote><p>✨ <strong>The Glass Skin Shortcut:</strong> If you adopt just one Korean step, make it an essence. It's the single biggest leap toward glass skin results.</p></blockquote><h3>6. Serum / Ampoule</h3><p>Address your specific concern here — niacinamide for pores, Vitamin C for brightness, peptides for firmness. One targeted serum is enough.</p><h3>7. Sheet Mask (2–3x weekly)</h3><p>After serum, apply a <strong>hydrating sheet mask for 15–20 minutes.</strong> Pat the excess essence into skin after removing — don't rinse. Hyaluronic acid or ceramide masks are glass skin essentials.</p><h3>8. Moisturizer + SPF</h3><p>Seal with a gel-cream moisturizer for daytime, a rich cream at night. SPF in the morning. Always.</p><h2>The Non-Negotiable Lifestyle Habits</h2><ul><li>Sleep on a <strong>silk pillowcase</strong> — reduces friction and moisture absorption</li><li>Use a <strong>humidifier</strong> while sleeping — adds moisture to the air around your skin</li><li>Drink water consistently throughout the day — not just a large amount at once</li><li>Avoid <strong>smoking and excess alcohol</strong> — both dehydrate skin from the inside out</li></ul></article>"
  }
];

// Add the missing constants here
const CATEGORIES = ['All Articles', 'Routine Guide', 'Ingredients', 'Beauty Tips'];
const CONCERNS = ['All', 'Acne', 'Anti-Aging', 'Hair Care', 'Dehydration', 'Dry Skin', 'Sensitive Skin', 'Curl Care'];

// ── Category color map ───────────────────────────────────────────
const catColor = {
  'Routine Guide': { bg: '#fff0f5', text: '#C2185B', border: '#f9c6d8' },
  'Ingredients':   { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' },
  'Beauty Tips':   { bg: '#fffbeb', text: '#92400e', border: '#fde68a' },
};

// ── Grid Icon ────────────────────────────────────────────────────
const GridIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
    <rect x="10" y="1" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
    <rect x="1" y="10" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
    <rect x="10" y="10" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
  </svg>
);

const ListIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="2" width="16" height="3" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
    <rect x="1" y="7.5" width="16" height="3" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
    <rect x="1" y="13" width="16" height="3" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
  </svg>
);

// ── Blog Card (Grid) ─────────────────────────────────────────────
function BlogCardGrid({ blog }) {
  const c = catColor[blog.category] || catColor['Beauty Tips'];
  return (
    <Link to={`/blog/${blog.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={blog.image} alt={blog.heading} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span
          className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
        >
          {blog.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-playfair font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#C2185B] transition-colors line-clamp-2">
          {blog.heading}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-2">{blog.excerpt}</p>
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-50">
          <span className="text-xs text-gray-400 shrink-0">{blog.readTime}</span>
          <span className="ml-auto self-end text-[#C2185B] hover:text-[#880E4F] px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
            Read Story →
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Blog Card (List) ─────────────────────────────────────────────
function BlogCardList({ blog }) {
  const c = catColor[blog.category] || catColor['Beauty Tips'];
  return (
    <Link to={`/blog/${blog.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 flex gap-0">
      <div className="relative w-48 shrink-0 overflow-hidden">
        <img src={blog.image} alt={blog.heading} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
            style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
          >
            {blog.category}
          </span>
          <span className="text-xs text-gray-400">{blog.readTime}</span>
        </div>
        <h3 className="font-playfair font-bold text-gray-900 text-base leading-snug mb-1 group-hover:text-[#C2185B] transition-colors line-clamp-2">
          {blog.heading}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-2">{blog.excerpt}</p>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center text-xs font-bold text-white shrink-0">
            {blog.author.split(' ').map(w => w[0]).join('').slice(0,2)}
          </div>
          <span className="text-xs text-gray-700 font-medium">{blog.author}</span>
          <span className="ml-auto text-xs text-gray-400">{blog.date}</span>
        </div>
      </div>
    </Link>
  );
}

// ── Featured Card ────────────────────────────────────────────────
function FeaturedCard({ blog }) {
  const c = catColor[blog.category] || catColor['Beauty Tips'];
  return (
    <Link to={`/blog/${blog.slug}`} className="group block bg-white rounded-3xl overflow-hidden border border-pink-100 hover:shadow-xl transition-all duration-300 mb-8">
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 md:h-100 overflow-hidden">
          <img src={blog.image} alt={blog.heading} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
        </div>
        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <span
            className="self-start text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider"
            style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
          >
            {blog.category}
          </span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#C2185B] transition-colors">
            {blog.heading}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{blog.excerpt}</p>
          <span className="self-end bg-[#C2185B] hover:bg-[#880E4F] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
            Read Story →
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Main Blogs Page ──────────────────────────────────────────────
export default function Blogs() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [activeConcern, setActiveConcern]   = useState('All');
  const [viewMode, setViewMode]             = useState('grid'); // 'grid' | 'list'

  // Handle navigation state from BlogSingle
  useEffect(() => {
    if (location.state) {
      if (location.state.selectedConcern) {
        setActiveConcern(location.state.selectedConcern);
        // If a concern is selected, set category to 'All Articles' to show all matching articles
        setActiveCategory('All Articles');
      }
      if (location.state.selectedCategory) {
        setActiveCategory(location.state.selectedCategory);
        // If a category is selected, set concern to 'All' to show all in that category
        setActiveConcern('All');
      }
      
      // Scroll to articles section
      if (location.state.scrollToArticles) {
        setTimeout(() => {
          const articlesSection = document.getElementById('articles-section');
          if (articlesSection) {
            articlesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [location.state]);

  // Filter logic
  const filtered = blogData.filter(b => {
    const catMatch = activeCategory === 'All Articles' || b.category === activeCategory;
    const conMatch = activeConcern === 'All' || b.concern.includes(activeConcern);
    return catMatch && conMatch;
  });

  // Featured = latest from filtered set
  const featured = filtered[0] || null;
  const rest     = filtered.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── Page Header ── */}
      <div className="bg-white border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-0">

          {/* Title */}
          <h1 className="font-playfair text-4xl font-bold text-[#C2185B] mb-5">Blogs</h1>

          {/* Category Tabs */}
          <div className="flex gap-0 border-b border-gray-200 overflow-x-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { 
                  setActiveCategory(cat); 
                  setActiveConcern('All'); 
                }}
                className={`relative px-5 py-3 text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'text-[#C2185B]'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C2185B] rounded-t" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* ── Featured Story ── */}
        {featured && (
          <div>
            <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">Featured Story</h2>
            <FeaturedCard blog={featured} />
          </div>
        )}

        {/* ── Concern Filter Row ── */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Concern</h3>
          <div className="flex flex-wrap gap-2">
            {CONCERNS.map(c => (
              <button
                key={c}
                onClick={() => {
                  setActiveConcern(c);
                  setActiveCategory('All Articles'); // Reset category when concern changes
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  activeConcern === c
                    ? 'bg-[#C2185B] border-[#C2185B] text-white shadow-md shadow-pink-200'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-[#C2185B] hover:text-[#C2185B]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ── Recent Articles Header ── */}
        <div id="articles-section" className="flex items-center justify-between mb-5 scroll-mt-20">
          <h2 className="font-playfair text-xl font-bold text-gray-900">
            {activeConcern === 'All' ? 'Recent Articles' : `${activeConcern} Articles`}
            <span className="ml-2 text-sm font-normal text-gray-400">({rest.length})</span>
          </h2>
          {/* Grid / List Toggle */}
          <div className="flex items-center gap-1 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-pink-50' : 'hover:bg-gray-50'}`}
            >
              <GridIcon active={viewMode === 'grid'} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-pink-50' : 'hover:bg-gray-50'}`}
            >
              <ListIcon active={viewMode === 'list'} />
            </button>
          </div>
        </div>

        {/* ── Articles ── */}
        {rest.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-3">🌸</div>
            <p className="text-sm">No articles found for this filter.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map(blog => <BlogCardGrid key={blog.id} blog={blog} />)}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {rest.map(blog => <BlogCardList key={blog.id} blog={blog} />)}
          </div>
        )}

        {/* ── Newsletter ── */}
        <div
          className="mt-14 rounded-3xl p-8 md:p-12 text-center text-white"
          style={{ background: "radial-gradient(ellipse at center, #3d0a1e 0%, #1a0610 60%, #0f0409 100%)" }}
        >
          <div className="mb-4">
            <svg className="mx-auto mb-3" width="36" height="28" viewBox="0 0 36 28" fill="none">
              <rect x="1" y="1" width="34" height="26" rx="4" stroke="#f0436a" strokeWidth="2" />
              <path d="M1 6L18 17L35 6" stroke="#f0436a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="font-playfair text-2xl font-bold mb-2">Glow in Your Inbox</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Get the latest skincare science, routine updates, and exclusive product launches delivered weekly.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none"
              style={{ background: 'rgba(255,255,255,0.92)' }}
            />
            <button
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #f0436a 0%, #e0255a 100%)', boxShadow: '0 4px 18px rgba(240,67,106,0.35)' }}
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}