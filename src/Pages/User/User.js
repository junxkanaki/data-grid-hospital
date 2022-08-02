import React, { useState, useEffect } from "react";
import useStyles from "./Style";
import { Box, Button, TextField, Modal, Select, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const data = [
    {
        id: 1,
        UserName: "王醫師",
        Position: "Doctor",
        Mail: "DoctorWan@gmail.com",
    },
    {
        id: 2,
        UserName: "蔡行政",
        Position: "Administration",
        Mail: "Administation2@gmail.com",
    },
    {
        id: 3,
        UserName: "管理者",
        Position: "Admin",
        Mail: "Admin1@gmail.com",
    },
];

const columns = [
    {
        field: "UserName",
        headerName: "UserName",
        width: 160,
        editable: true,
    },
    {
        field: "Position",
        headerName: "Position",
        type: "singleSelect",
        valueOptions: ["Admin", "Doctor", "Administration"],
        width: 160,
        editable: true,
    },
    {
        field: "Mail",
        headerName: "Mail",
        type: "text",
        width: 200,
        editable: true,
    },
    {
        field: "action",
        headerName: "Action",
        sortable: false,
        renderCell: (params) => {
            const onClick = (e) => {
                console.log(params);
            };

            return (
                <Button
                    onClick={onClick}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                >
                    刪除
                </Button>
            );
        },
    },
];

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const User = () => {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);
    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        setRows(data);
    });

    return (
        <Box className={classes.container}>
            <Box sx={{ width: "100%", height: `10vh` }}>
                <Button
                    variant="contained"
                    sx={{ width: "100%" }}
                    onClick={handleOpen}
                >
                    新增
                </Button>
            </Box>

            <DataGrid
                rows={rows}
                columns={columns}
                sx={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    width: "100%",
                    height: `80vh`,
                    // height: `${WindoHeight * 0.7}px`,
                }}
                editMode="row"
                experimentalFeatures={{ newEditingApi: true }}
            />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">新增使用者</h2>
                    <TextField
                        id="outlined-basic"
                        label="輸入姓名"
                        variant="outlined"
                        sx={{ width: "100%", marginBottom: "10px" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="輸入帳號"
                        variant="outlined"
                        sx={{ width: "100%", marginBottom: "10px" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="輸入密碼"
                        variant="outlined"
                        sx={{ width: "100%", marginBottom: "10px" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="輸入Email"
                        variant="outlined"
                        sx={{ width: "100%", marginBottom: "10px" }}
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        sx={{ width: "100%", marginBottom: "10px" }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Box>
            </Modal>
        </Box>
    );
};

export default User;
