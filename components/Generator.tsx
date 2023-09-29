'use client';

import generatePassword from '@/lib/helpers';
import React, { FormEvent, useState } from 'react';
import { MdRefresh } from 'react-icons/md';
import { GoCopy } from 'react-icons/go';
import { PasswordStrength } from '@/typings';

const Generator = ({
	strength,
	password,
}: {
	strength: PasswordStrength;
	password: string;
}) => {
	const [random, setRandom] = useState<string>(password);
	const [showPassword, setShowPassword] = useState(true);

	const handlePasswordToggle = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	const copyPassword = () => {
		console.log('copied password');
		navigator.clipboard.writeText(random);
	};

	const generateNewPassword = () => {
		setRandom(generatePassword(strength));
	};

	return (
		<div className="flex flex-col items-center justify-center ">
			<form className="relative my-5 mx-3 w-fit box-border sm:max-w-sm sm:w-full">
				<h1
					className={`px-2 capitalize text-left text-lg font-bold ${
						strength === 'recommended' ? 'text-green-500' : ''
					}`}
				>
					{strength} Password
				</h1>
				<div className="relative w-full my-2">
					<input
						type={showPassword ? 'text' : 'password'}
						value={random}
						onChange={(e) => setRandom(e.target.value)}
						className="rounded-md py-2 pl-3 pr-20 shadow-md w-full focus:outline-none bg-neutral-800/50 focus:bg-neutral-800/60 font-semibold tracking-widest"
					/>
					<div className="absolute inset-y-0 my-auto h-fit right-0 mx-1">
						<button
							type="button"
							onClick={copyPassword}
							className="p-1"
						>
							<GoCopy className={'h-5 w-5'} />
						</button>
						<button
							type="button"
							onClick={generateNewPassword}
							className="p-1"
						>
							<MdRefresh className={'h-5 w-5'} />
						</button>
					</div>
				</div>
				<div className="px-2">
					<input
						id={`show${strength}Pass`}
						type="checkbox"
						checked={showPassword}
						onChange={handlePasswordToggle}
						className="mt-2"
					/>
					<label htmlFor={`show${strength}Pass`} className="ml-2">
						Show Password
					</label>
				</div>
			</form>
		</div>
	);
};

export default Generator;
