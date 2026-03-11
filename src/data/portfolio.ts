import type {
  ExperienceItem, ProjectItem, SkillGroups,
  StatItem, HighlightItem, EducationItem,
} from '../types';

export const PERSONAL = {
  name:             'Krishna Gurram',
  title:            'Software Development Engineer II',
  company:          'Amazon',
  shortBio:         "I'm a software engineer at Amazon with 6+ years of experience designing and delivering high-impact distributed systems across Retail & Seller Services. I build the kind of systems that quietly power things at scale, and I take full ownership of them from design doc to production — I thrive at the intersection of complex systems and real-world impact.",
  email:            'krishnaa.gsk@gmail.com',
  phone:            '480.444.9645',
  linkedin:         'https://linkedin.com/in/krishna-gurram',
  location:         'Phoenix, AZ',
  resumeUrl:        '/resume.pdf',
  availableForWork: true,
};

export const TYPED_ROLES: string[] = [
  'Builds. Owns. Ships.',
  'Engineer. Owner. Leader.',
  'Turning Ideas to Production Code.',
];

export const HERO_STATS: StatItem[] = [
  { value: '5+',     label: 'Years at Amazon' },
  { value: '$1.5M+', label: 'Annual Savings Driven' },
  { value: '1M+',    label: 'Monthly ASINs Governed' },
  { value: '100K+',  label: 'Support Contacts Eliminated/yr' },
];

export const ABOUT_HIGHLIGHTS: HighlightItem[] = [
  { icon: '⚡', title: 'Distributed Systems',    description: 'Concurrent architectures and high-TPS pipelines designed from real traffic data. Designed to hold up under the worst-case load, not just the average' },
  { icon: '🤖', title: 'GenAI & RAG',            description: 'Production-grade LLM orchestration with AWS Bedrock, built to meet internal security standards and scaled for thousands of global associates.' },
  { icon: '🎯', title: 'Full-Stack Ownership',   description: 'End-to-end delivery across Java backends, React frontends, Backend-For-Frontend (BFF) layers, and cloud infrastructure using CDK.' },
  { icon: '🧭', title: 'Cross-Team Leadership',  description: 'Led cross-org initiatives as an away-team engineer, earning influence through technical credibility rather than formal authority.' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    company: 'Amazon', period: 'Jul 2023 — Present',
    role: 'Software Development Engineer II',
    team: 'Brand Registry', location: 'Tempe, AZ',
    isCurrent: true,
    bullets: [
      'Architected global seller eligibility workflows using Kotlin coroutines fan-out with semaphore-bounded concurrency, sized from p50/p99/p100 traffic data, serving 50,000+ global sellers reliably under tight latency constraints when the owning team lacked capacity.',
      'Drove GenAI RAG system (AWS Bedrock, Knowledge Bases) from intern prototype to production, implemented auth, privacy certifications, and full observability stack for thousands of global associates.',
      'Led as away-team tech lead on a 12-engineer cross-org initiative, drove standalone decoupled service architecture (AWS CDK, Kotlin), introduced sprint planning improvements adopted org-wide, and delivered a platform governing 1M+ monthly ASIN creations on time.',
      'Traced 100,000+ annual associate contacts to a single UX gap — independently scoped, designed, and shipped a Backend-For-Frontend API & React UI fix that eliminated the entire contact category through self-serve pipeline visibility.',
      'Mentored a summer intern end-to-end on trademark validation automation — reduced lookup time from 60+ minutes to under 5 minutes, intern received full-time offer.',
    ],
    technologies: ['Java', 'Kotlin', 'AWS Bedrock', 'React', 'AWS CDK', 'DynamoDB', 'RAG', 'AWS Knowledge Base'],
  },
  {
    id: 2,
    company: 'Amazon', period: 'Feb 2021 — Jun 2023',
    role: 'Software Development Engineer I',
    team: 'Brand Registry', location: 'Tempe, AZ',
    bullets: [
      'Promoted to SDE II ahead of cycle on demonstrated ownership and scope of impact.',
      'Drove $1–1.5M in annual savings as sole engineer on Brand Authorization Automation — identified the problem, authored and defended a design before 10+ engineers including 2 senior engineers and shipped a two-portal workflow reducing turnaround from 1–1.5 weeks to under 1 day with zero ongoing associate involvement',
      'Designed and shipped backend validation services and registration pipelines (Java, Spring Boot) supporting high-volume brand enrollment and trademark protection workflows across multiple global regions, improved data correctness and reduced manual case handling across production systems.',
      'Built internal React dashboards and REST APIs to streamline operational review workflows for production teams, improved processing throughput and reduced error rates across brand compliance pipelines.'
    ],
    technologies: ['Java', 'Spring Boot', 'React Typescript', 'AWS', 'DynamoDB', 'Step Functions', 'CDK'],
  },
  {
    id: 3,
    company: 'Amazon', period: 'May 2020 — Aug 2020',
    role: 'Software Development Engineer Intern',
    team: 'Brand Registry', location: 'Tempe, AZ',
    bullets: [
      'Designed and built a brand application management portal end-to-end (Java Spring Boot APIs + React), enabling brand owners to track submitted, in-progress, and declined applications for the first time — each a multi-page, multi-hour enrollment form. Added copy and resume-draft functionality to eliminate redundant re-entry across applications, reducing application-status associate tickets to near zero',
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'AWS'],
  },
  {
    id: 4,
    company: 'Tata Consultancy Services', period: 'Jul 2017 — Nov 2018',
    role: 'Software Developer',
    team: 'Banking Systems', location: 'Chennai, India',
    bullets: [
      'Delivered full-stack banking workflow systems for fraud detection and enterprise operations, awarded Kudos Award for top technical performance among 120 engineers.',
    ],
    technologies: ['Java', 'Full-Stack', 'Banking Systems'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1, icon: 'brain', tag: 'GenAI · AWS Bedrock',
    title: 'RAG Chatbot for Internal Associates',
    description: 'Took intern-built RAG prototype to production. Implemented internal auth, privacy certifications, and full observability. Associates resolve SOP queries in seconds instead of searching for hours.',
    impact: 'Launch-ready for thousands of global associates',
    metrics: [{ value: '< 5 min', label: 'vs 60+ min of associate turn around time' }],
    stack: ['AWS Bedrock', 'RAG', 'Typescript', 'CDK'],
  },
  {
    id: 2, icon: 'globe', tag: 'Distributed Systems · Kotlin',
    title: 'Global Seller Eligibility',
    description: 'Architected fan-out eligibility workflows as an away-team engineer. Analyzed p50/p99/p100 traffic profiles to design Kotlin coroutines fan-out with semaphore-bounded concurrency.',
    impact: 'Unblocked launch for 50,000+ global sellers',
    metrics: [{ value: '50K+', label: 'Global sellers served' }],
    stack: ['Kotlin', 'Coroutines', 'Semaphores', 'Java'],
  },
  {
    id: 3, icon: 'shield', tag: 'Marketplace · Full-Stack',
    title: 'Brand Authorization Automation',
    description: 'Sole engineer on complete automation of brand–seller authorization. Two-portal workflow with automated merchant verification, eliminating weeks of manual associate processing.',
    impact: 'Saved $1–1.5M annually, weeks → under 1 day',
    metrics: [{ value: '$1.5M', label: 'Annual savings' }, { value: '<1 day', label: 'vs 1–2 weeks of processing time' }],
    stack: ['Java', 'Spring Boot', 'React', 'Typescript'],
  },
  {
    id: 4, icon: 'layers', tag: 'Platform · Away Team Lead',
    title: 'ASIN–Brand Integrity Platform',
    description: 'Embedded as away-team lead on a 12-engineer initiative. Drove standalone decoupled architecture, introduced sprint planning improvements adopted org-wide, and enabled on-time launch.',
    impact: 'Governing 1M+ monthly ASIN creations',
    metrics: [{ value: '1M+', label: 'Monthly ASINs governed' }],
    stack: ['AWS CDK', 'Kotlin', 'React', 'Microservices'],
  },
  {
    id: 5, icon: 'activity', tag: 'UX · Backend-For-Frontend Architecture',
    title: 'Seller Status Platform',
    description: 'Revamped seller application tracking with granular sub-stage visibility and actionable rejection details across a multi-team review pipeline.',
    impact: 'Eliminated 100,000+ annual associate contacts',
    metrics: [{ value: '100K+', label: 'Annual contacts eliminated' }],
    stack: ['Java', 'BFF Pattern', 'React', 'REST APIs'],
  },
  {
    id: 6, icon: 'search', tag: 'Mentorship · Automation',
    title: 'Trademark Lookup Automation',
    description: 'Mentored intern end-to-end, identified dependent services, reviewed design pre-formally, daily unblocking and code reviews. Single unified API replaced a manual multi-site lookup process.',
    impact: 'Reduced validation from 60+ min to under 5 min',
    metrics: [{ value: 'FTE', label: 'Return offer' }, { value: '5 min', label: 'vs 60+ min before of associate work' }],
    stack: ['Java', 'Spring Boot', 'React', 'Internal APIs'],
  },
];

export const SKILL_GROUPS: SkillGroups = {
  languages: { label: 'Languages',              items: ['Java', 'Kotlin', 'Python', 'TypeScript', 'JavaScript', 'SQL'],                                                                             primary: ['Java', 'Kotlin'] },
  cloudAI:   { label: 'Cloud & AI/ML',          items: ['AWS Bedrock', 'RAG / LLM', 'CDK', 'DynamoDB', 'ECS / Fargate', 'Lambda', 'Step Functions', 'Athena', ],                                    primary: ['AWS Bedrock', 'RAG / LLM', 'CDK', 'DynamoDB'] },
  backend:   { label: 'Backend & Architecture', items: ['Distributed Systems', 'Spring Boot', 'Microservices', 'REST APIs', 'Coroutines', 'Event-Driven Arch', 'BFF Pattern'],                     primary: ['Distributed Systems', 'Spring Boot'] },
  frontend:  { label: 'Frontend',               items: ['React Typescript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],                                                                          primary: ['React Typescript', 'HTML5', 'CSS3'] },
  tools:     { label: 'Tools & Observability',  items: ['CloudWatch', 'Docker', 'Git', 'Postman', 'IntelliJ', 'SNS / SQS'] },
  practices: { label: 'Practices',              items: ['Design Docs', 'Code Review', 'Mentorship', 'Away-Team Lead', 'FAST/FEAST Testing', 'Agile / Scrum'] },
};

export const EDUCATION: EducationItem[] = [
  { id: 1, degree: 'Master of Science',    field: 'Software Engineering',   school: 'Arizona State University',            location: 'Tempe, AZ',           period: 'Dec 2020', gpa: '3.67' },
  { id: 2, degree: 'Bachelor of Technology', field: 'Information Technology', school: 'VR Siddhartha Engineering College', location: 'Vijayawada, India',   period: 'Apr 2017', gpa: '8.92 / 10' },
];

export const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];
