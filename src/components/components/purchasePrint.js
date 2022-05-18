import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import moment from 'moment'

function PurchasePrint(props) {
	return (
		<tr>
			{/* <td>{props.sale._id}</td> */}
			<td>{props.purchase.datePurchase}</td>
			<td>{props.purchase.companyNamePurchase}</td>
			<td>$ {props.purchase.totalPurchase}</td>
			<td>$ {props.purchase.GST}</td>

			{/* button to edit card */}
			{/* <td><Link to={"/cardSearch/editCard/" + props.card._id}>
                <Button type="submit" value="Edit">Edit</Button>
            </Link>
            </td> */}
		</tr>
	);
}

export default PurchasePrint;
