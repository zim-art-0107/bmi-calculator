'use client'

import { useState, useMemo } from 'react'

type UnitSystem = 'metric' | 'imperial'

interface BMIResult {
  value: number
  category: 'Underweight' | 'Normal' | 'Overweight' | 'Obese'
  interpretation: string
  colorClass: string
}

export default function Home() {
  const [heightUnit, setHeightUnit] = useState<UnitSystem>('metric')
  const [weightUnit, setWeightUnit] = useState<UnitSystem>('metric')
  
  // Metric inputs
  const [heightCm, setHeightCm] = useState<string>('')
  const [weightKg, setWeightKg] = useState<string>('')
  
  // Imperial inputs
  const [heightFeet, setHeightFeet] = useState<string>('')
  const [heightInches, setHeightInches] = useState<string>('')
  const [weightLbs, setWeightLbs] = useState<string>('')

  const calculateBMI = (): BMIResult | null => {
    let heightInMeters: number
    let weightInKg: number

    if (heightUnit === 'metric') {
      const cm = parseFloat(heightCm)
      if (!cm || cm <= 0 || cm > 300) return null
      heightInMeters = cm / 100
    } else {
      const feet = parseFloat(heightFeet) || 0
      const inches = parseFloat(heightInches) || 0
      const totalInches = feet * 12 + inches
      if (totalInches <= 0 || totalInches > 120) return null
      heightInMeters = totalInches * 0.0254
    }

    if (weightUnit === 'metric') {
      weightInKg = parseFloat(weightKg)
      if (!weightInKg || weightInKg <= 0 || weightInKg > 1000) return null
    } else {
      const lbs = parseFloat(weightLbs)
      if (!lbs || lbs <= 0 || lbs > 2200) return null
      weightInKg = lbs * 0.453592
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters)

    let category: BMIResult['category']
    let interpretation: string
    let colorClass: string

    if (bmi < 18.5) {
      category = 'Underweight'
      interpretation = 'Your BMI indicates you may be underweight. Consider consulting with a healthcare provider to ensure you maintain a healthy weight through proper nutrition and exercise.'
      colorClass = 'category-underweight'
    } else if (bmi < 25) {
      category = 'Normal'
      interpretation = 'Your BMI is within the healthy range. Maintain your current weight through a balanced diet and regular physical activity.'
      colorClass = 'category-normal'
    } else if (bmi < 30) {
      category = 'Overweight'
      interpretation = 'Your BMI indicates you may be overweight. Consider adopting a healthier diet and increasing physical activity. Consult with a healthcare provider for personalized advice.'
      colorClass = 'category-overweight'
    } else {
      category = 'Obese'
      interpretation = 'Your BMI indicates obesity. It\'s important to consult with a healthcare provider to develop a safe and effective weight management plan tailored to your needs.'
      colorClass = 'category-obese'
    }

    return {
      value: bmi,
      category,
      interpretation,
      colorClass,
    }
  }

  const bmiResult = useMemo(() => calculateBMI(), [
    heightCm,
    heightFeet,
    heightInches,
    weightKg,
    weightLbs,
    heightUnit,
    weightUnit,
  ])

  return (
    <div className="container">
      <main>
        <header className="card">
          <h1>BMI Calculator - Free Body Mass Index Calculator</h1>
          <p className="subtitle">
            Calculate your Body Mass Index instantly with our free online BMI calculator. 
            Get accurate BMI results with health category classification and personalized insights.
          </p>
        </header>

        <article className="card">
          <h2>Calculate Your BMI</h2>
          
          <section>
            <div className="form-group">
              <label className="label">Height</label>
              <div className="unit-toggle">
                <button
                  type="button"
                  className={heightUnit === 'metric' ? 'active' : ''}
                  onClick={() => setHeightUnit('metric')}
                  aria-label="Switch to metric units"
                >
                  cm
                </button>
                <button
                  type="button"
                  className={heightUnit === 'imperial' ? 'active' : ''}
                  onClick={() => setHeightUnit('imperial')}
                  aria-label="Switch to imperial units"
                >
                  ft/in
                </button>
              </div>
              
              {heightUnit === 'metric' ? (
                <div className="input-wrapper">
                  <label htmlFor="height-cm">Height (cm)</label>
                  <input
                    id="height-cm"
                    type="number"
                    min="1"
                    max="300"
                    step="0.1"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    placeholder="e.g., 175"
                    aria-label="Enter height in centimeters"
                  />
                </div>
              ) : (
                <div className="input-row">
                  <div className="input-wrapper">
                    <label htmlFor="height-feet">Feet</label>
                    <input
                      id="height-feet"
                      type="number"
                      min="0"
                      max="10"
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(e.target.value)}
                      placeholder="5"
                      aria-label="Enter height in feet"
                    />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="height-inches">Inches</label>
                    <input
                      id="height-inches"
                      type="number"
                      min="0"
                      max="11"
                      step="0.1"
                      value={heightInches}
                      onChange={(e) => setHeightInches(e.target.value)}
                      placeholder="10"
                      aria-label="Enter height in inches"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="label">Weight</label>
              <div className="unit-toggle">
                <button
                  type="button"
                  className={weightUnit === 'metric' ? 'active' : ''}
                  onClick={() => setWeightUnit('metric')}
                  aria-label="Switch to metric units"
                >
                  kg
                </button>
                <button
                  type="button"
                  className={weightUnit === 'imperial' ? 'active' : ''}
                  onClick={() => setWeightUnit('imperial')}
                  aria-label="Switch to imperial units"
                >
                  lbs
                </button>
              </div>
              
              {weightUnit === 'metric' ? (
                <div className="input-wrapper">
                  <label htmlFor="weight-kg">Weight (kg)</label>
                  <input
                    id="weight-kg"
                    type="number"
                    min="1"
                    max="1000"
                    step="0.1"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    placeholder="e.g., 70"
                    aria-label="Enter weight in kilograms"
                  />
                </div>
              ) : (
                <div className="input-wrapper">
                  <label htmlFor="weight-lbs">Weight (lbs)</label>
                  <input
                    id="weight-lbs"
                    type="number"
                    min="1"
                    max="2200"
                    step="0.1"
                    value={weightLbs}
                    onChange={(e) => setWeightLbs(e.target.value)}
                    placeholder="e.g., 154"
                    aria-label="Enter weight in pounds"
                  />
                </div>
              )}
            </div>

            {bmiResult && (
              <section className="bmi-result" aria-live="polite" aria-atomic="true">
                <div className="bmi-value">{bmiResult.value.toFixed(1)}</div>
                <div className={`bmi-category ${bmiResult.colorClass}`}>
                  {bmiResult.category}
                </div>
                <p className="bmi-interpretation">{bmiResult.interpretation}</p>
              </section>
            )}
          </section>
        </article>

        <section className="card">
          <h2>Understanding BMI Categories</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#3b82f6' }}>•</span>
              <strong>Underweight:</strong> BMI less than 18.5
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#10b981' }}>•</span>
              <strong>Normal:</strong> BMI between 18.5 and 24.9
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#f59e0b' }}>•</span>
              <strong>Overweight:</strong> BMI between 25 and 29.9
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#ef4444' }}>•</span>
              <strong>Obese:</strong> BMI 30 or higher
            </li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: '1.7' }}>
            BMI (Body Mass Index) is a screening tool that estimates body fat based on height and weight. 
            While BMI is a useful indicator of healthy weight, it doesn&apos;t directly measure body fat 
            and may not be accurate for athletes, the elderly, or individuals with high muscle mass. 
            Always consult with a healthcare professional for personalized health advice.
          </p>
        </section>

        <section className="card faq-section">
          <h2>Frequently Asked Questions About BMI</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">What is BMI and how is it calculated?</h3>
            <p className="faq-answer">
              BMI (Body Mass Index) is a measure that uses your height and weight to estimate body fat. 
              The formula is: BMI = weight (kg) / height² (m²). For imperial units, weight in pounds 
              and height in inches is converted using the same formula: BMI = (weight in lbs × 703) / (height in inches)².
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Is BMI an accurate measure of health?</h3>
            <p className="faq-answer">
              BMI is a useful screening tool for identifying potential weight-related health risks, 
              but it&apos;s not a direct measure of body fat or overall health. It doesn&apos;t account for 
              muscle mass, bone density, or fat distribution. Athletes and individuals with high muscle 
              mass may have a higher BMI despite being healthy.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">What is a healthy BMI range?</h3>
            <p className="faq-answer">
              A healthy BMI typically falls between 18.5 and 24.9. This range is associated with the 
              lowest risk of weight-related health problems. However, individual health depends on many 
              factors beyond BMI, including diet, exercise, genetics, and medical history.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Can I use this BMI calculator for children?</h3>
            <p className="faq-answer">
              This calculator is designed for adults (18 years and older). BMI interpretation for 
              children and teenagers is different and requires age and sex-specific percentile charts. 
              Consult with a pediatrician for accurate BMI assessment for children.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">How often should I calculate my BMI?</h3>
            <p className="faq-answer">
              You can calculate your BMI whenever you want to track changes in your weight relative to 
              your height. However, BMI is just one indicator of health. Focus on maintaining a balanced 
              diet, regular exercise, and consult with healthcare professionals for comprehensive health 
              assessments.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">What should I do if my BMI is outside the normal range?</h3>
            <p className="faq-answer">
              If your BMI is outside the healthy range, consider consulting with a healthcare provider 
              or registered dietitian. They can help you develop a safe and effective plan to achieve 
              and maintain a healthy weight through lifestyle changes, including diet and exercise modifications.
            </p>
          </div>
        </section>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} BMI Calculator. Free online Body Mass Index calculator for health and wellness.
          </p>
        </footer>
      </main>
    </div>
  )
}

