type sup3rTimestampType = {
	formatted: string;
	unformatted: string;
	number: number;
};

export function Timestamp(): sup3rTimestampType {
	const date = new Date(Date.now());
	return {
		formatted: (
			`${date.getUTCMonth()}/${date.getUTCDate()}/${date.getUTCFullYear()}` +
			' ' +
			`${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
		),
		unformatted: `${date.getUTCMonth()}${date.getUTCDate()}${date.getUTCFullYear()}${date.getUTCHours()}${date.getUTCMinutes()}${date.getUTCSeconds()}`,
		number: Date.now(),
	};
}
