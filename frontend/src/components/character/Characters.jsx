import React from 'react'

export const Characters = (props) => {
	props.chars.sort((a, b) => parseInt(b.chance.replace("%", "")) - parseInt(a.chance.replace("%", "")));
	return (
		<div className="characters">
			{props.chars.length > 0 ?
			props.chars.map((char) => {
				return (
					<>
						<div className="character">
							<span>Name: {char.name}</span>
							<span>Type: {char.type}</span>
							<span>Chance: {char.chance}</span>
						</div>
					</>
				)
			})
			: <span>nincs</span>}
		</div>
	)
}
