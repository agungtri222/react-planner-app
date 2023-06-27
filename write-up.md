## WeatherWidget Component Explanation

The `WeatherWidget` component is a functional component that displays a weather widget based on the user's search input.

### State Variables

- `city`: Stores the weather data received from the API.
- `search`: Stores the user's search input for the city.

### useEffect Hook

The component uses the `useEffect` hook to fetch weather data from the OpenWeatherMap API when the `search` state changes.

Inside the `useEffect` hook:

1. The `fetchWeatherData` function is defined as an asynchronous function.
2. It sends a GET request to the OpenWeatherMap API using the `fetch` function.
3. It awaits the response, parses it as JSON, and updates the `city` state with the received weather data (`data.main`).
4. If an error occurs during the fetch process, it is caught and logged to the console, and the `city` state is set to `null`.

### Input Element

The `input` element allows the user to enter a city for which they want to see the weather. The `value` prop is set to the `search` state, ensuring that the input field reflects the current value.

### Conditional Rendering

Depending on the state of `city`, the component conditionally renders either a message indicating that no city is found or a weather information section.

If `city` is falsy (null or undefined), it displays the "No city found" message. Otherwise, it renders the weather details using the `city` object, including the city name (`search`), temperature (`city.temp`), minimum and maximum temperature (`city.temp_min` and `city.temp_max`), pressure (`city.pressure`), and humidity (`city.humidity`).

### Export

The `WeatherWidget` component is exported as the default export, making it available for use in other parts of the application.

**Note:** Make sure to set up the appropriate environment variable (`REACT_APP_OPENWEATHERMAP_API_KEY`) in your project's configuration file, which should contain your OpenWeatherMap API key.
