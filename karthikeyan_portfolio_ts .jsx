import React from "react";
import './App.css';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const App: React.FC = () => {
  return (
    <motion.div initial="initial" animate="animate" className="min-h-screen bg-gradient-to-br from-green-100 to-white text-gray-800">
      <header className="bg-green-700 text-white py-10 text-center shadow-lg">
        <motion.img
          src="/your-photo.jpg"
          alt="Karthikeyan T"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.h1 className="text-4xl font-extrabold tracking-wide" variants={fadeInUp}>
          Karthikeyan T
        </motion.h1>
        <motion.p className="text-xl mt-2" variants={fadeInUp}>
          System Operator & MBA Student
        </motion.p>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {[
          {
            title: "Contact",
            content: (
              <>
                <p>📞 +91 7904453725</p>
                <p>✉️ <a href="mailto:karthitamil2004@gmail.com" className="text-blue-600">karthitamil2004@gmail.com</a></p>
                <p>🔗 <a href="https://www.linkedin.com/in/karthi-2k2004" target="_blank" rel="noopener noreferrer" className="text-blue-600">LinkedIn Profile</a></p>
                <p>🏠 Madurai - 625002, India</p>
              </>
            )
          },
          {
            title: "Objective",
            content: <p>To fully utilize my skills for the success of the organization and grow with it.</p>
          },
          {
            title: "Education",
            content: (
              <ul className="list-disc pl-6">
                <li>MBA – Kalasalingam Business School (Present)</li>
                <li>B.Com (Computer Application) – Nadar Mahajana Sangam College (2024, 68%)</li>
                <li>HSC – Mangayarkarasi Hr. Sec. School (2021, 79.49%)</li>
                <li>SSLC – Mangayarkarasi Hr. Sec. School (2019, 69.6%)</li>
              </ul>
            )
          },
          {
            title: "Skills",
            content: (
              <ul className="list-disc pl-6">
                <li>MS Office (Word, Excel, PowerPoint, Access)</li>
                <li>Database Management (MySQL, MS Access)</li>
                <li>Basic HTML</li>
                <li>Basic Computer Knowledge</li>
              </ul>
            )
          },
          {
            title: "Certificates",
            content: (
              <ul className="list-disc pl-6">
                <li>AIMA Business Simulation Game</li>
                <li>NISM Investor Certificate</li>
              </ul>
            )
          },
          {
            title: "Projects",
            content: (
              <>
                <p><strong>Commerce Oriented:</strong> Study on Consumer buying behavior towards Electric Fans in Madurai City</p>
                <p><strong>Computer Oriented (Group):</strong> Gift Shop Management System</p>
              </>
            )
          },
          {
            title: "Work Experience",
            content: (
              <>
                <p><strong>Laxmi Cargo Pvt Ltd</strong> – System Operator & GST Billing Executive</p>
                <p><em>June 2024 - July 2024</em></p>
                <ul className="list-disc pl-6">
                  <li>Managed cargo logistics and daily operations</li>
                  <li>Generated and consolidated GST bills</li>
                  <li>Maintained transaction records and supported monthly tax filings</li>
                  <li>Assisted in coordination between departments</li>
                </ul>
              </>
            )
          }
        ].map(({ title, content }) => (
          <motion.section className="mb-8 bg-white rounded-xl p-6 shadow-md" variants={fadeInUp}>
            <h2 className="text-xl font-semibold mb-2 text-green-800">{title}</h2>
            {content}
          </motion.section>
        ))}
      </main>

      <footer className="bg-green-700 text-white text-center py-4 shadow-inner">
        <p>© 2025 Karthikeyan T. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default App;
