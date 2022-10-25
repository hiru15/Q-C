import ShowNumberFormat from "@components/Common/NumberFormat";
import * as React from "react";
import moment from "moment";
import { WITHDRAWAL_STATE } from './statics';
import { STATUS_WITHDRAWAL_BY_NAME } from '@utils/staticFunctions';
type TableColumn<Entry> = {
  title: string;
  field: keyof Entry;
  right?: boolean;
  type?: string;
  bold?: boolean;
  Cell?({ entry }: { entry: Entry }): React.ReactElement;
  buttonComponent?: any;
};

export type TableProps<Entry> = {
  data: Entry[];
  columns: TableColumn<Entry>[];
  textNotFound?: string;
  textLoading?: string;
  loading: boolean;
};

export const Table = <Entry extends { id: string }>({
  data,
  columns,
  textNotFound,
  loading,
  textLoading,
}: TableProps<Entry>) => {
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50px",
          marginBottom: "10px",
        }}
      >
        <span style={{ color: "white", fontSize: "24px" }}>{textLoading}</span>
      </div>
    );
  }
  if (!data?.length) {
    return (
      <div>
        <h4 className="text-center">{textNotFound}</h4>
      </div>
    );
  }
  return (
    <table className="table table-striped table-dark table-borderless table-hover table-header table-mobile">
      <thead className="">
        <tr>
          {columns?.map((column, index) => (
            <th
              key={column.title + index}
              scope="col"
              right={column.right ? "true" : null}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((entry, entryIndex) => (
          <tr key={entry?.id || entryIndex}>
            {columns.map(
              (
                { Cell, field, title, type, buttonComponent, bold },
                columnIndex
              ) => {
                return (
                  <td bold={bold ? "true" : null} key={title + columnIndex}>
                    <>
                      {field === "name" && !entry[field] && "Depósito"}
                      {field === "createdDate" || field === "CreationTime" &&
                        moment(entry[field]).format("DD/MM/YYYY HH:mm:ss")}
                      {type === "currency" && <span>{"+"}</span> && (
                        <ShowNumberFormat value={entry[field]} />
                      )}
                      {type === "optionsWithdrawals" && entry.state === 'requested' && buttonComponent(entry)}
                      {type === "options" && buttonComponent(entry)}
                      {type === 'stateWithdrawals' && (
                        WITHDRAWAL_STATE[entry[field]]
                      )}
                      {type === 'methodWithdrawals' && (
                       entry[field] === 'airtm' ? 'AirTM'
                       : 'Transferencia bancaria'
                      )}
                      {type === 'gameTitle' && entry.game.game_title}
                      {type === 'typeBet' && 'Unica'}
                      {field !== "createdDate" &&
                        type !== "currency" &&
                        type !== "stateWithdrawals" &&
                        type !== "methodWithdrawals" &&
                        type !== "typeBet" &&
                        type !== 'gameTitle' &&
                        (Cell ? <Cell entry={entry} /> : entry[field])}
                    </>
                  </td>
                );
              }
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
