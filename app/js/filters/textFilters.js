
export function UpperFilter() {
	return function(input) {
		return input.toUpperCase();
	};
}

export function LowerFilter() {
	return function(input) {
		return input.toLowerCase();
	};
}