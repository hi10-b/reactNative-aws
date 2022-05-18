import React, { Component, useState } from "react";
import { Form, Button, Row, Col, Table, Container } from "react-bootstrap";
import axios from "axios";
import PurchasePrint from "./purchasePrint";
// import DatePicker from "react-datepicker";
// import DatePicker from 'react-date-picker';
// import "react-datepicker/dist/react-datepicker.css";
// import "react-date-picker/dist/DatePicker.css";
// import moment from 'moment';
class Purchase extends Component {
	constructor(props) {
		super(props);

		this.state = {
			allPurchase: [],
			datePurchase: "",
			totalPurchase: "",
			GST: "",
			companyNamePurchase: "",
		};

		this.chCompanyName = this.chCompanyName.bind(this);
		this.chDatePurchase = this.chDatePurchase.bind(this);
		this.chTotalPurchase = this.chTotalPurchase.bind(this);
		this.chGST = this.chGST.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		axios
			.get("http://localhost:5000/purchase/")
			.then((res) => {
				this.setState({ allPurchase: res.data });
			})
			.catch((error) => console.log(error));
	}
	chCompanyName(e) {
		this.setState({ companyNamePurchase: e.target.value });
	}

	chDatePurchase(e) {
		console.log(e);
		this.setState({ datePurchase: e });
	}

	chTotalPurchase(e) {
		this.setState({ totalPurchase: e.target.value });
	}

	chGST(e) {
		this.setState({ GST: e.target.value });
	}

	handleSubmit(e) {
		console.log(this.state.datePurchase);
		console.log(this.state.companyNamePurchase);
		console.log(this.state.totalPurchase);
		console.log(this.state.GST);

		const newPurchase = {
			datePurchase: this.state.datePurchase,
			companyNamePurchase: this.state.companyNamePurchase,
			totalPurchase: this.state.totalPurchase,
			GST: this.state.GST,
		};

		axios
			.post("http://localhost:5000/purchase/add", newPurchase)
			.then((res) => console.log(res.data));

		e.preventDefault();
	}

	purchaseList() {
		return this.state.allPurchase.map((currentPurchase) => {
			return (
				<PurchasePrint
					purchase={currentPurchase}
					key={currentPurchase._id}
				/>
			);
		});
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h2>Purchase</h2>
						<Form
							style={{ width: "80%" }}
							onSubmit={this.handleSubmit}
						>
							{/* <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Date" required onChange={this.chDateSales} />
                            </Form.Group> */}
							<Form.Group>
								{/* <DatePicker
									format={"y-MM-dd"}
									selected={this.state.datePurchase}
									onChange={this.chDatePurchase}
								/> */}
							</Form.Group>
							<Form.Group>
								<Form.Label>Company Name</Form.Label>
								<Form.Control
									required
									type="text"
									placeholder="Company Name"
									value={this.state.companyNamePurchase}
									onChange={this.chCompanyName}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Total Purchase</Form.Label>
								<Form.Control
									required
									type="number"
									placeholder="Total Purchase"
									value={this.state.totalPurchase}
									onChange={this.chTotalPurchase}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>GST</Form.Label>
								<Form.Control
									required
									type="number"
									placeholder="GST"
									value={this.state.GST}
									onChange={this.chGST}
								/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Save
							</Button>
						</Form>
					</Col>
					<Col>
						<Table>
							<thead>
								<tr>
									{/* <th>ID</th> */}
									<th>Date</th>
									<th>Name</th>
									<th>purchase</th>
									<th>GST</th>
								</tr>
							</thead>
							<tbody>{this.purchaseList()}</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Purchase;
