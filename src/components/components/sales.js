import React, { Component } from "react";
import { Form, Button, Row, Col, Table, Container } from "react-bootstrap";
import axios from "axios";
import SalesPrint from "./salesPrint";
// import DatePicker from "react-datepicker";
// import DatePicker from 'react-date-picker';
// import "react-datepicker/dist/react-datepicker.css";
// import "react-date-picker/dist/DatePicker.css";
// import moment from "moment";

class Sales extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dateSales: "",
			totalSales: "",
			epaySales: "",
			eftposSales: "",
			allSales: [],
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.chDateSales = this.chDateSales.bind(this);
		this.chTotalSales = this.chTotalSales.bind(this);
		this.chEpaySales = this.chEpaySales.bind(this);
		this.chEftposSales = this.chEftposSales.bind(this);
	}

	salesList() {
		// console.log(this.state.allSales);
		return this.state.allSales.map((currentSale) => {
			return <SalesPrint sale={currentSale} key={currentSale._id} />;
		});
	}

	componentDidMount() {
		axios
			.get("http://localhost:5000/sales/sorted")
			.then((res) => {
				this.setState({ allSales: res.data });
			})
			.catch((error) => console.log(error));
	}

	// componentDidUpdate(handleSubmit) {
	//     console.log("update")

	//     axios.get("http://localhost:5000/sales/")
	//         .then((res) => {
	//             this.setState({ allSales: res.data });
	//         })
	//         .catch((error) => console.log(error));
	// }

	handleSubmit(e) {
		console.log(this.state.dateSales);
		console.log(this.state.totalSales);
		console.log(this.state.epaySales);
		console.log(this.state.eftposSales);

		const newSale = {
			dateSales: this.state.dateSales,
			totalSales: this.state.totalSales,
			epaySales: this.state.epaySales,
			eftposSales: this.state.eftposSales,
		};

		axios
			.post("http://localhost:5000/sales/add", newSale)
			.then((res) => console.log(res.data));

		e.preventDefault();
	}

	chDateSales(e) {
		this.setState({ dateSales: e });
		console.log("e" + e);
		console.log(typeof this.state.dateSales);
		// e.preventDefault();
	}

	chTotalSales(e) {
		this.setState({ totalSales: e.target.value });
	}

	chEpaySales(e) {
		this.setState({ epaySales: e.target.value });
	}

	chEftposSales(e) {
		this.setState({ eftposSales: e.target.value });
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h2>Sales</h2>
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
									selected={this.state.dateSales}
									onChange={this.chDateSales}
								/> */}
							</Form.Group>
							<Form.Group>
								<Form.Label>Total Sales</Form.Label>
								<Form.Control
									required
									type="number"
									placeholder="Total Sales"
									value={this.state.totalSales}
									onChange={this.chTotalSales}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Epay Sales</Form.Label>
								<Form.Control
									type="number"
									placeholder="Epay Sales"
									required
									value={this.state.epaySales}
									onChange={this.chEpaySales}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Eftpos Sales</Form.Label>
								<Form.Control
									type="number"
									placeholder="Eftpos Sales"
									required
									value={this.state.eftposSales}
									onChange={this.chEftposSales}
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
									<th>Total Sales</th>
									<th>Epay Sales</th>
									<th>Eftpos Sales</th>
								</tr>
							</thead>
							<tbody>{this.salesList()}</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Sales;
