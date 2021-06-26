export interface CurrentWeather {
	temp: number,
	desc: string,
	feels_like: number,
}

export interface WeekDayWeather extends CurrentWeather {
	day: number, 
}

export interface WeatherState {
	weatherData: {
		todayWeather: CurrentWeather | null,
		weeklyWeather: {
			days: WeekDayWeather[] | null
		}
	},
	status: 'idle' | 'loading' | 'failed';
}

export interface WeatherDesc {
	description: string
}

export interface FetchWeekWeather {
	dt: number,
	temp: {
		day: number
	},
	feels_like: {
		day: number
	},
	weather: WeatherDesc[]
}

export interface CityCoords {
	readonly lat: number,
	readonly lon: number,
}
