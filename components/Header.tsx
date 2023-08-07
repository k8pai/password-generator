'use client';

import React from 'react';

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
			<div className="flex items-center space-x-4">
				<div className="relative">
					<button
						className="bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold focus:outline-none"
						onClick={handleClick}
					>
						User
					</button>
					{/* User Account Menu */}
					{/* Add your user account menu dropdown content here */}
				</div>
				{/* Add more navigation or user-related elements here */}
			</div>
		</header>
	);
};

export default Header;
