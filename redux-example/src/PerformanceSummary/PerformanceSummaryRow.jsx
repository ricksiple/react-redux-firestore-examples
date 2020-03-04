import React, { Component } from "react";
import { Table, Button, Input } from "semantic-ui-react";

import { connect } from "react-redux";
import actionCreators from "../Redux/Actions";

class PerformanceSummaryRow extends Component {
  state = {
    row: this.props.row,
    editMode: this.props.row._new
  };

  formatters = {
    currency: Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }),
    percentage: Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  };

  onEdit() {
    this.setState({ editMode: true, row: this.props.row });
  }

  onCancel() {
    const { _new } = this.props.row;

    if (_new) {
      this.props.rdxDelete(this.props.row.id);
    } else {
      this.setState({ editMode: false, row: this.props.row });
    }
  }

  onChange(name, value) {
    this.setState(prevState => ({
      row: { ...prevState.row, [name]: value }
    }));
  }

  onUpdate() {
    this.setState({ editMode: false });
    this.props.rdxUpdate(this.state.row);
  }

  onDelete() {
    this.props.rdxDelete(this.props.row.id);
  }

  render() {
    const { portfolio, assets, mtd, qtd, ytd } = this.state.row;
    const { editMode } = this.state;

    return (
      <Table.Row>
        <Table.Cell>
          {editMode ? (
            <Input
              value={portfolio}
              onChange={e => {
                this.onChange("portfolio", e.target.value);
              }}
            />
          ) : (
            portfolio
          )}
        </Table.Cell>
        <Table.Cell textAlign="center">
          {editMode ? (
            <Input
              value={assets}
              onChange={e => {
                this.onChange("assets", e.target.value);
              }}
            />
          ) : (
            this.formatters.currency.format(assets)
          )}
        </Table.Cell>
        <Table.Cell textAlign="center">
          {editMode ? (
            <Input
              value={mtd}
              onChange={e => {
                this.onChange("mtd", e.target.value);
              }}
            />
          ) : (
            this.formatters.percentage.format(mtd)
          )}
        </Table.Cell>
        <Table.Cell textAlign="center">
          {editMode ? (
            <Input
              value={qtd}
              onChange={e => {
                this.onChange("qtd", e.target.value);
              }}
            />
          ) : (
            this.formatters.percentage.format(qtd)
          )}
        </Table.Cell>
        <Table.Cell textAlign="center">
          {editMode ? (
            <Input
              value={ytd}
              onChange={e => {
                this.onChange("ytd", e.target.value);
              }}
            />
          ) : (
            this.formatters.percentage.format(ytd)
          )}
        </Table.Cell>
        <Table.Cell textAlign="center">
          {editMode || <Button icon="remove" onClick={() => this.onDelete()} />}
          {editMode || <Button icon="pencil" onClick={() => this.onEdit()} />}
          {editMode && <Button icon="save" onClick={() => this.onUpdate()} />}
          {editMode && <Button icon="undo" onClick={() => this.onCancel()} />}
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default connect(null, actionCreators)(PerformanceSummaryRow);
