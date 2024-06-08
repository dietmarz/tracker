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
import {Item} from "../model/Item.ts";

const List: React.FC = () => {
    const data: Item[] = [
        { id: 1, description: 'First item',  interval: 10, url: 'http://example.com', xpath: '/html/body', screenshot: true },
        { id: 2, description: 'Second item', interval: 20, url: 'http://example.com', xpath: '/html/body/div', screenshot: false },
        // Weitere Dummy-Daten können hier hinzugefügt werden
    ];

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
                        {data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.interval}</TableCell>
                                <TableCell>{item.url}</TableCell>
                                <TableCell>{item.xpath}</TableCell>
                                <TableCell>{item.screenshot ? 'Yes' : 'No'}</TableCell>
                                <TableCell>
                                    <Button variant="contained" size="small" style={{ marginRight: 8 }}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" size="small" style={{ marginRight: 8 }}>
                                        Delete
                                    </Button>
                                    <Button variant="contained" size="small">
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box mt={2}>
                <Button component={Link} to="/create" variant="contained" color="primary" >
                    Create
                </Button>
            </Box>
        </Container>
    );
};

export default List;
