import Generator from '@/components/Generator';
import type { PasswordStrength } from '@/typings';
import generatePassword from '@/lib/helpers';
import Image from 'next/image';

export default function Home() {
	const passwords: PasswordStrength[] = [
		'weak',
		'medium',
		'strong',
		'recommended',
	];

	return (
		<div className="flex-1 flex flex-col justify-center">
			{passwords.map((strength) => (
				<Generator
					strength={strength}
					password={generatePassword(strength)}
				/>
			))}
		</div>
	);
}
