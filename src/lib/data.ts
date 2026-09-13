import type { Project, Skill, Experience, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 'personal-brand',
    title: 'Personal Brand Website',
    description: 'High-end personal portfolio website showcasing professional skills, projects, and achievements with elegant animations and interactions.',
    image: '/images/project-brand.jpg',
    tech: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://www.adedotun.online',
    githubUrl: 'https://github.com/Babatundeadedotun',
  },
   {
    id: 'zera-xii',
    title: 'ZÉRA-XII Store',
    description: 'Luxury e-commerce experience featuring premium fashion products. Minimalist design with seamless checkout integration and responsive product galleries.',
    image: '/images/project-zera.jpg',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS', 'Prisma'],
    liveUrl: 'https://www.zeraxii.store',
    githubUrl: 'https://github.com/Babatundeadedotun',
  },
  {
    id: 'aplisense',
    title: 'ApliSense - AI Resume Analysis & Skill Matching Platform',
    description: 'An AI-driven platform that analyzes CVs and academic documents to match users with suitable job roles and recommend study abroad courses based on skills, experience, and profile insights.',
    image: '/images/aplisense-image.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'PDF.js'],
    liveUrl: 'https://www.aplisense.online',
    githubUrl: 'https://github.com/Babatundeadedotun',
  },
  {
    id: 'investor-dashboard',
    title: 'Investor Dashboard',
    description: 'A comprehensive real-time financial analytics platform with portfolio tracking, stock charts, and investment insights. Built with React and D3.js for data visualization.',
    image: '/images/project-dashboard.jpg',
    tech: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://encryptcap.netlify.app/',
    githubUrl: 'https://github.com/Babatundeadedotun',
  },
  {
    id: 'dna-networking',
    title: 'DNA: Networking Playbook',
    description: 'Gamified CCNA exam preparation mobile application featuring interactive labs, practice questions, and network simulation environments for hands-on learning.',
    image: '/images/project-dna.png',
    tech: ['React', 'Node.js', 'Packet Tracer', 'GNS3', 'Cisco'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Babatundeadedotun',
  },
  {
    id: 'cybersec-lab',
    title: 'CyberSecurity Lab',
    description: 'Interactive cybersecurity training platform with vulnerability simulations, network scanning tools, and security assessment modules.',
    image: '/images/project-cyber.jpg',
    tech: ['Python', 'React', 'Kali Linux', 'Nmap', 'Docker'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Babatundeadedotun',
  },
  // {
  //   id: 'admin-panel',
  //   title: 'Admin Panel System',
  //   description: 'Enterprise-grade admin dashboard with user management, analytics, role-based access control, and comprehensive reporting features.',
  //   image: '/images/project-admin.jpg',
  //   tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'PostgreSQL'],
  //   liveUrl: '#',
  //   githubUrl: 'https://github.com/Babatundeadedotun',
  // },
];

export const skills: Skill[] = [
  // Networking & Routing
  { name: 'Cisco IOS', icon: 'cisco', category: 'networking' },
  { name: 'Routing & Switching', icon: 'router', category: 'networking' },
  { name: 'CCNA (ITN, SRWE)', icon: 'cisco', category: 'networking' },
  { name: 'Packet Tracer Lab', icon: 'packet-tracer', category: 'networking' },
  { name: 'GNS3', icon: 'gns3', category: 'networking' },
  { name: 'EVE-NG', icon: 'eve-ng', category: 'networking' },
  
  // Network Security
  { name: 'Network Security', icon: 'lock', category: 'security' },
  { name: 'Linux', icon: 'linux', category: 'security' },
  { name: 'Kali Linux', icon: 'kali', category: 'security' },
  { name: 'Nmap', icon: 'nmap', category: 'security' },
  { name: 'CCTV Installation', icon: 'cctv', category: 'security' },
  { name: 'Wireshark', icon: 'wireshark', category: 'security' },
  
  // Frontend
  { name: 'React', icon: 'react', category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', category: 'frontend' },
  { name: 'HTML5', icon: 'html5', category: 'frontend' },
  { name: 'CSS3', icon: 'css3', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'nodejs', category: 'backend' },
  { name: 'Express.js', icon: 'express', category: 'backend' },
  { name: 'PHP', icon: 'php', category: 'backend' },
  { name: 'Python', icon: 'python', category: 'backend' },
  { name: 'MongoDB', icon: 'mongodb', category: 'backend' },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'backend' },
  
  // Tools
  { name: 'Git', icon: 'git', category: 'tools' },
  { name: 'GitHub', icon: 'github', category: 'tools' },
  { name: 'VS Code', icon: 'vscode', category: 'tools' },
  { name: 'Docker', icon: 'docker', category: 'tools' },
];

export const experiences: Experience[] = [
  {
    id: 'encrypt-capital-new',
    title: 'Portfolio Manager & Head of Data and Security HODS',
    company: 'ENCRYPT CAPITAL',
    period: '2026 - Present',
    description: 'Managing investment portfolios and leading data security operations. Overseeing fund management strategies and cybersecurity infrastructure for fintech operations.',
  },
  {
    id: 'encrypt-capital',
    title: 'Portfolio Manager & Head of Media',
    company: 'ENCRYPT CAPITAL',
    period: '2023 - August 2026',
    description: 'Managed investment portfolios and directed media communications. Developed creative problem-solving and fund management expertise while building secure financial systems.',
  },
  {
    id: 'education-msc',
    title: 'MSc Cybersecurity',
    company: 'University of Sunderland',
    period: '2026 - Present',
    description: 'Pursuing postgraduate degree with specialization in Network Security and Secure Software Development.',
  },
  {
    id: 'cisco',
    title: 'Network & Cybersecurity',
    company: 'Cisco Networking Academy',
    period: '2025 - Present',
    description: 'Professional training in network fundamentals and CCNA preparation. Completed ITN phase, currently pursuing SRWE (Switching, Routing, and WAN Essentials).',
  },
  {
    id: 'education-beng',
    title: 'B.Eng Computer Engineering',
    company: 'Federal University Oye Ekiti, Nigeria',
    period: '2018 - 2024',
    description: 'Foundational studies in computer engineering with focus on systems design, networking, and hardware infrastructure.',
  },
];

export const personalInfo = {
  name: 'Adedotun Babatunde Ayomide',
  fullName: 'Adedotun Babatunde Ayomide',
  title: 'Network Engineer | Network Security Engineer | Full-Stack Developer',
  subtitle: 'Cisco Networking Academy & University of Sunderland',
  tagline: 'Building Secure, Scalable and Intelligent Digital Systems',
  location: 'Nigeria',
  email: 'adedotunbabatunde94@gmail.com',
  linkedin: 'https://linkedin.com/in/babatunde-adedotun',
  github: 'https://github.com/Babatundeadedotun',
  twitter: 'https://twitter.com/darpro_dev',
  instagram: 'https://www.instagram.com/iamadedotun',
  youtube: 'https://www.youtube.com/@adedotunbabatunde2680',
  threads: 'https://www.threads.com/@iamadedotun',
  company: 'ENCRYPT CAPITAL',
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '25+' },
    { label: 'Certifications', value: '5+' },
  ],
};
