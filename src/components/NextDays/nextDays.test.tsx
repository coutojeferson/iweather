import { NextDays } from '@components/NextDays';
import clearDay from '@assets/clear_day.svg';
import { render, screen } from '@testing-library/react-native';

describe('Component: NextDays.', () => {
  it('should be render next days', () => {
    render(
      <NextDays
        data={[
          {
            day: '18/07',
            min: '30°c',
            max: '34°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '19/07',
            min: '31°c',
            max: '35°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '20/07',
            min: '32°c',
            max: '36°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '21/07',
            min: '33°c',
            max: '37°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '22/07',
            min: '34°c',
            max: '38°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
        ]}
      />,
    );

    expect(screen.getByText('21/07')).toBeTruthy();
  });
});
