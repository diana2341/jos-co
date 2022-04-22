import React from "react";
import { Container, Form, Button, Row, Alert } from "react-bootstrap";

export default class Contact extends React.Component {
	state = {
		feedback: "",
		name: "",
		email: "",
		town: "",
		show: false,
	};
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const templateId = "template_dmzigda";
		this.setState({ name: "", feedback: "", email: "", town: "" });
		this.sendFeedback(templateId, {
			message_html: this.state.feedback,
			from_name: this.state.name,
			reply_to: this.state.email,
			from_town: this.state.town,
		});
		console.log("sent");
		this.setState({ show: true });
	};
	sendFeedback = (templateId, variables) => {
		window.emailjs
			.send("service_todumun", templateId, variables)
			.then((res) => {
				console.log("Email successfully sent!");
			})
			.catch((err) =>
				console.error("Oh well, you failed. Here some thoughts on the error that occured:", err)
			);
	};
	render() {
		return (
			<div class="f-pg container-width" id="contact">
				<Container>
					<h5 className="c-a-b">
						Contact us here! or{" "}
						<a
							style={{ color: "white", textDecoration: "underline" }}
							href="mailto:Medardomjconstruction@gmail.Com"
						>
							email us directly
						</a>
					</h5>
					<Form id="form" onSubmit={this.handleSubmit}>
						<Form.Group as={Row} controlId="Name">
							<Form.Label>Enter Your Name</Form.Label>
							<Form.Control
								onChange={this.handleChange}
								name="name"
								type="Name"
								placeholder="Name"
								value={this.state.name}
							/>
						</Form.Group>

						<Form.Group as={Row} controlId="formBasicEmail">
							<Form.Label>Enter Your Email </Form.Label>
							<Form.Control
								onChange={this.handleChange}
								name="email"
								type="email"
								placeholder="Email"
								value={this.state.email}
							/>
						</Form.Group>

						<Form.Group as={Row} controlId="formBasicSubject">
							<Form.Label>Town</Form.Label>
							<Form.Control
								onChange={this.handleChange}
								name="town"
								type="Town"
								placeholder="Town"
								value={this.state.town}
							/>
						</Form.Group>

						<Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
							<Form.Label>How can we help you?</Form.Label>
							<Form.Control
								onChange={this.handleChange}
								name="feedback"
								type="Message"
								value={this.state.feedback}
								placeholder="Message"
								as="textarea"
								rows={3}
							/>
						</Form.Group>
						<Button id="submit" variant="secondary" type="submit">
							Submit
						</Button>
					</Form>
					{this.state.show && (
						<Alert variant="success" onClose={() => this.setState({ show: false })} dismissible>
							<Alert.Heading>Message sent!</Alert.Heading>
						</Alert>
					)}
				</Container>
			</div>
		);
	}
}
