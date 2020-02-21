import React from 'react';
import { render } from '@testing-library/react';
import { PlayerCard } from './PlayerCard.js';

describe('PlayerCard', () => {
	test('renders without crashing', () => {
		render(<PlayerCard />);
	});

	test('it renders Name', () => {
		const display = render(<PlayerCard />);
		display.getByText(/Name/);
	});
});