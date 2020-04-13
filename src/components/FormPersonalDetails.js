import React from "react";

function FormPersonalDetails({
	step,
	setStep,
	city,
	setCity,
	bio,
	setBio,
	occupation,
	setOccupation,
}) {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<>
						<div className="form-group">
							<label>City</label>
							<input
								type="text"
								className="form-control"
								defaultValue={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label>Occupation</label>
							<input
								type="text"
								className="form-control"
								defaultValue={occupation}
								onChange={(e) => setOccupation(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label>Bio</label>
							<input
								type="text"
								className="form-control"
								defaultValue={bio}
								onChange={(e) => setBio(e.target.value)}
							/>
						</div>

						<button
							type="submit"
							className="btn btn-primary mr-3"
							onClick={() => setStep(step - 1)}
						>
							Back
						</button>

						<button
							type="submit"
							className="btn btn-primary"
							onClick={() => setStep(step + 1)}
						>
							Next
						</button>
					</>
				</div>
			</div>
		</div>
	);
}

export default FormPersonalDetails;
