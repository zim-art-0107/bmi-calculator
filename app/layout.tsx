import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'BMI Calculator - Free Body Mass Index Calculator Online | Calculate Your BMI',
  description: 'Free BMI calculator to calculate your Body Mass Index. Get instant BMI results with category classification (Underweight, Normal, Overweight, Obese) and health insights. Supports metric (kg, cm) and imperial (lbs, feet/inches) units.',
  keywords: 'BMI calculator, body mass index calculator, calculate BMI online, BMI calculator free, BMI chart, BMI formula, health calculator, weight calculator',
  authors: [{ name: 'BMI Calculator' }],
  openGraph: {
    title: 'BMI Calculator - Free Body Mass Index Calculator Online',
    description: 'Calculate your BMI instantly with our free online BMI calculator. Get accurate Body Mass Index results with health category and insights.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is BMI and how is it calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI (Body Mass Index) is a measure that uses your height and weight to estimate body fat. The formula is: BMI = weight (kg) / height² (m²). For imperial units, weight in pounds and height in inches is converted using the same formula: BMI = (weight in lbs × 703) / (height in inches)².',
      },
    },
    {
      '@type': 'Question',
      name: 'Is BMI an accurate measure of health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI is a useful screening tool for identifying potential weight-related health risks, but it\'s not a direct measure of body fat or overall health. It doesn\'t account for muscle mass, bone density, or fat distribution. Athletes and individuals with high muscle mass may have a higher BMI despite being healthy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a healthy BMI range?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A healthy BMI typically falls between 18.5 and 24.9. This range is associated with the lowest risk of weight-related health problems. However, individual health depends on many factors beyond BMI, including diet, exercise, genetics, and medical history.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this BMI calculator for children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This calculator is designed for adults (18 years and older). BMI interpretation for children and teenagers is different and requires age and sex-specific percentile charts. Consult with a pediatrician for accurate BMI assessment for children.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I calculate my BMI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can calculate your BMI whenever you want to track changes in your weight relative to your height. However, BMI is just one indicator of health. Focus on maintaining a balanced diet, regular exercise, and consult with healthcare professionals for comprehensive health assessments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if my BMI is outside the normal range?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your BMI is outside the healthy range, consider consulting with a healthcare provider or registered dietitian. They can help you develop a safe and effective plan to achieve and maintain a healthy weight through lifestyle changes, including diet and exercise modifications.',
      },
    },
  ]
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.yoursite.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

