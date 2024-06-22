import * as React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { Item } from '../model/Item.ts';

interface DeleteDialogProps {
    open: boolean;
    item: Item | null;
    onClose: () => void;
    onDelete: (id: number) => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ open, item, onClose, onDelete }) => {
    const handleDelete = () => {
        if (item) {
            onDelete(item.id);
        }
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete Item</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Möchten Sie wirklich Item mit ID {item?.id} und Beschreibung "{item?.description}" löschen?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="primary">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;
