import "ka-table/style.css";
import { DataType, Table } from "ka-table";
import { EditingMode, FilteringMode, SortingMode } from "ka-table/enums";
import {
  updateFilterRowOperator,
  updateFilterRowValue,
} from "ka-table/actionCreators";

import { Column } from "ka-table/models";
import { DispatchFunc } from "ka-table/types";
import { IFilterRowEditorProps } from "ka-table/props";
import { ITableProps, IDataRowProps } from "ka-table";
import React from "react";
import { kaDateUtils } from "ka-table/utils";

const CustomLookupEditor = ({ column, dispatch }) => {
  const toNullableBoolean = (value) => {
    switch (value) {
      case "true":
        return true;
      case "false":
        return false;
    }
    return value;
  };
  return (
    <div>
      <select
        className="form-control"
        defaultValue={column.filterRowValue}
        onChange={(event) => {
          dispatch(
            updateFilterRowValue(
              column.key,
              toNullableBoolean(event.currentTarget.value)
            )
          );
        }}
      >
        <option value="" />
        <option value={"true"}>True</option>
        <option value={"false"}>False</option>
      </select>
    </div>
  );
};

const FilterOperators = ({ column, dispatch }) => {
  return (
    <select
      className="form-control"
      defaultValue={column.filterRowOperator}
      onChange={(event) => {
        dispatch(
          updateFilterRowOperator(column.key, event.currentTarget.value)
        );
      }}
    >
      <option value={"="}>=</option>
      <option value={"<"}>{"<"}</option>
      <option value={">"}>{">"}</option>
      <option value={"<="}>{"<="}</option>
      <option value={">="}>{">="}</option>
    </select>
  );
};

const NumberEditor = ({ column, dispatch }) => {
  return (
    <div>
      <FilterOperators column={column} dispatch={dispatch} />
      <input
        defaultValue={column.filterRowValue}
        style={{ width: 60 }}
        onChange={(event) => {
          const filterRowValue =
            event.currentTarget.value !== ""
              ? Number(event.currentTarget.value)
              : null;
          dispatch(updateFilterRowValue(column.key, filterRowValue));
        }}
        type="number"
      />
    </div>
  );
};

const DateEditor = ({ column, dispatch }) => {
  const fieldValue = column.filterRowValue;
  const value = fieldValue && kaDateUtils.getDateInputValue(fieldValue);
  return (
    <div>
      <p type="date" value={value || ""} />
    </div>
  );
};

function EventDataTable({ data, status }) {
  console.log(data);

  const nextSteps = (rowData) => {
    console.log("Row clicked", rowData);
    if (status === "hosted") {
      console.log("Hosted events");
      return (
        <div>
          <p>Next steps content goes here.</p>
        </div>
      );
    } else {
      console.log("Registered events");

      return (
        <div>
          <p>Next steps content goes here.</p>
        </div>
      );
    }
  };

  const ClickableCell = ({ value, rowData, onClick }) => {
    return <td onClick={() => onClick(rowData)}>{value}</td>;
  };

  return (
    <Table
      columns={[
        {
          dataType: DataType.String,
          key: "name",
          style: {
            width: 200,
            fontSize: "15px",
          },
          cell: ({ value, rowData }) => (
            <ClickableCell
              value={value}
              rowData={rowData}
              onClick={nextSteps}
            />
          ),
          title: "Event Title",
        },
        {
          dataType: DataType.Number,
          filterRowOperator: ">=",
          filterRowValue: 45,
          key: "score",
          style: {
            width: 120,
            fontSize: "15px",
          },
          cell: ({ value, rowData }) => (
            <ClickableCell
              value={value}
              rowData={rowData}
              onClick={nextSteps}
            />
          ),
          title: "Registered Participants",
        },
        {
          dataType: DataType.Date,
          filterRowOperator: "<=",
          filterRowValue: new Date(2021, 11, 11),
          key: "nextTry",
          style: {
            width: 120,
            fontSize: "15px",
          },
          cell: ({ value, rowData }) => (
            <ClickableCell
              value={value}
              rowData={rowData}
              onClick={nextSteps}
            />
          ),
          title: "Event Date",
        },
        {
          dataType: DataType.Date,
          filterRowOperator: "<=",
          filterRowValue: new Date(2021, 11, 11),
          key: "deadline",
          style: {
            width: 120,
            fontSize: "15px",
          },
          cell: ({ value, rowData }) => (
            <ClickableCell
              value={value}
              rowData={rowData}
              onClick={nextSteps}
            />
          ),
          title: "Registration Deadline",
        },
      ]}
      data={data}
      format={({ column, value }) => {
        if (column.dataType === DataType.Date) {
          return (
            value &&
            value.toLocaleDateString("en", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })
          );
        }
      }}
      paging={{
        enabled: true,
        pageSize: 5,
        pageIndex: 0,
      }}
      filteringMode={FilteringMode.FilterRow}
      sortingMode={SortingMode.Single}
      rowKeyField={"id"}
      rowEvents={{
        onClick: (event, { rowData }) => nextSteps(rowData),
      }}
      childComponents={{
        filterRowCell: {
          content: (props) => {
            switch (props.column.key) {
              case "title":
                return <div onClick={nextSteps}></div>;
              case "nextTry":
                return <DateEditor {...props} />;
              case "deadline":
                return <DateEditor {...props} />;
              case "score":
                return <NumberEditor {...props} />;
            }
          },
        },
      }}
    />
  );
}

export default EventDataTable;
