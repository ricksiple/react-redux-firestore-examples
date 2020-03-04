import React from "react";
import { Container, Header, Table, Button, Icon } from "semantic-ui-react";
import { connect } from 'react-redux'
import actionCreators from '../Redux/Actions'
import PerformanceSummaryRow from "./PerformanceSummaryRow";

const mapStateToProps = (state) => {
  return {
    rows: state.rows
  }
}

const PerformanceSummary = props => {
  const { rows, rdxCreate } = props;
  return (
    <Container>
      <Header textAlign="center" size="large">
        Performance Summary
      </Header>
      <Header textAlign="center" size="tiny">
        for December 4, 2019
      </Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>Portfolio</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Assets</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Month-to-Date</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Quarter-to-Date</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Year-to-Date</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map(row => (
            <PerformanceSummaryRow key={row.id} row={row} />
          ))}
        </Table.Body>
      </Table>
      <Button onClick={() => rdxCreate()}>
        <Icon name='plus sign' />
        New Row
        </Button>
    </Container>
  );
};

export default connect(mapStateToProps, actionCreators)(PerformanceSummary)