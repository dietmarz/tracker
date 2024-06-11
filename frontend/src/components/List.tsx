import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Box,
    Typography
} from '@mui/material';
import { Item } from "../model/Item.ts";
import DeleteDialog from './DeleteDialog.tsx';
import ItemService from "../service/ItemService.ts";
import { useEffect, useState } from "react";

const List: React.FC = () => {
    const [open, setOpenDeleteDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            const fetchedItems = await ItemService.getAllItems();
            setItems(fetchedItems);
        };

        fetchItems();
    }, []);

    const handleOpenDeleteDialog = (item: Item) => {
        setSelectedItem(item);
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
        setSelectedItem(null);
    };


    const handleDelete = async (id: number) => {
        const isDeleted = await ItemService.deleteItem(id);
        if (isDeleted) {
            const fetchedItems = await ItemService.getAllItems();
            console.log("Anzahl: ", fetchedItems.length);



            // setItems(prevItems => prevItems.filter(item => item.id !== id));
            setItems(fetchedItems);
        }
        handleCloseDeleteDialog();
    };

    return (
        <Container>
            <Box mt={5} mb={2}>
                <Typography variant="h4" gutterBottom>
                    Item List
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Interval</TableCell>
                            <TableCell>Url</TableCell>
                            <TableCell>XPath</TableCell>
                            <TableCell>Screenshot</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.interval}</TableCell>
                                <TableCell>{item.url}</TableCell>
                                <TableCell>{item.xpath}</TableCell>
                                <TableCell>{item.screenshot ? 'Yes' : 'No'}</TableCell>
                                <TableCell>
                                    <Button
                                        component={Link}
                                        to={`/edit/${item.id}`}
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
                                        onClick={() => handleOpenDeleteDialog(item)}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        component={Link}
                                        to={`/view/${item.id}`}
                                        variant="contained"
                                        size="small"
                                    >
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box mt={2}>
                <Button component={Link} to="/create" variant="contained" color="primary">
                    Create
                </Button>
            </Box>
            <DeleteDialog
                open={open}
                item={selectedItem}
                onClose={handleCloseDeleteDialog}
                onDelete={() => handleDelete(selectedItem!.id)}
            />
        </Container>
    );
};

export default List;
