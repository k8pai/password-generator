'use client';

import Link from 'next/link';
import React from 'react';
import { GoRepo } from 'react-icons/go';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import { SlGlobe } from 'react-icons/sl';

const Header: React.FC = () => {
	const handleClick = () => {
		// Handle user account menu click here
		console.log('clicked');
	};

	return (
		<header className="bg-inherit p-4 flex justify-between items-center">
			<div className="flex items-center">
				<h1 className="text-white text-2xl font-bold">PassHasher</h1>
			</div>
			<div className="flex items-center">
				<Link
					href="https://github.com/k8pai/password-generator"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-4"
				>
					<GoRepo
						className={`px-3 box-content text-lg transition duration-200 ease-in transform hover:fill-[#e5e5e7]`}
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
