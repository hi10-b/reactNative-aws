import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import moment from 'moment'
import SalesDelete from "./salesDelete";

function SalesPrint(props) {
	return (
		<tr>
			{/* <td>{props.sale._id}</td> */}
			{/* <td>{moment(props.sale.dateSales).format("yyyy-mm-D")}</td>
            <td>{moment(props.sale.dateSales).toString("MMM Do YY")}</td> */}
			<td>{props.sale.dateSales}</td>
			<td>$ {props.sale.totalSales}</td>
			<td>$ {props.sale.epaySales}</td>
			<td>$ {props.sale.eftposSales}</td>
			<td>
				<SalesDelete toDelete={props.sale._id} />
			</td>

			{/* button to edit card */}
			{/* <td><Link to={"/cardSearch/editCard/" + props.card._id}>
                <Button type="submit" value="Edit">Edit</Button>
            </Link>
            </td> */}
		</tr>
	);
}

export default SalesPrint;
