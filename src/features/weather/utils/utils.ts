export const convertKelvinToCelsius = (temp: number): number => {
	return Math.round(temp - 273.15);
};

export const getDay = (code: number): string => {
	return new Date(code*1000).toLocaleDateString('en-GB')
};

export const getDayName = (code: number): string => {
	return new Date(code*1000).toLocaleString('en-GB', {weekday:'long'})
};