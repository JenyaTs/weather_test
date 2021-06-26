import React, { useEffect } from "react";

import { useAppDispatch } from "../../app/hooks";

import { getWeather } from "./weatherSlice";

import { TodayWeather } from './todayWeather/TodayWeather';
import { WeeklyWeather } from './weeklyWeather/WeeklyWeather';

export function Weather() {
	const dispatch = useAppDispatch();
		
	useEffect(() => {
		dispatch(getWeather());
	}, [dispatch]);

	return (
		<div className='weather-container'>
			<TodayWeather />
			<WeeklyWeather />
		</div>
	)
}
