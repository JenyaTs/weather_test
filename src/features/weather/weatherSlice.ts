import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { 
	WeatherState, 
	CityCoords, 
	FetchWeekWeather, 
	WeekDayWeather 
} from './utils/interfaces';

const initialState: WeatherState = {
	weatherData: {
		todayWeather: null,
		weeklyWeather: {
			days: null
		}
	},

	status: 'idle',
};

const kharkivCoords: CityCoords = {
	lat: 50.0554303,
	lon: 36.1925575
};

export const getWeather = createAsyncThunk(
	'weather/fetchWeather',
	async () => {
		const { lat, lon } = kharkivCoords;

		const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid={token}`);
		return response.json();
	}
);

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getWeather.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getWeather.fulfilled, (state, action) => {
				const 
					todayWeatherData =  action.payload.current,
					weeklyWeather = action.payload.daily;

				weeklyWeather.shift();
				state.weatherData = {
					todayWeather: {
						temp : todayWeatherData.temp,
						feels_like: todayWeatherData.feels_like,
						desc: todayWeatherData.weather[0].description
					},

					weeklyWeather: {
						days: weeklyWeather.map((day: FetchWeekWeather): WeekDayWeather => {
							return {
								day: day.dt, 
								temp: day.temp.day, 
								feels_like: day.feels_like.day, 
								desc: day.weather[0].description
							}
						})
					}		
				};

				state.status = 'idle';
			})
			.addCase(getWeather.rejected, (state) => {
				state.status = 'failed';
			})
	},
});

export const selectTodayWeather = (state: RootState) => state.weather.weatherData.todayWeather;
export const selectWeeklyWeather = (state: RootState) => state.weather.weatherData.weeklyWeather;

export default weatherSlice.reducer;
