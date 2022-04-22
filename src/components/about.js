import React, { useEffect } from "react";
import {
	Row,
	Carousel,
	Container,
	Jumbotron,
	Image,
	Col,
	Form,
	Button,
	ListGroup,
} from "react-bootstrap";
import roof from "../imgs/foof3.jpeg";
import work1 from "../imgs/work1.jpg";
import work2 from "../imgs/work2.jpg";
import work3 from "../imgs/work3.jpg";
import work4 from "../imgs/work4.jpg";
import work5 from "../imgs/work5.jpg";
import work6 from "../imgs/work6.jpg";
import work7 from "../imgs/work7.jpg";
import work8 from "../imgs/work8.jpg";
import work9 from "../imgs/work9.jpg";
import work10 from "../imgs/work10.jpg";
import work11 from "../imgs/work11.jpg";
import work12 from "../imgs/work12.jpg";
import { propTypes } from "react-bootstrap/esm/Image";

export default function About(props) {
	let allServices = [
		"Terraces ",
		"Pool",
		"Patios",
		"Walkways",
		"Brick Coping",
		"Stone  Walls",
		"Chimneys",
		"Fireplaces",
		"Columns",
		"Aprons",
		"Excavation",
		"Stucco Tile",
		"Stairs",
		"Renovations ",
		"Extensions",
		"Alterations",
		"Repairs",
		"Window & Replacements",
		"Door & Replacement",
		"Kitchen Remodeling",
		"Bathroom Remodeling",
		"Roofing",
		"Siding",
	];
	let masonry = [
		"Terraces ",
		"Pool",
		"Patios",
		"Walkways",
		"Brick Coping",
		"Stone  Walls",
		"Chimneys",
		"Fireplaces",
		"Columns",
		"Aprons",
		"Excavation",
		"Stucco Tile",
		"Stairs",
	];

	let carpentry = [
		"Renovations ",
		"Extensions",
		"Alterations",
		"Repairs",
		"Window & Replacements",
		"Door & Replacement",
		"Kitchen Remodeling",
		"Bathroom Remodeling",
		"Roofing",
		"Siding",
	];
	let service =
		props.work === "masonry" ? masonry : props.work === "carpentry" ? carpentry : allServices;
	let work = [
		"work1",
		"work2",
		"work3",
		"work4",
		"work5",
		"work6",
		"work7",
		"work8",
		"work9",
		"work10",
		"work11",
	];
	let masonryWork = ["work5", "work6", "work8", "work9", "work10", "work11"];
	let carpentryWork = ["work1", "work2", "work3", "work4", "work7", "work12"];

	let renderImage = (option) => {
		if (option === "work1" && props.work === "carpentry") return work1;
		else if (option === "work2" && props.work === "carpentry") return work2;
		else if (option === "work3" && props.work === "carpentry") return work3;
		else if (option === "work4" && props.work === "carpentry") return work4;
		else if (option === "work5" && props.work === "masonry") return work5;
		else if (option === "work6" && props.work === "masonry") return work6;
		else if (option === "work7" && props.work === "carpentry") return work7;
		else if (option === "work8" && props.work === "masonry") return work8;
		else if (option === "work9" && props.work === "masonry") return work9;
		else if (option === "work10" && props.work === "masonry") return work10;
		else if (option === "work11" && props.work === "masonry") return work11;
		else if (option === "work12" && props.work === "carpentry") return work12;
		else return null;
	};
	let renderAllImage = (option) => {
		if (option === "work1") return work1;
		else if (option === "work2") return work2;
		else if (option === "work3") return work3;
		else if (option === "work4") return work4;
		else if (option === "work5") return work5;
		else if (option === "work6") return work6;
		else if (option === "work7") return work7;
		else if (option === "work8") return work8;
		else if (option === "work9") return work9;
		else if (option === "work10") return work10;
		else if (option === "work11") return work11;
		else if (option === "work12") return work12;
		else return null;
	};
	let workImages =
		props.work === "masonry" ? masonryWork : props.work === "carpentry" ? carpentryWork : work;
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			// behavior: 'smooth'
		});
	});
	return (
		<div id="a-p" className="container-width">
			<h2 id="call">LICENSED & INSURED!</h2>

			{/* <br/><br/><br/> */}
			{/* <Container> */}

			{/* <h1 className='title a-b'>Latest Works <i class="fas fa-tools"></i></h1><br/><br/> */}
			<Carousel>
				{workImages.map((option) => {
					return (
						<Carousel.Item>
							<img
								className="d-block w-100 "
								src={props.work ? renderImage(option) : renderAllImage(option)}
								alt={option}
							/>
						</Carousel.Item>
					);
				})}
			</Carousel>
			<p id="call">
				CONTACT US TODAY! 631-508-1374 or{" "}
				<a
					style={{ color: "white", textDecoration: "underline" }}
					href="mailto:Medardomjconstruction@gmail.Com"
				>
					email us
				</a>{" "}
			</p>
			<br />
			<br />

			<Container>
				<Jumbotron className="work-info">
					<h1 className="title a-b">
						{`${props.work ? props.work : "Masonry & Carpentry"}`} Services{" "}
					</h1>
					<br />
					<br />
					<ListGroup horizontal>
						<Row>
							{service
								.sort((a, b) => b.length - a.length)
								.map((service) => (
									<Col md={4}>
										<ListGroup.Item className="work-info list" variant="light" key={service}>
											{/* <i class="fas fa-hammer"></i>{' '} */}» {service}
										</ListGroup.Item>
									</Col>
								))}
						</Row>
					</ListGroup>
					<br />
					<br />
					<br />
					{/* </Jumbotron > */}

					<Col xs>
						<h1 className="title" id="ex ">
							20 Years of experience <i class="fas fa-tools"></i>
						</h1>
						<br />
						<p id="about-p">
							Do you need repair or improvement work? Medardo MJ Construction Corp. is a fully
							licensed and insured Home Improvement contractor and is here at your service. Medardo
							the owner of Medardo Construction Corp. is an experienced, knowledgable carpenter and
							craftsman who has been in the business of upgrading the homes of many families for
							years. He takes pride in his work and it shows through the beautiful results he
							provides. With many years of experience under his belt he can help you complete major
							and minor projects and guarantee the quality of his workmanship. Medardo Construction
							Corp. does capentry work and beautiful masonry Work, from installing new windows to
							replacing them, Whatever your project, he is ready to help. Call now to schedule an
							appointment and free estimate. We will also answer any questions you may have about
							the work that is done and what to expect during your service appointment.
						</p>
						{/* Do you need repair or improvement work? I’ve got years of experience with Cabinet Installation, and guarantee the quality
                     of my workmanship. Whatever your project, I’m ready to help. Call me now to schedule an appointment and free estimate. I will
                      also answer any questions you may have about how I work and what to expect during your service appointment. */}
					</Col>
				</Jumbotron>
			</Container>
			{/* </Container> */}
			<br />
		</div>
	);
}
