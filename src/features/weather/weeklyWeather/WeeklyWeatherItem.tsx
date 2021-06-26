import React from "react";

import { WeekDayWeather } from '../utils/interfaces';
import { getDay, getDayName } from '../utils/utils';

import { WeatherInfo } from '../commonComponents/WeatherInfo';

export function WeeklyWeatherItem( { weather }: { weather: WeekDayWeather } ) {
	const { day, desc, feels_like, temp } = weather;
	
	return (
		<div className='daily-weather'>
			<p className="day"><strong>{getDayName(day)}, <br/> {getDay(day)}</strong></p>
			<WeatherInfo temp={temp} desc={desc} feels_like={feels_like} />
		</div>
	);
}
