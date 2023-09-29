import { PasswordStrength } from '@/typings';

export const characters = {
	lowerChars: 'abcdefghijklmnopqrstuvwxyz',
	upperChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	numberChars: '0123456789',
	specialChars: '!@#$%^&*()_-+=[]{}|:;"\'<>,.?/~`',
	suggestionSpecialChars: '!@#$%^&*:?-_+.,',
};

const randomPass = (len: number = 8, validChars: string) => {
	let password = '';
	for (let i = 0; i < len; i++) {
		const randomIndex = Math.floor(Math.random() * validChars.length);
		password += validChars[randomIndex];
	}
	return password;
};

const generatePassword = (
	strength: PasswordStrength,
	length?: number,
): string => {
	const {
		lowerChars,
		upperChars,
		numberChars,
		specialChars,
		suggestionSpecialChars,
	} = characters;

	let len: number = length ?? 8;
	let validChars = lowerChars + upperChars;

	if (strength === 'medium') {
		len = length ? length + 4 : 12;
		validChars = lowerChars + upperChars + numberChars;
	} else if (strength === 'strong' || strength === 'recommended') {
		len = length ? length + 8 : 16;
		validChars =
			lowerChars +
			upperChars +
			numberChars +
			specialChars +
			(strength === 'recommended' ? suggestionSpecialChars : '');
	}

	return randomPass(len, validChars);
};

export default generatePassword;
