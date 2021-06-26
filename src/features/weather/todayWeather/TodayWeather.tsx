import React from "react";

import { useAppSelector } from '../../../app/hooks';
import { selectTodayWeather } from '../weatherSlice';

import { WeatherInfo } from '../commonComponents/WeatherInfo';

export function TodayWeather() {  
	const todayWeather = useAppSelector(selectTodayWeather);

	if (todayWeather) {
		const { temp, desc, feels_like } = todayWeather;

		return (
			<div className='today-weather'>
				<h3 className="h3-title">Today</h3>
				<WeatherInfo temp={temp} desc={desc} feels_like={feels_like} />
			</div>
		);
	}

	return null;
}
