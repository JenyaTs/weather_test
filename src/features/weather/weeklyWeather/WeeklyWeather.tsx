import React from "react";

import { useAppSelector } from '../../../app/hooks';

import { WeeklyWeatherItem } from './WeeklyWeatherItem';
import { selectWeeklyWeather } from '../weatherSlice';

export function WeeklyWeather() {
	const weather = useAppSelector(selectWeeklyWeather);

	const days = weather.days;
	
	if (days) {
		return (
			<div className='weekly-weather'>
				<h3 className="h3-title">Weekly</h3>
				<div className="weekly-weather-days-list">
					{days.map((el, idx) => <WeeklyWeatherItem weather={el} key={idx} />)}
				</div>
			</div>
		);
	}
    
	return null;
}
