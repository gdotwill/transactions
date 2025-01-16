import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalState";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import MDInput from "components/MDInput";

function PaymentMethod() {
  const [controller] = useMaterialUIController();

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <Card id="delete-account" component="form" role="form" onSubmit={onSubmit}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Add new transaction
        </MDTypography>
        <MDButton onClick={onSubmit} variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add transaction
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MDInput
              value={text}
              onChange={(e) => setText(e.target.value)}
              label="Add description"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MDInput
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              label="Add amount"
            />
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default PaymentMethod;
