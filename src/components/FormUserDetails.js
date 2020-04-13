import React from "react";

function FormUserDetails({
	step,
	setStep,
	firstName,
	setFirstName,
	lastName,
	setLastName,
	email,
	setEmail
}) {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="form-group">
						<label>First Name</label>
						<input
							type="text"
							className="form-control"
							defaultValue={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<label>Last Name</label>
						<input
							type="text"
							className="form-control"
							defaultValue={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							type="text"
							className="form-control"
							defaultValue={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<button
						type="submit"
						className="btn btn-primary"
						onClick={() => setStep(step + 1)}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default FormUserDetails;
