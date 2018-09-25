import { defaultsDeep } from 'lodash';

var defaultWeather = {
    'main': {
        'temp': 0
    },
    'weather': [ {} ]
};

export default function Weather(state){
    var weather = defaultsDeep(state, defaultWeather);

    return `
      <div>
        <h3>this is the weather in St. Louis:</h3>
        <ul>
          <li>
            <strong>Temperature</strong>: ${weather.main.temp}K
          </li>
          <li>
            <strong>Description</strong>: ${weather.weather[0].description}
          </li>
        </ul>
      </div>
    `;
}
