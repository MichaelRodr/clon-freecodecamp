import React from 'react';
import '../stylesSheets/TestimonialStyle.css';

const Testimonial = (props) => {
	console.log(props);
	return (
		<div className='content-testimonial'>
			<img
				className='image-testimonial'
				src={require(`../assets/image/testimonial-${props.image}.png`)}
				alt={`testimonial ${props.image}`}
			/>
			<div className='text-conten-testimonial'>
				<p className='testimonial-name'>
					<strong>{props.people}</strong> en {props.contry}
				</p>
				<p className='career-testimonial'>
					{props.career} en <strong>{props.company}</strong>
				</p>
				<p className='text-testimonial'>{props.testimonial}</p>
			</div>
		</div>
	);
};

export default Testimonial;
