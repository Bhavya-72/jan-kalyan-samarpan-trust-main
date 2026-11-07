import {
  BookOpen, HeartPulse, Recycle, Droplets, HandHeart, GraduationCap,
  Sprout, Users, Home, BriefcaseBusiness
} from 'lucide-react'

import Dinesh from '../assets/dinesh.jpeg';
import Shalender from '../assets/shalendra.png';
import Vikas from '../assets/vikas.png';

import education from '../assets/education.png';
import healthcare from '../assets/healthcare.jpeg';
import sanitation from '../assets/sanitation.png';
import water from '../assets/water.png';
import pollution from '../assets/pollution.png';
import skills from '../assets/skills.png';
import community from '../assets/community.png';
import charity from '../assets/charity.png';
import childwelfare from '../assets/child welfare.png';



export const trust = {
  name: 'Jan Kalyan Samarpan Trust',
  hindiName: 'जन कल्याण समर्पण ट्रस्ट',
  tagline: 'सेवा से संस्कार और समर्पण से समाज निर्माण',
  address: 'Khasra No. 193/23, Main Delhi Road, Bawana, Delhi – 110039',
  phone: '9810402200', // Add the official public contact number before launch.
  email: 'jankalyansamarpantrust@gmail.com', // Add the official public email address before launch.
  settlor: [
    { name: 'Shri Shalender Singh', role: 'Settlor', image: Shalender }
  ],
  trustees: [
    {name: 'Shri Vikas Yadav', role: 'Trustee',image: Vikas},
    { name: 'Shri Dinesh Singh', role: 'Trustee', image: Dinesh }
  ],
  establishmentYear: '2026'
}

// These are focus areas derived from the trust deed's stated aims and objects.
// They should not be read as confirmation that every programme is currently running.
export const focusAreas = [
  {
    image: education,
    title: 'Education & scholarships',
    description: 'Supporting access to quality education for children, students and underserved communities. Promoting schools, libraries, reading rooms and other learning facilities. Providing educational assistance, scholarships and learning resources to deserving students. Encouraging equal opportunities for education and lifelong learning.'
  },
  {
    image: healthcare,
    title: 'Healthcare & medical assistance',
    description: 'Promoting accessible healthcare and medical assistance for individuals and communities in need. Supporting hospitals, dispensaries, medical institutions and healthcare facilities. Encouraging health awareness, disease prevention and access to reliable medical information. Contributing towards better healthcare services and overall community wellbeing.'
  },
  {
    image: sanitation,
    title: 'Cleanliness & sanitation',
    description: 'Encouraging clean, hygienic and healthy surroundings in both rural and urban communities. Promoting public awareness about sanitation, personal hygiene and responsible waste management. Supporting cleanliness drives, waste collection and proper disposal initiatives. Working towards healthier neighbourhoods and a cleaner environment for future generations.'
  },
  {
    image: water,
    title: 'Water conservation',
    description: 'Promoting the responsible use and conservation of water resources for future generations. Encouraging awareness about water preservation and sustainable water management practices. Supporting the cleanliness, maintenance and upkeep of tanks, wells and other water bodies. Inspiring communities to protect water resources and reduce unnecessary wastage.'
  },
  {
    image: charity,
    title: 'Support for those in need',
    description: 'Extending charitable assistance to economically weaker and underprivileged sections of society. Supporting deserving individuals and families facing financial or social difficulties. Encouraging humanitarian initiatives that promote dignity, equality and social inclusion. Providing assistance without discrimination based on caste, religion, gender or background.'
  },
  {
    image: skills,
    title: 'Skills & vocational learning',
    description: 'Encouraging skill development and vocational education to create better livelihood opportunities. Supporting technical, industrial, commercial and professional learning initiatives. Promoting practical training that helps individuals develop knowledge and employment-related skills. Empowering people to become self-reliant and contribute positively to society.'
  },
  {
    image: pollution,
    title: 'Environment & pollution control',
    description: 'Promoting environmental protection and awareness about sustainable living practices. Encouraging initiatives that help prevent pollution and conserve natural resources. Supporting responsible environmental practices and community participation in conservation efforts. Working towards cleaner surroundings and a healthier, greener future for all.'
  },
  {
    image: community,
    title: 'Community welfare facilities',
    description: 'Supporting the development and maintenance of facilities that serve the wider community. Encouraging public-benefit institutions such as dharamshalas and community spaces. Promoting access to useful facilities that support social welfare and collective wellbeing. Contributing towards inclusive spaces that benefit individuals and communities.'
  },
  {
    image: childwelfare,
    title: 'Child & women welfare',
    description: 'Promoting the welfare, development and empowerment of women and children. Supporting charitable initiatives that improve access to essential services and opportunities. Encouraging awareness about education, wellbeing, rights and social development. Working towards a safer, more inclusive and supportive environment for women and children.'
  }
]
