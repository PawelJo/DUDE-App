import RadioSelectRating from './RadioSelectRating.jsx';

export default function RatingGroup({ control, name, options, rules }) {
	return (
		<>

			<label className="form-label" htmlFor='rating'>RATE THIS ESTABLISHMENT</label>
			<div className="rating-group">
				{options.map((option) => (
					<RadioSelectRating
						key={option.value}
						name={name}
						control={control}
						value={option.value}
						label={option.label}
						rules={rules}
					/>
				))}
			</div>

		</>
	);
}