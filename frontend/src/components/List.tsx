import * as React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback, useMemo } from "react";
import {
    Container,
    Paper,
    Button,
    Box,
    Typography,
    TableContainer
} from '@mui/material';
import { useReactTable, getCoreRowModel, ColumnDef } from '@tanstack/react-table';
import { Item } from "../model/Item.ts";
import DeleteDialog from './DeleteDialog.tsx';
import itemService from "../service/ItemService.ts";
import logService from "../service/LogService.ts";

const List: React.FC = () => {
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [items, setItems] = useState<Item[]>([]);

    const fetchItems = useCallback(async () => {
        const items = await itemService.getAllItems();
        logService.debug("Fetched " + items.length + " Items.");
        setItems(items);
    }, []);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    const handleOpenDeleteDialog = (item: Item) => {
        setSelectedItem(item);
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = async () => {
        setOpenDeleteDialog(false);
        setSelectedItem(null);
    };

    const handleDelete = async (id: number) => {
        const isDeleted = await itemService.deleteItem(id);
        if (isDeleted) {
            logService.debug(`Deleted item with ID: ${id}`);
            await fetchItems();  // Aktualisieren der Items nach dem Löschen
        } else {
            logService.debug(`Failed to delete item with ID: ${id}`);
        }
        handleCloseDeleteDialog();
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Interval',
                accessor: 'interval',
            },
            {
                Header: 'Url',
                accessor: 'url',
            },
            {
                Header: 'XPath',
                accessor: 'xpath',
            },
            {
                Header: 'Screenshot',
                accessor: 'screenshot',
                Cell: ({ cell: { value } }) => (value ? 'Yes' : 'No')
            },
            {
                Header: 'Actions',
                Cell: ({ row: { original } }) => (
                    <>
                        <Button
                            component={Link}
                            to={`/edit/${original.id}`}
                            variant="contained"
                            size="small"
                            style={{ marginRight: 8 }}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            style={{ marginRight: 8 }}
                            onClick={() => handleOpenDeleteDialog(original)}
                        >
                            Delete
                        </Button>
                        <Button
                            component={Link}
                            to={`/view/${original.id}`}
                            variant="contained"
                            size="small"
                        >
                            View
                        </Button>
                    </>
                ),
            },
        ],
        []
    );

    const tableInstance = useTable({ columns, data: items });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <Container>
            <Box mt={5} mb={2}>
                <Typography variant="h4" gutterBottom>
                    Item List
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <table {...getTableProps()} style={{ width: '100%' }}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </TableContainer>
            <Box mt={2}>
                <Button component={Link} to="/create" variant="contained" color="primary">
                    Create
                </Button>
            </Box>
            <DeleteDialog
                open={openDeleteDialog}
                item={selectedItem}
                onClose={handleCloseDeleteDialog}
                onDelete={() => handleDelete(selectedItem!.id)}
            />
        </Container>
    );
};

export default List;
