import React, { useMemo, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const Table = ({ columns, data = [], onSelect }) => {
    const [selectedCells, setSelectedCells] = useState([]); 
    const rowHeight = 40;

    const getHeaders = () => {
        const headerData = columns?.map((column) => (
            <div key={column?.accessorKey} className="header-cell" style={{ minWidth: column?.width ?? "max-width" }}>
                {column?.header}
            </div>
        ))
        return headerData
    }

    const handleCellClick = (index, columnIndex) => {
        const clickedCell = { rowIndex: index, columnIndex };

        const isSelected = selectedCells?.some((cell) => (
            cell?.rowIndex === clickedCell?.rowIndex && cell?.columnIndex === clickedCell?.columnIndex
        ));

        const updatedSelectedCells = selectedCells?.filter((cell) => cell?.rowIndex !== clickedCell?.rowIndex);

        if (!isSelected) {
            updatedSelectedCells.push(clickedCell);
        }

        setSelectedCells(updatedSelectedCells);
        onSelect(updatedSelectedCells);
    };

    const getCellClassName = (index, columnIndex) => {
        const isHeader = index % 2 === 0;
        const isSelected = selectedCells?.some((cell) => cell?.rowIndex === index && cell?.columnIndex === columnIndex);
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

    const handleCellClickWrapper = (index, columnIndex) => {
        const isHeader = index % 2 === 0;
        const isClickable = !isHeader && columns?.[columnIndex]?.clickable;

        if (isClickable) {
            handleCellClick(index, columnIndex);
        }
    };

    return (
        <div className="table-container">
            <div className="header-row">
                {getHeaders()}
            </div>
            <List
                height={400}
                itemCount={data?.length * 2}
                itemSize={rowHeight}
            >
                {({ index, style }) => (
                    <div style={style} className='table-row' >
                        {columns.map((column, columnIndex) => (
                            <div
                                key={column?.accessorKey}
                                className={getCellClassName(index, columnIndex)}
                                style={{ minWidth: column?.width ?? "min-width" }}
                                onClick={() => handleCellClickWrapper(index, columnIndex)}

                            >
                                {index % 2 === 0
                                    ? column?.headerValue ? column.headerValue({ row: data?.[index] }) : column?.header
                                    : column?.renderValue ? column.renderValue({ row: data?.[index] }) : data?.[index]?.[column]}
                            </div>
                        ))}
                    </div>
                )}
            </List>

        </div>
    );
};

export default Table;