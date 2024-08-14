import profile from '$lib/images/profile.webp';
import { Github, Mail, FileText, Linkedin, Twitch, Youtube, X } from 'lucide-svelte';

export const profilePicture = profile;

export const Name = 'Aarsh Padia';

export const Location = 'Rajkot , Gujarat';

export const Profession = 'Web Developer and OSS Contributor';

export const Bio = `I'm a 20 y/o cs undergrad student. I love building things , playing games and ricing my Arch
	Linux. I enjoy web development and i live on the terminal. If I'm not coding, I'm probably losing
	my mind in valorant or watching anime.`;

export const Work = [
	{
		link: 'https://dcycle.design/',
		position: 'Web Development Intern',
		company: 'Dcycle Design Studio',
		start_date: '06/2023',
		end_date: '08/2023',
		responsibilities: [
			'Elevated organizational productivity by designing and implementing HTML/CSS templates for webpages.',
			'Optimized user experience through enhancements in the visual appeal and functionality of web content.',
			'Streamlined development processes, contributing to a 50% increase in efficiency for the design team.'
		]
	}
];

export const Projects = [
	{
		project: 'Chat-App',
		details: [
			'Gained expertise in building full-stack applications using Next.js 14, enhancing understanding of server-side rendering and modern front-end development practices.',
			'Developed strong skills in database management and optimization by integrating Neon DB with Prisma, learning to efficiently handle complex queries and data relationships.',
			'Mastered the implementation of real-time communication features using LiveKit, improving knowledge of socket connections and real-time data synchronization.',
			'Implemented secure authentication and authorization using Clerk, reinforcing understanding of user identity management and application security.'
		],
		link: 'https://discord-clone-production-cc9a.up.railway.app/invite/e8e71148-aba9-42d2-99d5-8ab8c28acdc9'
	},
	{
		project: 'Article Digester',
		details: [
			'Article Digester is a web application that allows users to summarize articles by providing the summarized text from the URL.',
			'Utilizes Redux Toolkit, Vite with React, and Tailwind CSS to deliver a seamless and intuitive user experience.',
			'Utilized Rapid API to seamlessly process and extract relevant information from articles, showcasing proficiency in integrating external services to enhance content digestion on a professional platform.'
		],
		link: 'https://articledigester.netlify.app/'
	},
	{
		project: 'Slime-Link',
		details: [
			'Created Slime Link, an open-source alternative to Tree Link, using Svelte for dynamic user interfaces and Firebase for efficient backend management.',
			'Focused on responsive design, ensuring seamless usability across devices and enhancing user accessibility for efficient link management.'
		],
		link: 'https://slime-link.vercel.app/'
	}
];

export const Links = [
	{
		name: 'GitHub',
		url: 'https://github.com/aarsh21',
		icon: Github
	},
	{
		name: 'Email',
		url: 'mailto:aarshpersonal21@gmail.com',
		icon: Mail
	},
	{
		name: 'X',
		url: 'https://x.com/bukubukufps',
		icon: X
	},
	{
		name: 'Resume',
		url: 'https://drive.google.com/uc?export=download&id=11OOFNEjwML-2tdqofzNmMlmquTaYNOaY',
		icon: FileText
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/aarshpadia21/',
		icon: Linkedin
	},
	{
		name: 'Twitch',
		url: 'https://www.twitch.tv/weel3fps',
		icon: Twitch
	},
	{
		name: 'YouTube',
		url: 'https://www.youtube.com/bukubukufps',
		icon: Youtube
	}
];
