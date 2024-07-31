---
title: How do I use this template ?
description: In this world it is important to have a portfolio and a blog whether you're student , working employee or retired superhuman.
date: '2024-07-30'
categories:
  - template
  - Open Source
  - svelte
published: true
---

## Why build this template? **(Inspiration)**

I wanted to build a portfolio website for me and my friends so that everyone can start writing blogs show their skills online . As a **computer science** student it should be shameful that I am in my last year of college still I didn't have my own portfolio.

## To use this template:

[Clone this repo](https://github.com/aarsh21/aarsh-xyz) , Then I would like you to go to the cloned repo folder on your system and remove **.git** folder from it . So that it will remove all the information about my commits and logs of my GitHub account.Then I would like you to initialise your own git repository.

```bash
# only for Linux and Mac
git clone https://github.com/aarsh21/catpuccin-folio portfolio
cd portfolio
rm -rf .git
git init .
```

Open the downloaded repo in whatever code editor you're use.

```bash
nvim .
# or
code .
# or
zed .
```

- Entire template renders text dynamically from one typescript file . The only thing you need to do is change that file and then your own portfolio will be ready.

- Then I would like you to search for [<ins> src/lib/profileDetails.ts</ins>](https://github.com/aarsh21/catppuccin-folio/blob/main/src/lib/profileDetails.ts) .
- Then fill it with your details , If you don't know **Javascript/Typescript** I recommend using [Claude](https://claude.ai/new) .

- To add your custom-link icons you need to checkout [lucide-icons](https://lucide.dev/) .

- For example :

```typescript
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

import { Github, Mail, FileText, Linkedin, Twitch, Youtube } from 'lucide-svelte';

export const Links = [
	{
		name: 'GitHub',
		url: 'https://github.com/aarsh21',
		icon: Github
	},
	{
		name: 'Email',
		url: 'mailto:padiaaarsh@gmail.com',
		icon: Mail
	},
	{
		name: 'Resume',
		url: 'https://your-resume-link.com',
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
		url: 'https://www.youtube.com/weel3fps',
		icon: Youtube
	}
];
```

After you're done editing you might think how do I change profile picture to my own. The easiest way to do is to replace image in with the same filename and Extention in [_src/lib/image/profile.png_](https://github.com/aarsh21/catppuccin-folio/blob/main/src/lib/images/profile.png)
