import React from "react";
import MaterialTable from "material-table";

export default function Table({ apiData, title, history }) {
  let columns = [];
  let list = [];
  let titlekeysArr = Object.keys(apiData[0]);
  for (let index = 1; index < titlekeysArr.length; index++) {
    if (index === 1) {
      columns.push({
        title: titlekeysArr[index],
        field: titlekeysArr[index],
        render: rowData => {
          return (
            <div onClick={() => clickHandler(rowData.id)}>{rowData.name}</div>
          );
        }
      });
    } else {
      columns.push({
        title: titlekeysArr[index],
        field: titlekeysArr[index]
      });
    }
  }
  for (let item of apiData) {
    list.push({
      ...item,
      company: item.company.name,
      address: item.address.city
    });
  }

  const clickHandler = userId => {
    history.push(`/Userposts/${userId}`);
  };
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={columns}
        data={list}
        title={title}
        options={{
          headerStyle: {
            backgroundColor: "black",
            color: "#FFF"
          }
        }}
      />
    </div>
  );
}
