import type { DayNamesValue } from "$lib/types";

type BusinessHours = {
	[key in DayNamesValue]?: string[];
};

type Location = {
	zipcode: string;
	prefecture: string;
	city: string;
	address: string;
};

const phoneNumber: string = "012-3456-7890";

const location: Location = {
	zipcode: '012-3456',
	prefecture: 'Prefecture',
	city: 'City',
	address: 'Address'
};

const businessHours: BusinessHours = {
	Monday: ['09:00', '17:00'],
	Tuesday: ['09:00', '17:00'],
	Wednesday: ['09:00', '17:00'],
	Thursday: ['09:00', '17:00'],
	Friday: ['09:00', '17:00']
};

export { location, businessHours, phoneNumber };
