import React, { useReducer, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';

const initialState = {
    selectedCells: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_CELL_SELECTION':
            const { rowIndex, columnIndex, data, cellData } = action.payload;
            const clickedCell = { rowIndex, columnIndex, data, cellData };

            const isSelected = state.selectedCells.some(
                (cell) =>
                    cell.rowIndex === clickedCell.rowIndex &&
                    cell.columnIndex === clickedCell.columnIndex
            );

            const updatedSelectedCells = state.selectedCells.filter(
                (cell) => cell.rowIndex !== clickedCell.rowIndex
            );

            if (!isSelected) {
                updatedSelectedCells.push(clickedCell);
            }

            return { ...state, selectedCells: updatedSelectedCells };

        case 'CLEAR_SELECTION':
            return { ...state, selectedCells: [] };

        default:
            return state;
    }
}

const Table = ({ columns, data = [], onSelect }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const rowHeight = 40;

    useEffect(() => {
        onSelect(state.selectedCells);
    }, [state.selectedCells, onSelect]);

    const getHeaders = () => {
        return columns.map((column) => (
            <div
                key={column?.accessorKey}
                className="header-cell"
                style={{ minWidth: column?.width ?? 'max-width' }}
            >
                {column?.header}
            </div>
        ));
    };

    const handleCellClick = (index, columnIndex, cellData) => {
        const isHeader = index % 2 === 0;
        const isClickable = !isHeader && columns?.[columnIndex]?.clickable;

        if (isClickable) {
            dispatch({
                type: 'TOGGLE_CELL_SELECTION',
                payload: {
                    rowIndex: index,
                    columnIndex,
                    data: data?.[index],
                    cellData,
                },
                onSelect
            });
        }

    };

    const getCellClassName = (index, columnIndex) => {
        const isHeader = index % 2 === 0;
        const isSelected = state.selectedCells.some(
            (cell) => cell?.rowIndex === index && cell?.columnIndex === columnIndex
        );
        const isClickable = !isHeader && columns?.[columnIndex]?.clickable;

        const cellClassNames = ['table-cell'];

        if (isSelected) {
            cellClassNames.push('selected');
        }

        if (isClickable) {
            cellClassNames.push('clickable');
        }

        return cellClassNames.join(' ');
    };

    const renderCellValue = (column, index) => {
        if (index % 2 === 1) {
            return column?.renderValue
                ? column.renderValue({ row: data?.[index] })
                : data?.[index]?.[column];
        } else {
            return column?.headerValue
                ? column.headerValue({ row: data?.[index] })
                : column?.header;
        }
    };

    return (
        <div className="table-container">
            <div className="header-row">{getHeaders()}</div>
            <List height={400} itemCount={data?.length * 2} itemSize={rowHeight}>
                {({ index, style }) => (
                    <div style={style} className="table-row">
                        {columns.map((column, columnIndex) => (
                            <div
                                key={column?.accessorKey}
                                className={getCellClassName(index, columnIndex)}
                                style={{ minWidth: column?.width ?? 'min-width' }}
                                onClick={() => handleCellClick(index, columnIndex, renderCellValue(column, index))}
                            >
                                {renderCellValue(column, index)}
                            </div>
                        ))}
                    </div>
                )}
            </List>
        </div>
    );
};

export default Table;
