import Weather from './Weather';


export default function Footer(state){
    return `
      <div id="footer">
        <div class="container">
          this is the bottom of my page!
          ${Weather(state.weather)}
        </div>
      </div>
    `;
}
