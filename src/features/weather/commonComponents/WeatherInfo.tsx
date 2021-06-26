import React from "react";

import { CurrentWeather } from '../utils/interfaces';

import { convertKelvinToCelsius } from '../utils/utils';

export function WeatherInfo({ temp, desc, feels_like }: CurrentWeather) {
	return (
		<>
			<p className="temp">{convertKelvinToCelsius(temp)} &#8451;, <span className="description">{desc}</span></p>
			<p className="feels-like">Feels like: {convertKelvinToCelsius(feels_like)} &#8451;</p>
		</>
	);
}
