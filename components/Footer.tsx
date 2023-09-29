import Link from 'next/link';
import React from 'react';
import { GoRepo } from 'react-icons/go';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import { SlGlobe } from 'react-icons/sl';

const Footer = () => {
	return (
		<footer className="flex justify-center items-center h-16">
			<Link
				href="https://k8pai.dev"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-5"
			>
				<SlGlobe
					className={`p-3 box-content text-lg transition-all transform hover:scale-105 hover:fill-[#2BEDA7]`}
				/>
			</Link>
			<div className="w-px h-6 bg-gray-400"></div>
			<Link
				href="https://github.com/k8pai"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-5"
			>
				<SiGithub
					className={`p-3 box-content text-lg transition-all transform hover:scale-105 hover:fill-[#e8e8e7]`}
				/>
			</Link>
			<div className="w-px h-6 bg-gray-400"></div>
			<Link
				href="https://linkedin.com/in/k8pai"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-5"
			>
				<SiLinkedin
					className={`p-3 box-content text-lg transition-all transform hover:scale-105 hover:fill-[#0A66C2]`}
				/>
			</Link>
			<div className="w-px h-6 bg-gray-400"></div>
			<Link
				href="mailto:thek8pai@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-5"
			>
				<SiGmail
					className={`p-3 box-content text-lg transition-all transform hover:scale-105 hover:fill-red-600`}
				/>
			</Link>
		</footer>
	);
};

export default Footer;
