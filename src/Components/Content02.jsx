import React from 'react';

const Content02 = () => {
  const skills = {
    frontend: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'Tailwind', icon: '🎨' },
      { name: 'Bootstrap', icon: '📐' },
      { name: 'React', icon: '⚛️' },
      { name: 'Angular', icon: '🅰️' }
    ],
    backend: [
      { name: 'Node.js', icon: '📦' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'Java', icon: '☕' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'PHP', icon: '🐘' },
      { name: 'Python', icon: '🐍' }
    ],
    databases: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'SQL Server', icon: '💾' },
      { name: 'MySQL', icon: '🐬' }
    ],
    mobile: [
      { name: 'Android Studio', icon: '📱' },
      { name: 'Firebase', icon: '🔥' }
    ],
    OtherTools: [
        { name: 'Github', icon: '📂' },
        { name: 'Figma', icon: '🖌️' }
      ]
  };

  const CategoryCard = ({ title, items, icon }) => (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <span className="text-xl">{skill.icon}</span>
            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800  mb-20 text-center">
          Professional Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryCard
            title="Frontend Development"
            items={skills.frontend}
            icon="🎨"
          />
          <CategoryCard
            title="Backend Development"
            items={skills.backend}
            icon="⚙️"
          />
          <CategoryCard
            title="Database Management"
            items={skills.databases}
            icon="🗄️"
          />
          <CategoryCard
            title="Mobile Development"
            items={skills.mobile}
            icon="📱"
          />
        <CategoryCard
            title="Other Tools"
            items={skills.OtherTools}
            icon="🛠️"
          />
        </div>
      </div>
    </div>
  );
};

export default Content02;