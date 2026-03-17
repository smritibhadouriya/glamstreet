import { useState } from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 'skinType',
    question: 'What is your skin type?',
    subtitle: 'Select the option that best describes your skin most of the time.',
    options: [
      { value: 'oily', label: 'Oily', desc: 'Shiny appearance, visible pores', icon: '💧' },
      { value: 'dry', label: 'Dry', desc: 'Feeling tight, flaky patches', icon: '🌾' },
      { value: 'acne', label: 'Acne Prone', desc: 'Frequent breakouts, congestion', icon: '🌿' },
      { value: 'combination', label: 'Combination', desc: 'Oily T-zone, dry cheeks', icon: '✨' },
      { value: 'sensitive', label: 'Sensitive', desc: 'Redness, reacts to products', icon: '🌸' },
    ]
  },
  {
    id: 'concern',
    question: 'What is your primary skin concern?',
    subtitle: 'We will prioritize products that target this concern.',
    options: [
      { value: 'brightening', label: 'Dullness & Dark Spots', desc: 'Uneven tone, hyperpigmentation', icon: '✨' },
      { value: 'acne', label: 'Acne & Breakouts', desc: 'Pimples, blackheads, blemishes', icon: '🌿' },
      { value: 'antiaging', label: 'Fine Lines & Aging', desc: 'Wrinkles, loss of firmness', icon: '⏳' },
      { value: 'hydration', label: 'Dehydration', desc: 'Dryness, flaking, tightness', icon: '💧' },
      { value: 'pores', label: 'Large Pores', desc: 'Visible pores, oily shine', icon: '🔬' },
    ]
  },
  {
    id: 'hairType',
    question: 'What is your hair type?',
    subtitle: 'Help us recommend the right haircare for you.',
    options: [
      { value: 'straight', label: 'Straight', desc: 'Fine to thick, no curl', icon: '➖' },
      { value: 'wavy', label: 'Wavy', desc: 'Gentle S-shaped waves', icon: '〜' },
      { value: 'curly', label: 'Curly', desc: 'Defined curls, springy', icon: '🌀' },
      { value: 'coily', label: 'Coily / Kinky', desc: 'Tight coils, afro-textured', icon: '🔄' },
      { value: 'colored', label: 'Colored / Treated', desc: 'Chemically treated or dyed', icon: '🎨' },
    ]
  },
];

const recommendations = {
  oily: [
    { name: 'Radiance Vitamin C Serum', price: 599, emoji: '🌟', desc: 'Brightens and controls sebum production.' },
    { name: 'Detox Clay Purifier', price: 599, emoji: '🟫', desc: 'Deep-cleanses pores and controls oil.' },
    { name: 'Daily SPF 50 Shield', price: 599, emoji: '☀️', desc: 'Lightweight, non-greasy sun protection.' },
  ],
  dry: [
    { name: 'Deep Hydration Dew Cream', price: 599, emoji: '💧', desc: '72-hour moisture lock for dry skin.' },
    { name: 'Night Recovery Oil', price: 599, emoji: '🌙', desc: 'Restores and nourishes dry skin overnight.' },
    { name: 'Gentle Amino Cleanser', price: 599, emoji: '🫧', desc: 'Cleanses without stripping moisture.' },
  ],
  acne: [
    { name: 'Detox Clay Purifier', price: 599, emoji: '🟫', desc: 'Draws out impurities and unclogs pores.' },
    { name: 'Radiance Vitamin C Serum', price: 599, emoji: '🌟', desc: 'Fades acne marks and brightens.' },
    { name: 'Gentle Amino Cleanser', price: 599, emoji: '🫧', desc: 'pH-balanced for acne-prone skin.' },
  ],
  combination: [
    { name: 'Rose Essence Mist', price: 599, emoji: '🌹', desc: 'Balances and refreshes combination skin.' },
    { name: 'Deep Hydration Dew Cream', price: 599, emoji: '💧', desc: 'Lightweight hydration for dry zones.' },
    { name: 'Daily SPF 50 Shield', price: 599, emoji: '☀️', desc: 'Broad-spectrum protection for all zones.' },
  ],
  sensitive: [
    { name: 'Gentle Amino Cleanser', price: 599, emoji: '🫧', desc: 'Ultra-gentle formula for sensitive skin.' },
    { name: 'Rose Essence Mist', price: 599, emoji: '🌹', desc: 'Soothes redness and calms irritation.' },
    { name: 'Night Repair Balm', price: 599, emoji: '🌙', desc: 'Restores barrier and reduces sensitivity.' },
  ],
};

export default function BeautyIntelligence() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const step = steps[currentStep];

  const handleSelect = (value) => {
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const recs = recommendations[answers.skinType] || recommendations.oily;

  if (showResults) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#C2185B] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">✓</div>
            <h1 className="font-playfair text-3xl font-bold text-gray-900">Your Beauty Profile is Ready!</h1>
            <p className="text-gray-500 mt-2">Based on your answers, here are your personalized recommendations.</p>
          </div>

          {/* Profile Summary */}
          <div className="bg-white rounded-2xl border border-pink-100 p-6 mb-8">
            <h3 className="font-semibold text-gray-700 mb-3 text-sm">Your Beauty Profile</h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(answers).map(([key, val]) => (
                <span key={key} className="bg-pink-50 text-[#C2185B] px-3 py-1.5 rounded-full text-sm border border-pink-200 font-medium capitalize">
                  {val.replace('acne', 'Acne Prone').replace('oily', 'Oily Skin').replace('dry', 'Dry Skin').replace('combination', 'Combination').replace('sensitive', 'Sensitive')}
                </span>
              ))}
            </div>
          </div>

          {/* Recommended Products */}
          <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-5">Recommended for You</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {recs.map((p, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl border border-pink-100 overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center">
                  <span className="text-5xl">{p.emoji}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-gray-800 text-sm">{p.name}</h3>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">{p.desc}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-gray-900">₹{p.price}</span>
                    <button className="bg-[#C2185B] hover:bg-[#880E4F] text-white text-xs px-3 py-1.5 rounded-full transition-all">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center">
            <Link to="/shop" className="bg-[#C2185B] hover:bg-[#880E4F] text-white px-8 py-3 rounded-full font-semibold text-sm transition-all">
              View All Products →
            </Link>
            <button onClick={reset} className="border-2 border-pink-200 text-gray-600 hover:border-[#C2185B] hover:text-[#C2185B] px-6 py-3 rounded-full text-sm font-medium transition-all">
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C2185B] text-xs uppercase tracking-widest font-semibold mb-2">AI-Powered Recommendations</p>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-3">Beauty Intelligence</h1>
          <p className="text-gray-500">Expert tips and product recommendations tailored just for you.</p>
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-2xl mx-auto px-6 pt-8">
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${i < currentStep ? 'bg-[#C2185B] text-white' : i === currentStep ? 'bg-[#C2185B] text-white ring-4 ring-pink-200' : 'bg-white border-2 border-pink-200 text-gray-400'}`}>
                {i < currentStep ? '✓' : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-1 rounded transition-all ${i < currentStep ? 'bg-[#C2185B]' : 'bg-pink-100'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Question */}
        <div className="bg-white rounded-3xl border border-pink-100 p-8 shadow-sm">
          <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-1">{step.question}</h2>
          <p className="text-gray-400 text-sm mb-6">{step.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {step.options.map(opt => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`text-left p-4 rounded-xl border-2 transition-all hover:border-[#C2185B] hover:bg-pink-50 ${answers[step.id] === opt.value ? 'border-[#C2185B] bg-pink-50' : 'border-pink-100 bg-white'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{opt.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{opt.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{opt.desc}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {currentStep > 0 && (
            <button onClick={() => setCurrentStep(currentStep - 1)} className="mt-5 text-gray-400 text-sm hover:text-gray-600 transition-colors">
              ← Back
            </button>
          )}
        </div>

        {/* Category tabs below */}
        <div className="flex gap-4 justify-center mt-8">
          {['Skin Care', 'Hair Care', 'Makeup'].map(c => (
            <button key={c} className="px-5 py-2 rounded-full bg-white border border-pink-200 text-sm text-gray-600 hover:border-[#C2185B] hover:text-[#C2185B] transition-all">
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}