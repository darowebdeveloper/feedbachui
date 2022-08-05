import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className="text-left">
        <h1>Abou This Project</h1>
        <p>This is a react app to leave feedback for a product or servicee</p>
        <p>Version: 1.0.0</p>
        <Link
          className="mt-5 flex items-center justify-center font-bold underline"
          to={'/'}
        >
          <FaArrowLeft className="text-sm mr-1" />
          <span className="text-lg">Back</span>
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
