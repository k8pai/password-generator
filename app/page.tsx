import Generator from '@/components/Generator';
import type { PasswordStrength } from '@/typings';
import { strengths } from '@/utils/randomPassword';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="">
			{strengths.map((el) => (
				<Generator strength={el} />
			))}
		</div>
	);
}
