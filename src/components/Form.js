import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

function Form() {
	const [step, setStep] = useState(1);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [occupation, setOccupation] = useState("");
	const [city, setCity] = useState("");
	const [bio, setBio] = useState("");

	switch (step) {
		case 1:
			return (
				<FormUserDetails
					step={step}
					setStep={setStep}
					firstName={firstName}
					setFirstName={setFirstName}
					lastName={lastName}
					setLastName={setLastName}
					email={email}
					setEmail={setEmail}
				/>
			);
		case 2:
			return (
				<FormPersonalDetails
					occupation={occupation}
					setOccupation={setOccupation}
					city={city}
					setCity={setCity}
					bio={bio}
					setBio={setBio}
					step={step}
					setStep={setStep}
				/>
			);
		case 3:
			return (
				<Confirm
					firstName={firstName}
					lastName={lastName}
					email={email}
					occupation={occupation}
					city={city}
					bio={bio}
					step={step}
					setStep={setStep}
				/>
			);
		case 4:
			return <Success />;

		default:
			return;
	}
}

export default Form;
