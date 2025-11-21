 
 interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  highlights: string[];
}
export const education: EducationItem[] = [
  {
  degree: 'Bachelor of Computer Applications',
  institution: 'ISS Arts and Science College',
  location: 'Kerala',
  duration: '2022 - 2025',
  highlights: [
    'Studied core computer and web development concepts',
    'Built small full-stack projects',
    'Focused on practical software skills'
  ]
},
{
  degree: 'MERN Stack Development',
  institution: 'Zoople Technologies',
  location: 'Kochi',
  duration: '2025',
  highlights: [
    'Trained in MongoDB, Express, React, and Node.js',
    'Worked on full stack projects during training',
    'Improved hands-on development skills'
  ]
}

  ];
