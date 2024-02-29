import RadioSelectRating from './RadioSelectRating';

export default function RatingGroup({ control, name, options }) {
	return (
		<>

			<label className="form-label" htmlFor='rating'>RATING</label>
			<div className="rating-group">
				{options.map((option) => (
					<RadioSelectRating
						key={option.value}
						name={name}
						control={control}
						value={option.value}
						label={option.label}
					/>
				))}
			</div>

		</>
	);
}