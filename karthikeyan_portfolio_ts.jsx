import React from "react";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-green-700 text-white py-10 text-center">
        <img
          src="/your-photo.jpg"
          alt="Karthikeyan T"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-3xl font-bold">Karthikeyan T</h1>
        <p className="text-lg">System Operator & MBA Student</p>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>📞 +91 7904453725</p>
          <p>
            ✉️{' '}
            <a href="mailto:karthitamil2004@gmail.com" className="text-blue-600">
              karthitamil2004@gmail.com
            </a>
          </p>
          <p>
            🔗{' '}
            <a
              href="https://www.linkedin.com/in/karthi-2k2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              LinkedIn Profile
            </a>
          </p>
          <p>🏠 Madurai - 625002, India</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Objective</h2>
          <p>
            To fully utilize my skills for the success of the organization and grow with it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <ul className="list-disc pl-6">
            <li>MBA – Kalasalingam Business School (Present)</li>
            <li>
              B.Com (Computer Application) – Nadar Mahajana Sangam College (2024, 68%)
            </li>
            <li>HSC – Mangayarkarasi Hr. Sec. School (2021, 79.49%)</li>
            <li>SSLC – Mangayarkarasi Hr. Sec. School (2019, 69.6%)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc pl-6">
            <li>MS Office (Word, Excel, PowerPoint, Access)</li>
            <li>Database Management (MySQL, MS Access)</li>
            <li>Basic HTML</li>
            <li>Basic Computer Knowledge</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Certificates</h2>
          <ul className="list-disc pl-6">
            <li>AIMA Business Simulation Game</li>
            <li>NISM Investor Certificate</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <p>
            <strong>Commerce Oriented:</strong> Study on Consumer buying behavior towards
            Electric Fans in Madurai City
          </p>
          <p>
            <strong>Computer Oriented (Group):</strong> Gift Shop Management System
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
          <p>
            <strong>Laxmi Cargo Pvt Ltd</strong> – System Operator & GST Billing Executive
          </p>
          <p><em>June 2024 - July 2024</em></p>
          <ul className="list-disc pl-6">
            <li>Managed cargo logistics and daily operations</li>
            <li>Generated and consolidated GST bills</li>
            <li>Maintained transaction records and supported monthly tax filings</li>
            <li>Assisted in coordination between departments</li>
          </ul>
        </section>
      </main>

      <footer className="bg-green-700 text-white text-center py-4">
        <p>© 2025 Karthikeyan T. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
