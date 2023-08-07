// import { PasswordStrength } from '@/typings';

enum PasswordStrength {
	Weak = 'weak',
	Medium = 'medium',
	Strong = 'strong',
	Suggested = 'recommended',
}

export type strengthType =
	| PasswordStrength.Weak
	| PasswordStrength.Medium
	| PasswordStrength.Strong
	| PasswordStrength.Suggested;

export const strengths = [
	PasswordStrength.Suggested,
	PasswordStrength.Weak,
	PasswordStrength.Medium,
	PasswordStrength.Strong,
];

const generatePassword = (
	strength: PasswordStrength,
	length?: number,
): string => {
	let len: number;
	const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
	const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numberChars = '0123456789';
	const specialChars = '!@#$%^&*()_-+=[]{}|:;"\'<>,.?/~`';
	const suggestionSpecialChars = '!@#$%^&*:?-_+.,';

	let validChars = '';
	if (strength === PasswordStrength.Weak) {
		len = length || 8;
		validChars = lowerChars + upperChars;
	} else if (strength === PasswordStrength.Medium) {
		len = length ? length + 4 : 12;
		validChars = lowerChars + upperChars + numberChars;
	} else if (strength === PasswordStrength.Strong) {
		len = length ? length + 8 : 16;
		validChars = lowerChars + upperChars + numberChars + specialChars;
	} else {
		len = length ? length + 8 : 16;
		validChars =
			lowerChars + upperChars + numberChars + suggestionSpecialChars;
	}

	let password = '';
	for (let i = 0; i < len; i++) {
		const randomIndex = Math.floor(Math.random() * validChars.length);
		password += validChars[randomIndex];
	}

	return password;
};

export default generatePassword;
