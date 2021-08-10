import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import DogBreedData from './variable/DogData';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    imageList: {
        width: 1000,
        height: 817,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: '0 0 16px rgba(0, 0, 0, .3)',
        padding: '10px'
      },
}));

export default function DogList() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});

    function handleEvent(item) {
        setData(item);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <ImageList rowHeight={160} className={classes.imageList} cols={3}>
                {DogBreedData.map((item) => (
                <ImageListItem key={item.id} cols={item.cols || 3}>
                    <img src={item.url} alt={item.name} onClick={() => handleEvent(item)} />
                </ImageListItem>
                ))}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className="modal-card">
                        <img src={data.url} alt={data.name} />
                        <h2>{ data.name }</h2>
                    </div>
                    </Fade>
                </Modal>
            </ImageList>
            
        </div>
    )
}
