import './App.css';
import Testimonial from './components/Testimonial';
import { summary } from './components/TestimonialInfo';

function App() {
	return (
		<div className='App'>
			<div className='principal-content'>
				<h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

				<Testimonial
					people={summary[0].people}
					contry={summary[0].contry}
					image={summary[0].image}
					career={summary[0].career}
					company={summary[0].company}
					testimonial={summary[0].testimonial}
				/>
				<Testimonial
					people={summary[1].people}
					contry={summary[1].contry}
					image={summary[1].image}
					career={summary[1].career}
					company={summary[1].company}
					testimonial={summary[1].testimonial}
				/>
				<Testimonial
					people={summary[2].people}
					contry={summary[2].contry}
					image={summary[2].image}
					career={summary[2].career}
					company={summary[2].company}
					testimonial={summary[2].testimonial}
				/>
			</div>
		</div>
	);
}

export default App;
