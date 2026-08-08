import React from 'react';
import Card from './components/card.jsx';



const App = () => {
  return (
    <>
    <div className = "grid grid-cols-3 gap-4">
    <Card company = "Amazon" title = "Software Engineer" time = "5 days ago" type = "Full-time" level = "Mid-level" salary = "$120,000 " img = "public/download (1).png" />
    <Card company = "Apple" title = "Software Engineer" time = "5 days ago" type = "Full-time" level = "Mid-level" salary = "$120,000 " img = "public/download.png"/>
    <Card company = "Google" title = "Graphic Designer" time = "4 days ago" type = "part-time" level = "Mid-level" salary = "$10,000 " img = "public/download (2).png"/>
    <Card company = "Flipkart" title = "Software Engineer" time = "5 days ago" type = "Full-time" level = "Mid-level" salary = "$120,000 " img = "public/download.jpg"/>
    <Card company = "Netflix" title = "Software Engineer" time = "5 days ago" type = "Full-time" level = "Mid-level" salary = "$120,000 " img = "public/download (5).png"/>
    <Card company = "Microsoft" title = "Software Engineer" time = "5 days ago" type = "Full-time" level = "Mid-level" salary = "$120,000 " img = "public/download (4).png"/>
    </div>
    </>

  )
}

export default App
